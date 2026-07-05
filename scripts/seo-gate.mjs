#!/usr/bin/env node
// seo-gate.mjs — Deterministic SEO gate for the static site.
// Node >=18, ZERO external dependencies. Run from repo root:  node scripts/seo-gate.mjs
//
// Exit code 1 if there is >=1 ERROR, else 0. WARNINGS never affect the exit code.
// Final stdout line is ALWAYS exactly:  SEO GATE: N errors, M warnings
//
// This file is a golden fixture: it must not be weakened. Add checks, never remove them.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, '..');
const BASE_URL = 'https://fincas.megaenergia.es/';

// Directories we never descend into when discovering pages.
const SKIP_DIRS = new Set(['node_modules', '.git', '.vercel', 'vendor', '.claude', 'scripts', '.github']);

const errors = [];
const warnings = [];
const err = (file, msg) => errors.push(`${file}: ${msg}`);
const warn = (file, msg) => warnings.push(`${file}: ${msg}`);

// ---------------------------------------------------------------------------
// Filesystem helpers
// ---------------------------------------------------------------------------

/** Recursively collect *.html files under REPO_ROOT, skipping SKIP_DIRS. */
function collectHtml(dir, out) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      collectHtml(path.join(dir, entry.name), out);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) {
      out.push(path.join(dir, entry.name));
    }
  }
}

/** Repo-relative POSIX path for a given absolute path (for messages + keys). */
function rel(absPath) {
  return path.relative(REPO_ROOT, absPath).split(path.sep).join('/');
}

/** Does an absolute path exist as a file on disk (case-insensitive FS tolerated)? */
function fileExists(absPath) {
  try {
    return fs.statSync(absPath).isFile();
  } catch {
    return false;
  }
}
function dirExists(absPath) {
  try {
    return fs.statSync(absPath).isDirectory();
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// Tiny HTML tag/attribute utilities (regex-based, no external deps)
// ---------------------------------------------------------------------------

/** Strip HTML comments so commented-out markup never triggers checks. */
function stripComments(html) {
  return html.replace(/<!--[\s\S]*?-->/g, '');
}

/** Parse the attributes of a single tag string into a lowercased-key map. */
function parseAttrs(tag) {
  const attrs = {};
  const re = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  // Drop the leading "<tagname" so we do not capture it as an attribute.
  const body = tag.replace(/^<\s*[a-zA-Z0-9]+/, '');
  let m;
  while ((m = re.exec(body)) !== null) {
    const name = m[1].toLowerCase();
    const value = m[3] !== undefined ? m[3] : m[4] !== undefined ? m[4] : m[5] !== undefined ? m[5] : '';
    attrs[name] = value;
  }
  return attrs;
}

/** Return array of matched tag strings for a void/self element like meta, link, img. */
function findTags(html, tagName) {
  const re = new RegExp(`<${tagName}\\b[^>]*>`, 'gi');
  return html.match(re) || [];
}

// ---------------------------------------------------------------------------
// URL <-> file mapping
// ---------------------------------------------------------------------------

const EXTERNAL_SCHEME = /^[a-z][a-z0-9+.-]*:/i; // http:, mailto:, tel:, data:, javascript:

/** Should this href/src value be treated as an external / non-file reference? */
function isExternalRef(raw) {
  if (!raw) return true;
  const v = raw.trim();
  if (v === '' || v.startsWith('#')) return true; // pure in-page anchor
  if (v.startsWith('//')) return true; // protocol-relative
  if (EXTERNAL_SCHEME.test(v)) return true; // has a scheme
  return false;
}

/**
 * Resolve a local href/src to an absolute filesystem path.
 * pageAbs is the absolute path of the page that contains the reference.
 * Returns null if it should be skipped (external/anchor).
 */
function resolveLocalRef(raw, pageAbs) {
  if (isExternalRef(raw)) return null;
  let v = raw.trim();
  // Drop query string and fragment.
  v = v.split('#')[0].split('?')[0];
  if (v === '') return null;
  let decoded;
  try {
    decoded = decodeURIComponent(v);
  } catch {
    decoded = v;
  }
  let target;
  if (decoded.startsWith('/')) {
    target = path.join(REPO_ROOT, decoded);
  } else {
    target = path.resolve(path.dirname(pageAbs), decoded);
  }
  // Directory-style URL -> index.html
  if (decoded.endsWith('/')) {
    target = path.join(target, 'index.html');
  } else if (dirExists(target) && !fileExists(target)) {
    target = path.join(target, 'index.html');
  }
  return target;
}

/** Map an absolute page path to its canonical site URL. */
function fileToUrl(absPath) {
  const r = rel(absPath);
  if (r === 'index.html') return BASE_URL;
  if (r === 'blog/index.html') return BASE_URL + 'blog/';
  return BASE_URL + r;
}

/**
 * Map a site URL (from sitemap.xml) to an absolute filesystem path.
 * Returns null if the URL is not under BASE_URL.
 */
function urlToFile(url) {
  const u = url.trim();
  if (!u.startsWith(BASE_URL.replace(/\/$/, ''))) return null;
  let pathPart = u.slice(BASE_URL.length - 1); // keep leading slash
  pathPart = pathPart.split('#')[0].split('?')[0];
  try {
    pathPart = decodeURIComponent(pathPart);
  } catch { /* keep raw */ }
  if (pathPart === '' || pathPart === '/') return path.join(REPO_ROOT, 'index.html');
  if (pathPart.endsWith('/')) return path.join(REPO_ROOT, pathPart, 'index.html');
  return path.join(REPO_ROOT, pathPart);
}

// ---------------------------------------------------------------------------
// Page model
// ---------------------------------------------------------------------------

function isIndexablePath(r) {
  return r === 'index.html' || r === 'blog/index.html' || /^blog\/[^/]+\.html$/.test(r);
}

function loadPage(absPath) {
  const raw = fs.readFileSync(absPath, 'utf8');
  const html = stripComments(raw);
  const r = rel(absPath);

  // robots meta -> noindex?
  let noindex = false;
  for (const tag of findTags(html, 'meta')) {
    const a = parseAttrs(tag);
    if ((a.name || '').toLowerCase() === 'robots' && /noindex/i.test(a.content || '')) {
      noindex = true;
    }
  }

  return { absPath, rel: r, raw, html, noindex, indexableSet: isIndexablePath(r) };
}

// ---------------------------------------------------------------------------
// Checks
// ---------------------------------------------------------------------------

function checkJsonLd(page) {
  const re = /<script\b[^>]*\btype\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  let idx = 0;
  while ((m = re.exec(page.html)) !== null) {
    idx += 1;
    const body = m[1].trim();
    if (body === '') {
      err(page.rel, `JSON-LD block #${idx} is empty`);
      continue;
    }
    try {
      JSON.parse(body);
    } catch (e) {
      err(page.rel, `JSON-LD block #${idx} fails JSON.parse (${e.message})`);
    }
  }
}

function checkInternalRefs(page) {
  const re = /(?:href|src)\s*=\s*("([^"]*)"|'([^']*)')/gi;
  let m;
  const seen = new Set();
  while ((m = re.exec(page.html)) !== null) {
    const raw = m[2] !== undefined ? m[2] : m[3];
    const target = resolveLocalRef(raw, page.absPath);
    if (target === null) continue;
    const key = target + '||' + raw;
    if (seen.has(key)) continue;
    seen.add(key);
    if (!fileExists(target)) {
      err(page.rel, `broken local reference "${raw}" -> ${rel(target)} (missing)`);
    }
  }
}

function checkImgAlt(page) {
  for (const tag of findTags(page.html, 'img')) {
    const a = parseAttrs(tag);
    if (!('alt' in a)) {
      const src = a.src || '(no src)';
      err(page.rel, `<img> without alt attribute (src="${src}")`);
    }
  }
}

function checkCanonical(page) {
  const canonicals = [];
  for (const tag of findTags(page.html, 'link')) {
    const a = parseAttrs(tag);
    if ((a.rel || '').toLowerCase() === 'canonical') canonicals.push(a.href || '');
  }
  if (canonicals.length === 0) {
    err(page.rel, 'missing <link rel="canonical">');
    return;
  }
  for (const href of canonicals) {
    if (!href.startsWith(BASE_URL)) {
      err(page.rel, `canonical not under ${BASE_URL} (got "${href}")`);
    }
  }
}

function checkH1(page) {
  const count = (page.html.match(/<h1[\s>/]/gi) || []).length;
  if (count === 0) err(page.rel, 'zero <h1>');
  else if (count > 1) err(page.rel, `multiple <h1> (found ${count})`);
}

function checkHeadingJumps(page) {
  const re = /<h([1-6])\b[^>]*>/gi;
  let m;
  let prev = 0;
  while ((m = re.exec(page.html)) !== null) {
    const level = Number(m[1]);
    if (prev !== 0 && level > prev + 1) {
      warn(page.rel, `heading-level jump h${prev}->h${level}`);
    }
    prev = level;
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const htmlAbs = [];
  collectHtml(REPO_ROOT, htmlAbs);
  htmlAbs.sort();
  const pages = htmlAbs.map(loadPage);

  // Indexable-for-checks = in the indexable set AND not noindex.
  const indexablePages = pages.filter((p) => p.indexableSet && !p.noindex);

  // --- Per-page well-formedness (ALL pages) ---
  for (const page of pages) {
    checkJsonLd(page);
    checkInternalRefs(page);
  }

  // --- Per-page indexability checks (indexable pages only) ---
  const titleMap = new Map(); // normalized title -> [rel]
  const descMap = new Map(); // normalized description -> [rel]

  for (const page of indexablePages) {
    checkCanonical(page);
    checkH1(page);
    checkImgAlt(page);
    checkHeadingJumps(page);

    // Title
    const titleTags = page.html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/gi) || [];
    if (titleTags.length === 0) {
      err(page.rel, 'missing <title>');
    } else if (titleTags.length > 1) {
      err(page.rel, `multiple <title> tags (found ${titleTags.length})`);
    } else {
      const inner = titleTags[0].replace(/<title\b[^>]*>/i, '').replace(/<\/title>/i, '').trim();
      if (inner === '') {
        err(page.rel, 'empty <title>');
      } else {
        if (inner.length > 65) warn(page.rel, `title >65 chars (${inner.length})`);
        const key = inner.toLowerCase();
        if (!titleMap.has(key)) titleMap.set(key, []);
        titleMap.get(key).push(page.rel);
      }
    }

    // Meta description
    const descs = [];
    for (const tag of findTags(page.html, 'meta')) {
      const a = parseAttrs(tag);
      if ((a.name || '').toLowerCase() === 'description') descs.push(a.content || '');
    }
    if (descs.length === 0) {
      err(page.rel, 'missing meta description');
    } else if (descs.length > 1) {
      err(page.rel, `multiple meta description tags (found ${descs.length})`);
    } else {
      const d = descs[0].trim();
      if (d === '') {
        err(page.rel, 'empty meta description');
      } else {
        if (d.length < 70) warn(page.rel, `meta description <70 chars (${d.length})`);
        else if (d.length > 165) warn(page.rel, `meta description >165 chars (${d.length})`);
        const key = d.toLowerCase();
        if (!descMap.has(key)) descMap.set(key, []);
        descMap.get(key).push(page.rel);
      }
    }
  }

  // Cross-page duplicates
  for (const [, files] of titleMap) {
    if (files.length > 1) err(files[0], `duplicate <title> shared with: ${files.slice(1).join(', ')}`);
  }
  for (const [, files] of descMap) {
    if (files.length > 1) err(files[0], `duplicate meta description shared with: ${files.slice(1).join(', ')}`);
  }

  // --- sitemap.xml ---
  const sitemapAbs = path.join(REPO_ROOT, 'sitemap.xml');
  if (!fileExists(sitemapAbs)) {
    err('sitemap.xml', 'missing sitemap.xml');
  } else {
    const sitemap = fs.readFileSync(sitemapAbs, 'utf8');
    const locs = [...sitemap.matchAll(/<loc>\s*([\s\S]*?)\s*<\/loc>/gi)].map((m) => m[1].trim());
    const sitemapFileKeys = new Set();
    for (const loc of locs) {
      const target = urlToFile(loc);
      if (target === null) {
        err('sitemap.xml', `URL not under ${BASE_URL}: ${loc}`);
        continue;
      }
      sitemapFileKeys.add(rel(target));
      if (!fileExists(target)) {
        err('sitemap.xml', `URL has no corresponding file: ${loc} -> ${rel(target)}`);
      }
    }
    // Every indexable page must be in the sitemap.
    for (const page of indexablePages) {
      if (!sitemapFileKeys.has(page.rel)) {
        err('sitemap.xml', `indexable page missing from sitemap: ${page.rel} (${fileToUrl(page.absPath)})`);
      }
    }
  }

  // --- robots.txt ---
  const robotsAbs = path.join(REPO_ROOT, 'robots.txt');
  if (!fileExists(robotsAbs)) {
    err('robots.txt', 'missing robots.txt');
  } else {
    const robots = fs.readFileSync(robotsAbs, 'utf8');
    if (!/sitemap\s*:/i.test(robots) || !/sitemap\.xml/i.test(robots)) {
      err('robots.txt', 'does not reference the sitemap (expected a "Sitemap:" line pointing to sitemap.xml)');
    }
  }

  // --- Output ---
  for (const e of errors) console.log(`ERROR ${e}`);
  for (const w of warnings) console.log(`WARN  ${w}`);
  console.log(`SEO GATE: ${errors.length} errors, ${warnings.length} warnings`);
  process.exit(errors.length > 0 ? 1 : 0);
}

main();
