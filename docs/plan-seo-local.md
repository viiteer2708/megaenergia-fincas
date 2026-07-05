# Plan SEO local — fincas.megaenergia.es

> **Negocio:** Mega Energía · canal Administradores de Fincas (AAFF) · titular **ENERGIA LIBRE COMERCIALIZADORA, S.L.U.** (NIF B-90137316).
> **Ámbito:** B2B **nacional** (administradores de fincas en toda España). Servicio remoto, **no** es un negocio local con tienda.
> **Fecha de síntesis:** 2026-07-05 · **Rama:** `feat/seo-local-loop`
> **Fuentes fusionadas:** 4 lentes de auditoría (keywords/intención, money page/entidad, contenido/frescura, autoridad/citaciones) + recon SERP (WebSearch + WebFetch) + verificación on-page en el repo.

---

## 0. Cómo leer este plan y reglas de oro aplicadas

Este documento fusiona todos los hallazgos brutos en **un solo plan**, ya deduplicado, con contradicciones resueltas y re-priorizado por impacto/esfuerzo.

- **§2 (WEB)** = lo que ejecuta el equipo directamente en el repo. Tiene **textos listos para pegar** (§2.4).
- **§3 (Victor)** = lo que exige una acción o una decisión de Victor fuera del repo (GBP, reseñas, citaciones/backlinks, medición). Trae instrucciones exactas y textos listos.
- **§4** = los 3 competidores y la foto de la SERP.

**Reglas de oro respetadas en toda la síntesis (las líneas rojas, con su porqué):**
1. **No inventar datos ni cifras.** Lo que falta se marca `PENDIENTE DE DATO`.
2. **Sin keyword stuffing** en nombres/títulos (ni en el nombre de la ficha GBP).
3. **Nada de doorway pages** (páginas casi idénticas por ciudad/pueblo). Al ser B2B nacional, la variante correcta de "servicio+ciudad" es **"servicio+segmento"** (servicio + comunidades/AAFF), nunca por ciudad.
4. **Sin `AggregateRating`** autoservido en el schema del propio negocio.
5. **El JSON-LD solo contiene datos visibles** en la página.
6. **No prometer posiciones ni plazos** ni ahorros concretos sin estudio.

**Elementos marcados `AMBIGUO`** (requieren decisión de negocio de Victor, no los interpreto): validez de las cifras de marca (§3.1-B), si se opera o no una ficha GBP (§3.4), mostrar la dirección real como NAP público vs. modo área-de-servicio sin calle (§3.1-A), y qué persona real firma para E-E-A-T (§3.6).

---

## 1. Resumen ejecutivo

**El punto de partida (SERP, julio 2026):** `fincas.megaenergia.es` **no aparece en el top-10** de ninguna de sus tres keywords objetivo. El clic transaccional se lo reparten (a) los grandes incumbentes por el término cabeza ("luz y gas para comunidades": Naturgy, Endesa, Repsol, TotalEnergies) y (b) los especialistas peer por la long-tail "…administradores de fincas" (Élite Energía, ECD Energía, Nasergy). **El hueco real y ganable es la long-tail AAFF**, donde los líderes son PYMES batibles.

**Estrategia rectora (no negociable):** mantener **una money page vertical única y fuerte** — todo el dominio `fincas.megaenergia.es` ES la página AAFF, posición igual o más fuerte que la subpágina `/administradores-de-fincas/` de los competidores — reforzada por (1) un **clúster de páginas "servicio + segmento"** (cambio de titular, energía reactiva, cambiar comercializadora, autoconsumo colectivo…) y (2) un **blog 100% AAFF** que ya existe. **Prohibido fragmentar en páginas por ciudad**: sería doorway.

**Diagnóstico en cuatro frentes:**
- **On-page / relevancia:** la home no reclama on-page las keywords nº2 ("comercializadora para administradores de fincas") ni nº3 ("luz y gas para comunidades de propietarios"); la meta no lleva la keyword núcleo ni el gancho transaccional "gratuita/sin compromiso"; falta teléfono clicable above-the-fold.
- **Entidad / schema:** buena base (es la única de las 4 webs con JSON-LD) pero **sin nodo `Service`, sin `sameAs`, sin vínculo con la matriz** — y con una **dirección inventada (Badalona)** que contradice el domicilio real de Sevilla de las páginas legales.
- **Contenido / frescura:** blog fuerte y 100% AAFF (ventaja que nadie iguala) pero **parado ~3 meses**; faltan clústeres de alta demanda (mecánica del cambio, leer la factura, ayudas/subvenciones, tarifa/potencia de zonas comunes).
- **Autoridad / off-page:** **cero backlinks sectoriales** pese a tener ya de partners a los Colegios de AAFF de Cádiz y Málaga (palanca calentísima que ningún competidor tiene); sin LinkedIn ni citaciones consistentes; sin analítica.

**Los 6 movimientos P1 (máximo impacto):**
1. **Corregir la dirección falsa** Badalona → Sevilla en footer y schema (riesgo de entidad + regla de oro nº1). — `WEB-NAP-01`
2. **Reclamar la keyword nº2 on-page**: reescribir el H2 "Qué hacemos" para afirmar "la comercializadora especializada en administradores de fincas". — `F09-1`
3. **Teléfono clicable above-the-fold** (los 3 competidores lo tienen; no yo). — `A10-1`
4. **Crear las 3 primeras páginas "servicio+segmento"** (titularidad, reactiva, cambiar comercializadora). — `A11-1`
5. **Clúster "cómo funciona el cambio"**: FAQ de mecánica en la home (el mayor gap con señal de demanda) + post pilar. — `A17-01`
6. **Reactivar el blog** con cadencia sostenida (2 posts/mes) atacando los gaps de contenido. — `A19-01`

**Contradicciones resueltas:**
- **Dirección (F1 / A10-3 / WEB-NAP-01):** tres lentes vieron el mismo problema. F1 y A10-3 lo dejaban como "PENDIENTE, preguntar a Victor"; **WEB-NAP-01 encontró el dato canónico** en `aviso-legal.html` (Avenida Diego Martínez Barrio 10, 41013 Sevilla, titular ENERGIA LIBRE COMERCIALIZADORA, S.L.U.). **Gana WEB-NAP-01:** es un fix WEB accionable, no un pendiente. Lo verificado en el repo: `index.html:240` y `:912` publican Badalona; las tres páginas legales declaran Sevilla. Queda solo un residuo para Victor: confirmar que ese domicilio es el NAP a exhibir y que cuadra con el GBP (§3.1-A).
- **Footer "Servicios" (F16-3 vs A11-3):** F16-3 pedía enlazarlo a las guías del blog; A11-3, a las páginas de servicio. **Gana A11-3:** una vez existan las páginas servicio+segmento, el footer y el grid enlazan a **páginas de servicio** (transaccional); las guías del blog se enlazan desde el **cuerpo** ("Qué incluye") y dentro de cada página de servicio.
- **Cifras de ahorro (A10-2 vs F4):** el badge `-32,4%` y el mockup `-15%` son demo ilustrativa → **fix WEB inmediato** (neutralizar, A10-2). Las cifras de titular `+5.000 comunidades` / `+10.000 trámites` / `12 incidencias` → **decisión de Victor** (verificar que son reales; §3.1-B, AMBIGUO).
- **Meta description (F09-3 + F6):** un solo item. La versión de F09-3 ya incluye la keyword núcleo **y** el modificador transaccional, así que cubre también F6.
- **Schema `Service` (A10-4 = F3):** duplicado exacto → un item, fusionado además con `sameAs`/`parentOrganization` (F2) en una única mejora del JSON-LD.
- **Servicios en "Qué incluye" (F09-2 + A10-5 + F09-4):** el mismo problema ("la money page no nombra reactiva/autoconsumo/optimización/agrupación") visto por dos lentes → un item con todos los bullets + enlazado interno (absorbe F16-3).

**Balance de items tras deduplicar:** WEB = **25** (6 P1 · 12 P2 · 7 P3). Cola de Victor = **18**.

---

## 2. Plan WEB (ejecuta el equipo en el repo)

> Todos los cambios sobre `index.html` salvo donde se indique. **No hacer push sin permiso de Victor.** Los snippets completos están en **§2.4**, referenciados por ID.

### 2.0 Estado de aplicación — iteración 1 (2026-07-05, rama `feat/seo-local-loop`)

> Marca de ejecución por item (nunca se borran items). Gate `scripts/seo-gate.mjs`: **0 errores** (3 warnings preexistentes de baseline). CSS recompilado con `npm run build:css`.

**P1**
- `WEB-NAP-01` — **[APLICADO]** Dirección Badalona→Sevilla en footer y JSON-LD `address`; añadido `legalName` real + razón social/NIF visibles en footer. (Residuo §3.1-A sigue siendo decisión de Victor.)
- `F09-1` — **[APLICADO]** H2 "Qué hacemos" reclama la keyword nº2 ("la comercializadora especializada en administradores de fincas") + subcopy.
- `A10-1` — **[APLICADO]** Teléfono `tel:+34623723217` clicable above-the-fold (desktop + botón-icono móvil). Nota: el número ya se publicaba en `#contacto`; su condición de línea oficial del canal AAFF sigue `PENDIENTE DE DATO` (Victor, §3.2).
- `A11-1` — **[APLICADO]** 3 páginas servicio+segmento tanda 1 creadas (`/servicios/cambio-de-titularidad-comunidades/`, `/energia-reactiva-comunidades/`, `/cambiar-comercializadora-comunidades/`), con proceso/documentación/FAQ únicos (checklist anti-doorway) y en sitemap con canonical.
- `A17-01` — **[APLICADO]** 6 FAQ de mecánica visibles en `#faq` + en el `FAQPage`; post pilar `blog/como-funciona-cambio-comercializadora-comunidad.html` publicado.
- `A19-01` — **[APLICADO]** Blog reactivado: 4 posts nuevos (2026-07-05), índice del blog actualizado, `sitemap.xml` con lastmod y nuevas URLs. Cadencia 2/mes documentada.

**P2**
- `F16-1` — **[APLICADO]** H2 "Qué incluye" con "luz y gas" + "comunidades de propietarios"; H1 refuerza "luz y gas".
- `META` — **[APLICADO]** Meta description con keyword núcleo + gancho transaccional.
- `SERV` — **[APLICADO]** 4 bullets nuevos en "Qué incluye" con enlaces internos a guías (reactiva, autoconsumo).
- `A10-2` — **[APLICADO]** Cifras demo `-32,4%` → "En revisión" y `-15% Ahorro` → "Tarifa optimizada / Ejemplo".
- `SCHEMA` — **[APLICADO]** Nodo `Service` + `legalName` + `parentOrganization` + `sameAs` en Organization; enlace visible "Parte del grupo Mega Energía" en footer. `sameAs` solo con URL real (`megaenergia.es`); LinkedIn/Instagram omitidos por `PENDIENTE DE DATO` (regla de oro nº5 — no URLs inventadas).
- `A11-2` — **[APLICADO]** 3 páginas servicio+segmento tanda 2 (`/autoconsumo-colectivo-comunidades/`, `/optimizacion-potencia-comunidades/`, `/agrupacion-puntos-suministro/`).
- `A11-3` — **[APLICADO]** Footer "Servicios" enlaza a páginas reales; grid "Servicios que gestionamos por ti" en `#servicios` enlaza a las 6 páginas.
- `A17-02` — **[APLICADO]** `blog/como-leer-factura-luz-comunidad-propietarios.html`.
- `A17-03` — **[APLICADO]** `blog/ayudas-subvenciones-eficiencia-energetica-comunidades.html` (con aviso "según convocatoria en vigor", sin importes ni promesa de concesión).
- `A17-04` — **[APLICADO]** `blog/que-tarifa-potencia-zonas-comunes-comunidad.html`.
- `A19-02` — **[APLICADO]** Política editorial 100% AAFF documentada como comentario en `blog/index.html`.
- `F5` — **[AMBIGUO: parcial]** Textura de terceros (`transparenttextures.com`) eliminada → sustituida por patrón CSS inline (quita petición externa y roce RGPD). **Aplazados:** self-host de Montserrat/Lato (exige descargar/commitear binarios de fuente y editar la cabecera de ~24 páginas, con riesgo de regresión tipográfica global) y subset de Phosphor (**bloqueado**: no hay `pyftsubset`/`fonttools` en el entorno). Mejora de rendimiento no-SEO-core; se deja para una iteración dedicada.

**P3** (aplicados solo los triviales)
- `F16-STRAT` — **[APLICADO]** Estrategia respetada: money page vertical única + clúster servicio+segmento + blog; cero páginas por ciudad (anti-doorway).
- `F16-4` — **[APLICADO parcial]** El post pilar (A17-01) actúa de hub canónico del clúster "cambio" y enlaza los dos posts solapados con anchors diferenciados ("10 mitos" vs "¿merece la pena?"). No se editaron los dos posts antiguos para no arriesgar; su rol/ángulo distinto queda establecido desde el pilar.
- `A17-05` — **[NO APLICADO — P3 no trivial]** Post de puntos de recarga VE: requiere verificar marco normativo (ITC-BT-52) y mayorías antes de publicar cifras. Queda en cola editorial.
- `A17-06` — **[NO APLICADO — P3 no trivial]** Post LED/eficiencia zonas comunes: post nuevo completo, queda en cola editorial (cadencia A19-01).
- `A10-7` — **[APLICADO]** "Provincia" y "¿Qué te interesa?" pasan a opcionales (obligatorios: nombre, teléfono, email, privacidad).
- `F8` — **[APLICADO]** `auditoria-seo-fincas-megaenergia-es.html` fuera del deploy (añadido a `.vercelignore`); `CAF CADIZ.jpeg`/`CAF Málaga.jpeg` → `caf-cadiz.jpeg`/`caf-malaga.jpeg` + refs actualizadas.
- `A10-8` — **[APLICADO]** Placeholder de teléfono `600 000 000` → `Ej: 612 345 678` (cosmético; ya estaba "cerrado sin acción").

> **Cola para Victor (§3) intacta** (GBP, reseñas, citaciones/backlinks, medición GA4/GSC, testimonios/E-E-A-T): son acciones/decisiones fuera del repo. Read-only en deploy/DNS/secretos: no se toca Vercel ni DNS.

### 2.1 Prioridad P1 (WEB)

| ID | Páginas | Acción | Texto listo |
|---|---|---|---|
| **WEB-NAP-01** | index.html (`:240` schema, `:912` footer) · coherencia con aviso-legal / privacidad | Sustituir la dirección inventada "Calle Energía 10, 08915 Badalona" por el domicilio real **Avenida Diego Martínez Barrio 10, 2ª Planta, Módulo 2.1, 41013 Sevilla** en footer y JSON-LD `address`. Añadir `legalName` real. | ✅ §2.4 |
| **F09-1** | index.html (H2 "Qué hacemos", `~:461`) | Reescribir el H2 para **capturar la keyword nº2** ("comercializadora especializada en administradores de fincas") sin perder el diferenciador "no somos una comercializadora más". Es cierto: el trust banner ya dice "Comercializadora regulada CNMC". | ✅ §2.4 |
| **A10-1** | index.html (nav `~:275-311`) | Añadir **enlace `tel:` clicable above-the-fold**: número visible en desktop + botón-icono de llamada en móvil, en la barra fija. Hoy el único `tel:` está enterrado en `#contacto` (`:745`). | ✅ §2.4 |
| **A11-1** | index.html + **3 páginas nuevas** en `/servicios/` | Crear las 3 primeras páginas **servicio+segmento** con intención transaccional (H1, proceso, documentación, plazos, FAQ propia, CTA): cambio de titularidad, energía reactiva, cambiar comercializadora. Enlazarlas desde `#servicios` y cruzarlas con su post de blog. **Checklist anti-doorway** obligatorio. | ✅ §2.4 |
| **A17-01** | index.html (`#faq`) + **post pilar nuevo** en `/blog/` | Cubrir el clúster **"cómo funciona el cambio"** (el mayor gap con señal de demanda: es la FAQ con la que ECD rankea): añadir **6 preguntas de mecánica** a la FAQ visible + al `FAQPage` (respuesta visible SIEMPRE antes que el schema) y publicar un **post pilar** que agregue el clúster. | ✅ §2.4 |
| **A19-01** | blog/index.html · sitemap.xml | **Reactivar el blog** (parado desde el 2-abr): fijar cadencia **2 posts/mes** atacando los gaps de §2 en orden (A17-01 → A17-02 → A17-03 → A17-04 → P3). Actualizar `sitemap.xml` (lastmod) y el índice del blog en cada publicación. | ✅ §2.4 |

### 2.2 Prioridad P2 (WEB)

| ID | Páginas | Acción | Texto listo |
|---|---|---|---|
| **F16-1** | index.html (H2 "Qué incluye", `:552`; opc. H1 `:327`) | Reescribir el H2 para incluir el literal **"luz y gas" + "comunidades de propietarios"** (keyword nº3, transaccional). El gas me distingue de Élite y ECD (electricidad-only). | ✅ §2.4 |
| **META** (F09-3 ∪ F6) | index.html (`:7`) | Reescribir la **meta description**: keyword núcleo ("administradores de fincas" + "comunidades de propietarios") **y** modificador transaccional ("revisión gratuita sin compromiso"), sin stuffing. | ✅ §2.4 |
| **SERV** (F09-2 ∪ A10-5 ∪ F09-4 ∪ F16-3) | index.html ("Qué incluye" `:554-589`) + guías de blog | Enriquecer la lista "Qué incluye" con los servicios que los competidores sí listan y yo no: **optimización de potencia contratada, energía reactiva, autoconsumo colectivo, agrupación de puntos de suministro**; y **enlazar cada mención a su guía de blog** (reactiva, autoconsumo, cambio de comercializadora, cambios de titular). Habilita citarlos luego en el schema (regla nº5). | ✅ §2.4 |
| **A10-2** | index.html (`:368`, `:615`) | **Neutralizar las cifras demo** presentadas como logro real: `-32,4% Ahorro conseguido` y `-15% Ahorro` del mockup (línea roja: no prometer ahorros sin estudio). Convertir en etiqueta no numérica / claramente ilustrativa. | ✅ §2.4 |
| **SCHEMA** (A10-4 = F3 ∪ F2) | index.html (`@graph` `:222-268`) | Ampliar el JSON-LD: añadir nodo **`Service`** (provider = Organization, areaServed = España, audience = AAFF) y añadir **`legalName` + `parentOrganization` (Mega Energía) + `sameAs`** al `Organization`. Con **enlace visible** en el footer "Parte del grupo Mega Energía" (regla nº5). Las URLs de redes van `PENDIENTE DE DATO` (§3.1). Sin `AggregateRating`. | ✅ §2.4 |
| **A11-2** | 3 páginas nuevas en `/servicios/` | Segunda tanda servicio+segmento: **autoconsumo colectivo** (diferenciador: los 3 competidores son débiles ahí), optimización de potencia/tarifas, agrupación de puntos de suministro. Misma estructura y checklist anti-doorway; cruzar con el blog. | Estructura en §2.4 (A11-1) |
| **A11-3** | index.html (`#servicios`; footer `:890-895`) | Una vez creadas las páginas, convertir `#servicios` en grid que **enlace a cada página** y sustituir los 3 `href="#servicios"` del footer por las URLs reales. Reparte enlazado interno. | ✅ §2.4 |
| **A17-02** | **post nuevo** `blog/como-leer-factura-luz-comunidad-propietarios.html` | Contenido informacional de alto valor: **"Cómo leer la factura de luz de una comunidad"** (término de potencia, peajes, activa/reactiva, 2.0TD vs 3.0TD). Enlaza a reactiva y a la home. | ✅ §2.4 |
| **A17-03** | **post nuevo** `blog/ayudas-subvenciones-eficiencia-energetica-comunidades.html` | **Ayudas y subvenciones** (rehabilitación, IDAE/Next Gen, comunidades energéticas): tema de altísima intención AAFF con estacionalidad. **No citar importes/porcentajes sin verificar convocatoria** ("según convocatoria en vigor"); no prometer concesión. | ✅ §2.4 |
| **A17-04** | **post nuevo** `blog/que-tarifa-potencia-zonas-comunes-comunidad.html` | **"Qué tarifa y potencia contratar para las zonas comunes"** (ascensor, garaje, alumbrado; 2.0TD/3.0TD; franjas). Enlaza a la guía de optimización existente y a la home. | ✅ §2.4 |
| **A19-02** | blog/index.html (política editorial) | **Proteger el foco 100% AAFF** (ventaja que nadie iguala; Nasergy diluye entre industrial/pymes/hogar). Norma: cada post responde a una duda del administrador/comunidad; si un tema genérico no se reencuadra a AAFF, no entra. | ✅ §2.4 |
| **F5** | index.html · blog/*.html · páginas legales | **Rendimiento:** hoy se cargan las 3 familias Phosphor completas (~429 KB) para ~15 glifos → subsetear o inline SVG. Self-hostar Montserrat/Lato (hoy Google Fonts; roce RGPD). Retirar la textura de `transparenttextures.com` (`:738`, tercero que bloquea). | Instrucciones en §2.4 |

### 2.3 Prioridad P3 (WEB)

| ID | Páginas | Acción | Texto listo |
|---|---|---|---|
| **F16-STRAT** | (gobierno) | **Mantener la estrategia:** money page vertical única + clúster servicio+segmento + blog. **Nunca** crear páginas "servicio+ciudad" (doorway). Concentrar la palanca on-page en las keywords nº2 y nº3. | — |
| **F16-4** | blog `mitos-cambiar-comercializadora-…` y `merece-la-pena-cambiar-comercializadora-…` | **Canibalización leve**: ambos atacan "cambiar de comercializadora en comunidades". Fijar **uno como canónico** para esa keyword, mantener ángulos distintos (10 mitos vs. coste-beneficio) y enlazarlos entre sí con anchor diferenciado. | — |
| **A17-05** | **post nuevo** `blog/puntos-recarga-coche-electrico-comunidad-administrador.html` | **Puntos de recarga VE en comunidades** (quién paga, junta, reparto, ITC-BT-52). Emergente y muy AAFF. **Verificar marco normativo y mayorías antes de publicar cifras.** | ✅ §2.4 |
| **A17-06** | **post nuevo** `blog/iluminacion-led-eficiencia-zonas-comunes-comunidad.html` | Quick-win: **LED y ajustes de eficiencia en zonas comunes** (formato listicle, que a Nasergy le funciona). Encaja con "te lo quitamos". | ✅ §2.4 |
| **A10-7** | index.html (formulario `:790-856`) | **Reducir fricción:** hacer "Provincia" opcional (negocio nacional) y valorar "¿Qué te interesa?" opcional. Obligatorios solo nombre, teléfono, email y checkbox de privacidad. | — |
| **F8** | raíz + `images/` | **Housekeeping:** sacar `auditoria-seo-fincas-megaenergia-es.html` de la raíz publicable (hoy accesible aunque con `noindex`). Renombrar `CAF CADIZ.jpeg`/`CAF Málaga.jpeg` → `caf-cadiz.jpeg`/`caf-malaga.jpeg` (frágiles en hosting case-sensitive) y actualizar `index.html:772/778`. | — |
| **A10-8** | index.html (`:801`, `:805`) | **Cerrado, sin acción.** Verificado que `600 000 000` y `tu@email.com` son `placeholder` legítimos del formulario, no datos de contacto falsos. (Opcional cosmético: `placeholder="Ej: 612 345 678"`.) | — |

### 2.4 Textos listos para pegar (WEB)

#### WEB-NAP-01 — dirección real
```html
<!-- FOOTER (sustituye el <span> de index.html:912) -->
<span>Avenida Diego Martínez Barrio, 10 – 2ª Planta, Módulo 2.1<br>41013 Sevilla</span>
```
```json
// JSON-LD (sustituye el bloque "address", index.html:236-243)
"address": {
  "@type": "PostalAddress",
  "streetAddress": "Avenida Diego Martínez Barrio 10, 2ª Planta, Módulo 2.1",
  "postalCode": "41013",
  "addressLocality": "Sevilla",
  "addressRegion": "Sevilla",
  "addressCountry": "ES"
},
// y dentro del objeto "Organization":
"legalName": "ENERGIA LIBRE COMERCIALIZADORA, S.L.U.",
```
> Nota: al ser B2B nacional sin oficina de cara al público, la alternativa válida es **eliminar** el bloque "Sede Central" (modo área de servicio). **Recomendado: mostrar la dirección real** para coherencia NAP/E-E-A-T con las páginas legales. **Decisión final = Victor (§3.1-A, AMBIGUO).**

#### F09-1 — H2 "Qué hacemos"
```html
<span class="text-mega-teal font-bold tracking-widest uppercase text-sm mb-2 block">Qué hacemos</span>
<h2 class="h2-mega mb-4">No somos una comercializadora más: somos la comercializadora especializada en administradores de fincas.</h2>
<p class="text-lg text-slate-500">Gestionamos la luz y el gas de tus comunidades de propietarios de principio a fin: tú tienes un solo interlocutor y nosotros el trabajo.</p>
```

#### A10-1 — teléfono clicable above-the-fold
```html
<!-- Nav desktop, junto a 'Revisión gratuita' (~:290) -->
<a href="tel:+34623723217" class="hidden lg:inline-flex items-center gap-2 text-mega-navy font-display font-semibold hover:text-mega-teal transition-colors">
  <i class="ph-fill ph-phone-call text-mega-teal"></i> 623 72 32 17
</a>
<!-- Nav móvil, antes del botón hamburguesa (~:293) -->
<a href="tel:+34623723217" aria-label="Llamar al 623 72 32 17" class="flex md:hidden items-center justify-center w-10 h-10 rounded-lg bg-mega-teal/10 text-mega-teal">
  <i class="ph-fill ph-phone-call text-xl"></i>
</a>
```
> **PENDIENTE DE DATO / Victor:** confirmar que `+34 623 72 32 17` es la línea oficial del canal AAFF antes de propagarla aquí y a los directorios (§3.2).

#### F16-1 — H2 "Qué incluye" (+ H1 opcional)
```html
<!-- H2 sección 'Qué incluye' (sustituye :552) -->
<h2 class="h2-mega mb-8">Gestión integral de luz y gas para tus comunidades de propietarios</h2>
<!-- Opcional: primera línea del H1 (:327) -->
<span class="block text-xl lg:text-2xl font-bold text-mega-navy/90 mb-2 leading-snug">Gestión de luz y gas para administradores de fincas</span>
```

#### META — meta description (fusión F09-3 + F6)
```html
<meta name="description" content="Especialistas en luz y gas para administradores de fincas y comunidades de propietarios. Revisión gratuita sin compromiso, sin permanencia y un solo interlocutor.">
```

#### SERV — bullets de servicio en "Qué incluye" (fusión F09-2 + A10-5 + F09-4 + enlaces F16-3)
```html
<!-- Añadir tras el último bullet de 'Qué incluye' -->
<div class="flex gap-4 items-start">
  <div class="mt-1 w-8 h-8 rounded-full bg-mega-tealLight flex-shrink-0 flex items-center justify-center text-mega-teal"><i class="ph-bold ph-check"></i></div>
  <p class="text-slate-600 text-lg">Optimización de la potencia contratada de cada comunidad</p>
</div>
<div class="flex gap-4 items-start">
  <div class="mt-1 w-8 h-8 rounded-full bg-mega-tealLight flex-shrink-0 flex items-center justify-center text-mega-teal"><i class="ph-bold ph-check"></i></div>
  <p class="text-slate-600 text-lg">Revisión de <a href="blog/energia-reactiva-comunidades-penalizacion.html" class="text-mega-teal underline">energía reactiva</a> para evitar penalizaciones en factura</p>
</div>
<div class="flex gap-4 items-start">
  <div class="mt-1 w-8 h-8 rounded-full bg-mega-tealLight flex-shrink-0 flex items-center justify-center text-mega-teal"><i class="ph-bold ph-check"></i></div>
  <p class="text-slate-600 text-lg">Estudio de <a href="blog/autoconsumo-colectivo-comunidades-guia-administrador.html" class="text-mega-teal underline">autoconsumo colectivo</a> para la comunidad</p>
</div>
<div class="flex gap-4 items-start">
  <div class="mt-1 w-8 h-8 rounded-full bg-mega-tealLight flex-shrink-0 flex items-center justify-center text-mega-teal"><i class="ph-bold ph-check"></i></div>
  <p class="text-slate-600 text-lg">Agrupación de los puntos de suministro de toda tu cartera en una gestión unificada</p>
</div>
```
> Enlaces internos adicionales desde el cuerpo (F16-3): "cambio de comercializadora" → `blog/mitos-cambiar-comercializadora-comunidades.html`; "cambios de titular" → `blog/cambios-titular-comunidades-como-evitar-retrasos.html`. **El footer "Servicios" NO se enlaza al blog**, se enlaza a las páginas de servicio (A11-3).

#### A10-2 — neutralizar cifras demo
```html
<!-- Badge hero (:367-368): sustituir '-32.4% / Ahorro conseguido' por -->
<p class="text-xs text-slate-400 font-medium">Tarifas</p>
<p class="font-display font-bold text-mega-navy text-lg">En revisión</p>
<!-- Mockup (:615): sustituir '-15% Ahorro' por 'Tarifa optimizada' y mantener el resto como demo claramente ilustrativa -->
```

#### SCHEMA — nodo Service + entidad (fusión A10-4/F3 + F2)
```json
// Añadir al "@graph" (junto a Organization/WebSite/FAQPage):
{
  "@type": "Service",
  "@id": "https://fincas.megaenergia.es/#service",
  "serviceType": "Gestión energética integral para administradores de fincas",
  "name": "Gestión de luz y gas para comunidades de propietarios",
  "provider": { "@id": "https://fincas.megaenergia.es/#organization" },
  "areaServed": { "@type": "Country", "name": "España" },
  "audience": { "@type": "Audience", "audienceType": "Administradores de fincas y comunidades de propietarios" },
  "description": "Revisión y optimización de contratos, tarifas y potencias; altas, bajas y cambios de titular; energía reactiva y autoconsumo colectivo, con un único interlocutor para toda la cartera de comunidades.",
  "url": "https://fincas.megaenergia.es/"
}

// Añadir dentro del nodo "Organization" (tras "areaServed"):
"legalName": "ENERGIA LIBRE COMERCIALIZADORA, S.L.U.",
"parentOrganization": { "@type": "Organization", "name": "Mega Energía", "url": "https://megaenergia.es/" },
"sameAs": [
  "https://megaenergia.es/",
  "https://www.linkedin.com/company/PEGAR-URL-REAL",   // PENDIENTE DE DATO (Victor)
  "https://www.instagram.com/PEGAR-URL-REAL"            // PENDIENTE DE DATO (Victor)
]
```
```html
<!-- Enlace visible en el footer (obligatorio por regla nº5, junto al logo) -->
<p class="text-slate-500 text-xs mt-4">Parte del grupo <a href="https://megaenergia.es/" class="hover:text-mega-amber underline">Mega Energía</a></p>
```
> Solo incluir en `sameAs` perfiles **reales** (Victor pega las URLs). Todos los datos del `Service` ya son visibles en "Qué hacemos"/"Qué incluye"; los bullets de reactiva/autoconsumo se hacen visibles con `SERV` antes de citarlos aquí.

#### A11-1 / A11-2 — páginas servicio+segmento (nuevas)
**Tanda 1 (P1 · A11-1):**
- `/servicios/cambio-de-titularidad-comunidades/` · *title:* "Cambio de titularidad de luz y gas en comunidades | Mega Energía Fincas" · *H1:* "Cambio de titularidad de suministros para comunidades de propietarios" · *meta:* "Gestionamos el cambio de titular de luz y gas de tus comunidades sin cortes ni papeleo para el administrador. Un solo interlocutor. Revisión sin compromiso."
- `/servicios/energia-reactiva-comunidades/` · *title:* "Energía reactiva en comunidades: elimina la penalización | Mega Energía Fincas" · *H1:* "Energía reactiva en comunidades: cómo eliminar la penalización" · *meta:* "Detectamos y corregimos la penalización por energía reactiva en los suministros de tus comunidades. Lo gestionamos por ti, sin que te dé trabajo."
- `/servicios/cambiar-comercializadora-comunidades/` · *title:* "Cambiar de comercializadora de luz y gas para comunidades | Mega Energía Fincas" · *H1:* "Cambiar de comercializadora de luz y gas para comunidades de propietarios" · *meta:* "Comparamos y cambiamos la comercializadora de tus comunidades sin cortes ni permanencia. Un solo interlocutor para el administrador."

**Tanda 2 (P2 · A11-2):**
- `/servicios/autoconsumo-colectivo-comunidades/` · *title:* "Autoconsumo colectivo para comunidades de propietarios | Mega Energía Fincas" · *H1:* "Autoconsumo colectivo para comunidades de propietarios" · *meta:* "Estudiamos y gestionamos el autoconsumo colectivo de tu comunidad de principio a fin, sin que el administrador tenga que ocuparse de nada."
- `/servicios/optimizacion-potencia-comunidades/` · *title:* "Optimización de potencia y tarifas de luz para comunidades | Mega Energía Fincas" · *H1:* "Optimización de potencia y tarifas de luz para comunidades"
- `/servicios/agrupacion-puntos-suministro/` · *title:* "Agrupación de puntos de suministro de tu cartera | Mega Energía Fincas" · *H1:* "Agrupación de puntos de suministro de tu cartera de comunidades"

**Esqueleto único por página:** H1 → qué es y a quién afecta → cómo lo hacemos por ti (paso a paso) → documentación mínima que pedimos → plazos → por qué nosotros (CNMC, +5.000 comunidades*, logos CAF) → FAQ propia (2-3) → CTA al formulario.
**Checklist anti-doorway (obligatorio):** cada página con **proceso, documentación y FAQ ÚNICOS** del servicio; jamás la misma plantilla con una palabra cambiada, ni variantes por ciudad.
> *La cifra "+5.000 comunidades" queda sujeta a la validación de §3.1-B.

#### A11-3 — footer/nav a páginas de servicio
```html
<!-- Sustituir los href="#servicios" del footer por: -->
/servicios/cambio-de-titularidad-comunidades/
/servicios/energia-reactiva-comunidades/
/servicios/cambiar-comercializadora-comunidades/
/servicios/autoconsumo-colectivo-comunidades/
<!-- y anclar cada tarjeta del grid #servicios a su página -->
```

#### A17-01 — clúster mecánica del cambio
**Opción A — ampliar la FAQ visible de portada (`#faq`) con 6 preguntas de mecánica.** Publicar SIEMPRE la respuesta visible antes de meterla en el schema; redactadas sobre el **proceso regulado**, sin inventar cifras propias.
- **Q1. ¿Cuánto tarda en hacerse efectivo el cambio de comercializadora en una comunidad?** — "El cambio es un trámite administrativo regulado. Preparamos la documentación en 24-48 h y se hace efectivo en el siguiente ciclo de lectura del suministro, normalmente entre 2 y 3 semanas. La comunidad no tiene que hacer nada durante el proceso."
- **Q2. ¿Quién lee el contador y quién responde ante un corte o avería?** — "El contador y la red siguen siendo de la distribuidora de tu zona, no cambian con la comercializadora. Ante un corte o avería llamas a la distribuidora (su teléfono aparece en la factura); nosotros te ayudamos a identificarla y a gestionar la incidencia."
- **Q3. ¿Hay que cambiar algo en la instalación o en el contador?** — "No. Cambiar de comercializadora no exige tocar la instalación ni el contador de la comunidad. Solo cambia la empresa que te factura la energía."
- **Q4. ¿Qué pasa con el suministro si la comercializadora deja de operar?** — "El suministro nunca se corta: pasa automáticamente a una comercializadora de referencia designada por regulación. Es un mecanismo de protección del consumidor."
- **Q5. ¿Podéis dar de alta un suministro nuevo (local comunitario, garaje, obra)?** — "Sí. Gestionamos altas nuevas de suministro para zonas comunes, garajes o locales de la comunidad, con el asesoramiento de potencia y tarifa incluido."
- **Q6. ¿Se puede ajustar la potencia o cambiar la tarifa de las zonas comunes?** — "Sí. En la revisión analizamos la potencia contratada y la tarifa de cada suministro común (ascensor, alumbrado, garaje) y proponemos el ajuste que evita excesos de potencia y penalizaciones."

```json
// Añadir dentro del array mainEntity del FAQPage existente — SOLO tras publicar las respuestas visibles:
{ "@type": "Question", "name": "¿Cuánto tarda en hacerse efectivo el cambio de comercializadora en una comunidad?", "acceptedAnswer": { "@type": "Answer", "text": "El cambio es un trámite administrativo regulado. Preparamos la documentación en 24-48 h y se hace efectivo en el siguiente ciclo de lectura, normalmente entre 2 y 3 semanas. La comunidad no tiene que hacer nada." } },
{ "@type": "Question", "name": "¿Quién lee el contador y quién responde ante un corte o avería?", "acceptedAnswer": { "@type": "Answer", "text": "El contador y la red son de la distribuidora de tu zona y no cambian con la comercializadora. Ante un corte o avería se llama a la distribuidora; nosotros te ayudamos a identificarla y a gestionar la incidencia." } },
{ "@type": "Question", "name": "¿Hay que cambiar algo en la instalación o en el contador para cambiar de comercializadora?", "acceptedAnswer": { "@type": "Answer", "text": "No. Cambiar de comercializadora no exige tocar la instalación ni el contador. Solo cambia la empresa que factura la energía." } }
```
**Opción B (recomendada además de A) — post pilar** `blog/como-funciona-cambio-comercializadora-comunidad.html`
- *H1:* "Cambiar de comercializadora en una comunidad: cómo funciona, paso a paso (tiempos, cortes, contador y averías)"
- *meta:* "¿Cuánto tarda el cambio? ¿Hay cortes? ¿Quién lee el contador? Resolvemos, sin tecnicismos, toda la mecánica del cambio de luz y gas de una comunidad de propietarios."
- Enlaza a la home con ancla "revisamos los suministros de tus comunidades".

#### A17-02 / A17-03 / A17-04 / A17-05 / A17-06 — briefs de posts
- **A17-02** `como-leer-factura-luz-comunidad-propietarios.html` — *H1:* "Cómo leer la factura de luz de una comunidad de propietarios (sin ser experto)" · *meta:* "Término de potencia, peajes, energía activa y reactiva, impuestos… Te explicamos, concepto a concepto, la factura de las zonas comunes para que sepas dónde está el ahorro." · Guía con captura anotada (anonimizada). Enlaza a reactiva y a la home.
- **A17-03** `ayudas-subvenciones-eficiencia-energetica-comunidades.html` — *H1:* "Ayudas y subvenciones de eficiencia energética para comunidades: qué puede pedir un administrador (y cómo)" · *meta:* "Rehabilitación energética, autoconsumo y comunidades energéticas: qué ayudas existen para las comunidades que gestionas y cómo encajarlas sin que se te caiga el proyecto encima." · **NO citar importes/porcentajes de convocatoria sin verificar; marcar "según convocatoria en vigor"; no prometer concesión.** Enlaza al post de autoconsumo.
- **A17-04** `que-tarifa-potencia-zonas-comunes-comunidad.html` — *H1:* "Qué tarifa y qué potencia contratar para las zonas comunes de una comunidad" · *meta:* "Ascensor, alumbrado, garaje, portero automático: cada suministro común pide una potencia y una tarifa. Te explicamos cómo acertar y dejar de pagar de más." · Enlaza a la guía de optimización y a la home.
- **A17-05** `puntos-recarga-coche-electrico-comunidad-administrador.html` — *H1:* "Puntos de recarga para coche eléctrico en la comunidad: lo que el administrador debe saber" · *meta:* "Quién paga, qué se aprueba en junta y cómo se reparte el consumo de un punto de recarga en una comunidad. Guía práctica para administradores." · **Verificar marco normativo (ITC-BT-52) y mayorías antes de publicar cifras.**
- **A17-06** `iluminacion-led-eficiencia-zonas-comunes-comunidad.html` — *H1:* "Iluminación LED y pequeños ajustes que bajan la factura de las zonas comunes" · *meta:* "Portales, escaleras, garaje: cambios sencillos (LED, detectores de presencia, horarios) que reducen el gasto de la comunidad sin obras. Qué proponer en la junta." · Formato listicle. Enlaza a la home.

#### A19-01 — calendario editorial (arranque)
Cadencia objetivo: **2 posts/mes** (iguala el pulso útil de Nasergy sin quemarse). Orden:
1. **Semana 1 (P1):** post pilar mecánica del cambio (A17-01) — reactiva la frescura.
2. **Semana 3 (P2):** "Cómo leer la factura de luz de una comunidad" (A17-02).
3. **Semana 5 (P2):** "Ayudas y subvenciones para comunidades" (A17-03) — planificar cerca de convocatorias.
4. **Semana 7 (P2):** "Qué tarifa y potencia para zonas comunes" (A17-04).
5. **Después:** alternar P3 (recarga VE, LED) 1/mes.
En cada publicación: actualizar `sitemap.xml` (lastmod) y el índice del blog; mantener formato listicle/guía; CTA a la revisión sin compromiso.

#### A19-02 — política editorial (norma fija)
Cada nuevo post debe responder a una duda **del administrador de fincas o de la comunidad**, no de energía en general. Si un tema genérico (p. ej. "auditoría energética industrial") no se puede reencuadrar a comunidades/AAFF, **no entra**. Mantener el segmento en el H1, la meta y el primer párrafo de cada artículo.

#### F5 — rendimiento (checklist)
1. **Iconos:** hoy `/vendor/phosphor/{regular,fill,bold}/style.css` cargan ~429 KB para ~15 glifos → subsetear a los usados o inline como SVG y eliminar las 3 hojas.
2. **Fuentes:** self-hostar Montserrat/Lato (hoy desde `fonts.googleapis.com`/`gstatic`; además implica transferencia a Google, roce RGPD) y recortar pesos.
3. **Textura:** retirar `background-image` de `transparenttextures.com` (`index.html:738`) → patrón CSS o data-URI.

---

## 3. Cola para Victor (GBP · reseñas · citaciones · medición)

> Acciones/decisiones fuera del repo. Los textos marcados están listos para pegar. **Al ser B2B nacional, las palancas fuertes son la web (§2) y los backlinks/citaciones sectoriales; el GBP es palanca secundaria.**

### 3.1 NAP y datos del negocio

**A) Confirmar NAP canónico y coherencia** *(residuo de WEB-NAP-01 · P1 · `AMBIGUO`)*
El equipo ya corrige Badalona → Sevilla en la web (§2.4). Falta tu decisión de negocio:
1. Confirmar que **Avenida Diego Martínez Barrio, 10 – 2ª Planta, Módulo 2.1, 41013 Sevilla** es la dirección a exhibir públicamente, **o** si prefieres modo área-de-servicio (ocultar la calle) por ser servicio nacional sin atención al público. *Recomendación: mostrarla, para coherencia NAP/E-E-A-T con las páginas legales.*
2. Verificar que ese NAP coincide **carácter a carácter** con la ficha de Google Business Profile (si existe) y con `megaenergia.es`.

**NAP canónico (pegar idéntico en todas partes):**
```
Nombre comercial: Mega Energía (canal Administradores de Fincas)
Razón social: ENERGIA LIBRE COMERCIALIZADORA, S.L.U. · NIF B-90137316
Dirección: Avenida Diego Martínez Barrio, 10 – 2ª Planta, Módulo 2.1, 41013 Sevilla
Teléfono: +34 623 72 32 17
Email: fincas@megaenergia.es
Web: https://fincas.megaenergia.es
```

**B) Validar las cifras de marca** *(P2 · `AMBIGUO` — decisión de negocio)*
Confirma cuáles de estas son datos **reales y defendibles** y cuáles son maqueta ilustrativa: `+5.000 comunidades gestionadas` y `+10.000 trámites resueltos` (`index.html:339-340`) y `12 incidencias resueltas este mes` (`:377`). Para las que **no** sean reales, hay que etiquetarlas como "Ejemplo" o retirarlas: una cifra inventada mostrada como logro erosiona E-E-A-T. (El `-32,4%`/`-15%` del hero y el mockup ya se neutralizan en §2, A10-2.) Dime cuáles son reales y el equipo ajusta el HTML.

### 3.2 Backlinks y citaciones sectoriales

**AUT-14A-CAF — Colegios de AAFF de Cádiz y Málaga (partners ya existentes)** *(P1 · máximo ROI, sin competencia)*
Sus logos ya están en "Confían en nosotros": prospecto caliente. Convertir la relación en enlaces reales: (1) figurar como "empresa colaboradora / proveedor recomendado" con enlace dofollow a `https://fincas.megaenergia.es`; (2) artículo/entrevista en su revista o newsletter (temas listos: energía reactiva, autoconsumo colectivo, cambios de titular); (3) presencia/patrocinio en sus jornadas. Ningún competidor tiene señal de colegio.
```
Asunto: Contenido energético para vuestros colegiados (y ficha de colaborador)
Hola [nombre]:
Somos el equipo de Mega Energía especializado en administradores de fincas; ya colaboramos con vosotros y aparecéis en nuestra web como colegio de confianza.
Nos gustaría aportar valor a vuestros colegiados con un artículo práctico (p. ej. "Cómo evitar la penalización por energía reactiva en zonas comunes" o "Autoconsumo colectivo: cuándo compensa"), sin promoción, solo criterio útil.
Y, si encaja, figurar en vuestro directorio de empresas colaboradoras con un enlace a nuestra web.
¿Lo vemos en una llamada de 15 minutos?
Gracias, [firma] · fincas@megaenergia.es · +34 623 72 32 17
```
*Anchor sugerido:* "Mega Energía – gestión energética para administradores de fincas" (marca + servicio, sin stuffing).

**AUT-15-NAP — 15 citaciones/directorios con el NAP canónico** *(P1)*
Dar de alta/corregir con el **mismo NAP** (§3.1) sin variantes. Ojo: al ser B2B nacional, los directorios tipo Maps/Yelp pesan poco; prioriza LinkedIn, agregados mercantiles y directorios de proveedores de colegios de AAFF.
- **P1:** 1) LinkedIn (página de empresa — Nasergy la tiene y Mega no aparece) · 2) eInforma · 3) Axesor · 4) Empresite/El Economista (verificar auto-generados del Registro Mercantil: NIF B-90137316 y domicilio de Sevilla, sin duplicados).
- **P2:** 5) Google Business Profile (si se decide, ver §3.4) · 6) Bing Places · 7) Apple Business Connect · 8) Páginas Amarillas · 9) QDQ/Guía Empresas · 10) Facebook (Información con NAP) · 11) Instagram (bio con web) · 12) Directorio de proveedores de los CAF.
- **P3:** 13) Cylex/Tuugo/Solostocks (controlar duplicados) · 14) Listados de comercializadoras/comparadores del sector · 15) Enlace desde `megaenergia.es` corporativo al canal fincas (coherencia NAP entre subdominios).
Reauditar el NAP drift cada trimestre.

**AUT-14B-SECTOR — 14 objetivos de backlink sectorial** *(P2)*
Prioriza relevancia sectorial sobre DR bruto. **Verifica el dominio oficial de cada colegio antes de contactar** (no uses URLs de memoria).
- **P1:** 1) CGCAFE (Consejo General) — directorio nacional / revista · 2) CAF Cádiz [caliente] · 3) CAF Málaga [caliente] · 4) CAF Sevilla (local, coincide con el domicilio → colaborador + jornada).
- **P2:** 5) CAF Madrid · 6) CAF Barcelona-Lleida/Cataluña · 7) CAF Valencia (ICOAFCV) · 8) Revista sectorial AAFF (artículo técnico firmado) · 9) Portales de gestión inmobiliaria (El Inmobiliario mes a mes, Observatorio Inmobiliario, idealista/news) · 10) Blogs de software para AAFF (Gesfincas, Fincaplus, TAAF…).
- **P3:** 11) Congreso Nacional de AAFF y ferias (SIMA) → patrocinio/ponencia · 12) Asociaciones afines (COAPI) · 13) Prensa económica/energía (Cinco Días, elEconomista Energía) · 14) Casos de éxito enlazables desde despachos clientes (con permiso).
*Anchor recomendado en todos:* marca + "gestión energética para administradores de fincas", variando la redacción.

### 3.3 Reseñas

**GBP-03 — Captación propia + teardown de competidores** *(P1)*
El teardown de reseñas de Élite/ECD/Nasergy (volumen, ritmo/mes, keywords, % con foto) exige abrir Maps y **NO es posible por WebFetch → `PENDIENTE DE DATO`** (ver bloque de recon al final de §3.4). En paralelo, **arranca ya la captación**: al cerrar cada gestión con un administrador satisfecho, pide reseña y sugiere (sin incentivar, sin comprar) que mencione "administrador de fincas" y "comunidad de propietarios" en el texto.
```
Guion (sin incentivo): "Si te ha resultado útil que nos ocupemos de la luz y el gas de tus comunidades, nos ayudaría muchísimo una reseña en Google contando tu experiencia como administrador de fincas. Con dos líneas nos vale. ¡Gracias!"
```
Nunca ofrezcas descuentos ni regalos por reseñar (Google filtra y puede suspender). Fija un objetivo mensual realista una vez conozcas el volumen del líder.

**GBP-04 — Plantillas de respuesta a reseñas** *(P2)*
Responder el 100% (empezando por negativas, SLA <48 h). Rota la redacción e inyecta con naturalidad "administrador de fincas"/"comunidad" (no en todas).
```
POSITIVA v1: "¡Gracias, [nombre]! Nos alegra que la gestión energética de tus comunidades te esté quitando trabajo. Seguimos a tu lado para lo que necesites."
POSITIVA v2: "Mil gracias por tu confianza, [nombre]. Para eso estamos: tú administras y nosotros nos ocupamos de la luz y el gas de la comunidad. Un abrazo del equipo."
NEGATIVA v1: "Sentimos que la experiencia no haya sido la esperada, [nombre]. Queremos revisarlo contigo cuanto antes: escríbenos a fincas@megaenergia.es y lo solucionamos. Gracias por decírnoslo."
NEGATIVA v2: "Gracias por avisarnos, [nombre]. No es la experiencia que queremos dar. Cuéntanos qué ha pasado en fincas@megaenergia.es y nos ponemos con ello de inmediato."
MIXTA: "Gracias por tu valoración, [nombre]. Nos quedamos con lo bueno y tomamos nota de lo mejorable; te escribimos para afinarlo."
```

### 3.4 Ficha de Google Business Profile (GBP)

**GBP-00 — Decisión previa / gate** *(P2 · `AMBIGUO`)* (absorbe F16-2)
Antes de tocar nada de GBP:
1. **Confirmar si Mega Energía ya tiene una ficha GBP corporativa.** Si existe una ficha en el domicilio de Sevilla, **NO crear una segunda ficha "Fincas" en la misma dirección** (Google prohíbe duplicados por ubicación → riesgo de suspensión).
2. Asumir que, para un servicio B2B nacional sin local, el map pack apenas se dispara: **el GBP es palanca secundaria**.
3. Nombre de la ficha = marca real "Mega Energía". **Nunca** añadir "administradores de fincas" u otras keywords al nombre (stuffing = suspensión).
4. Revisar y corregir cualquier **"Servicio generado por IA"** que Google haya autopopulado.
> Si decides **no** operar GBP, los items GBP-01…08 quedan en pausa.

**GBP-06 — Servicios (listos para pegar)** *(P2)*
```
1) Gestión energética integral de comunidades — "Nos ocupamos de la luz y el gas de toda tu cartera de comunidades: tú apruebas, nosotros ejecutamos."
2) Optimización de contratos y potencia — "Revisamos potencias y tarifas de cada suministro para ajustar el coste, sin cortes ni permanencia."
3) Cambio de titularidad de suministros — "Tramitamos altas, bajas y cambios de titular de la comunidad sin que tengas que perseguir a nadie."
4) Energía reactiva — "Detectamos y corregimos la reactiva que encarece la factura de las zonas comunes."
5) Autoconsumo colectivo — "Estudiamos la viabilidad solar de la comunidad y coordinamos la instalación de principio a fin."
6) Revisión y comparativa de facturas — "Analizamos las facturas de tus comunidades y te presentamos la mejora ya calculada."
7) Interlocutor único para administradores de fincas — "Una sola persona de referencia para todas las gestiones energéticas de tu despacho."
```

**GBP-07 — Descripción del negocio (≤750 caracteres, lista para pegar)** *(P2)*
```
Mega Energía es el equipo especializado en la gestión energética de administradores de fincas y comunidades de propietarios en toda España. Nos ocupamos de la luz y el gas de tu cartera: optimización de contratos y potencia, cambios de titularidad, energía reactiva y autoconsumo colectivo. Trabajamos como un único interlocutor para tu despacho: tú apruebas, nosotros ejecutamos. Sin cortes, sin permanencia y sin darte más trabajo. Revisamos las facturas de tus comunidades y te presentamos la mejora ya calculada, para que quedes bien ante presidentes y juntas. Te acompañamos en todo el proceso.
```
Sin URLs, teléfonos, HTML ni ofertas (motivo de rechazo) y sin stuffing.

**GBP-05 — Calendario de posts (4 semanas, apoyado en el blog)** *(P2)*
Mínimo 1 post/semana, enlazando al artículo correspondiente. Alterna Novedad/Oferta.
```
SEMANA 1 (Novedad → blog energía reactiva): "¿Sabías que la energía reactiva penaliza la factura de las zonas comunes de tus comunidades? Te explicamos cómo detectarla y corregirla, sin que tengas que hacer nada."
SEMANA 2 (Novedad → blog cambios de titular): "Cambio de titular en una comunidad sin retrasos: los documentos que necesitas y los errores que lo frenan. Nosotros lo tramitamos por ti."
SEMANA 3 (Oferta, CTA 'Llamar'): "Revisión sin compromiso de los contratos de luz y gas de tus comunidades. Tú apruebas, nosotros ejecutamos. Sin cortes ni permanencia."
SEMANA 4 (Novedad → blog autoconsumo): "Autoconsumo colectivo en comunidades: cuándo compensa y cómo lo coordinamos de principio a fin."
```

**GBP-01 — Categorías** *(P3 · recon `PENDIENTE DE DATO`)*
Si se opera GBP, fijar categoría **principal** (mayor factor de relevancia local) según el rol de la ficha: "Compañía de suministro eléctrico" (si la ficha es la comercializadora) o "Asesor/Consultor energético" (si es el canal asesor). **Secundarias:** "Compañía de gas", "Servicio de ahorro de energía", "Consultor". Las categorías de Élite/ECD/Nasergy en Maps son `PENDIENTE DE DATO`.

**GBP-02 — Atributos** *(P3 · recon `PENDIENTE DE DATO`)*
Activar solo atributos veraces para servicio sin local: "Presupuestos/citas en línea", "Atiende en el área de servicio" (SAB, sin dirección visible). No marcar atributos falsos (suspensión). El set de los competidores es `PENDIENTE DE DATO`.

**GBP-08 — Fotos (shot list)** *(P3)*
3-5 fotos reales/semana; nada de stock ni duplicados. Logo/portada de marca (teal #30B7BB / ámbar #F8AD16 / navy #1A1A2E); equipo real (KAM + backoffice, el interlocutor único); "trabajo real" (gestiones anonimizadas, atención telefónica); eventos en jornadas de colegios (cruza con §3.2); infografías antes/después de optimización (sin cifras internas de comisión ni €/MWh). Volumen/frescura de fotos de competidores: `PENDIENTE DE DATO`.

### 3.5 Medición (GA4 + Search Console)

**F9 — Analítica y conversión (GA4)** *(P3)*
La web **no tiene ninguna analítica** (0 coincidencias de gtag/GA4 en el repo). Crear propiedad GA4 para `fincas.megaenergia.es`, definir `generate_lead` en el submit de `#contactForm` (`index.html:~1098`) y en los clics a `tel:+34623723217` (`:745`), y actualizar la política de cookies/consentimiento. Sin esto no se puede medir qué contenido genera leads. Pásame el Measurement ID y el equipo lo cablea.

**GSC — Google Search Console** *(P3 · nuevo, medición base)*
Crear/verificar la propiedad de `fincas.megaenergia.es`, **enviar `sitemap.xml`** y monitorizar cobertura de indexación y consultas reales (queries por las que aparece). Es la fuente para el informe mensual y para re-verificar en vivo las posiciones (la SERP de §4 es aproximada). Al publicar las páginas de servicio nuevas (§2), reenviar el sitemap actualizado.

### 3.6 Prueba social / E-E-A-T

**A10-6 — Testimonios reales de administradores** *(P3)*
Ya ganas en señales de confianza a los 3 competidores (logos CAF, "regulada CNMC", cifras) pero **no tienes ni un testimonio nominal**; ninguno de ellos tampoco → diferenciador claro. Recopilar 1-2 testimonios reales (nombre del despacho + provincia, con permiso) para el home. **No inventar citas**; solo verificables y con consentimiento.

**F7 — Persona real / autoría del blog** *(P3 · `AMBIGUO`)*
Hoy los 10 posts declaran `author @type Organization` y no hay ninguna persona nombrada. Para reforzar Experience/Expertise: define **1 persona real** del canal (dirección de canal o KAM) con nombre, cargo, foto y LinkedIn; (a) publícala en la web (bloque "Equipo" o pie de artículo) y (b) cambia el `author` de los `BlogPosting` a esa `Person` (con `sameAs` a su LinkedIn). Ningún competidor lo hace → oportunidad. Necesito nombre/cargo/foto para cablearlo.

### PENDIENTE DE DATO — recon en vivo de GBP/Maps

Varios tramos exigen abrir Google Maps/GBP (login/JS) y **fallan por WebFetch**, así que no se inventan. Para cerrarlos, elige una:
- **(A)** dame acceso a un navegador con sesión (MCP de navegador o Cowork) y hago el recon en vivo; o
- **(B)** pégame, por cada competidor (Élite, ECD, Nasergy) **y tu propia ficha**: categoría principal y secundarias, atributos, nº de reseñas + nota + ritmo/mes + % con foto, nº de posts (Novedades) de las últimas 8-12 semanas + tipo + fecha del último, y nº total de fotos + fecha de la última.

Con esos datos cierro: GBP-01 (categorías del pack), GBP-02 (atributos), GBP-03 (teardown de reseñas + objetivo mensual), la cadencia de Google Posts (auditoría 19 / A19-03) y GBP-08 (fotos). **Además, confirma si existe ficha GBP propia del vertical Fincas o solo la corporativa de Mega Energía.**

---

## 4. Competidores y foto de la SERP

> Fuente: 5 búsquedas WebSearch + 4 confirmaciones WebFetch (julio 2026). **Aviso:** WebSearch da el orden aproximado de Google pero **no** expone paneles en vivo (AI Overviews, People Also Ask, map pack) ni geolocaliza en Google.es. Las posiciones son aproximadas y **deben re-verificarse en vivo** (usar GSC, §3.5). La presencia/ausencia de AI Overviews y PAA **no consta**: revisar manualmente en Google.es.

### 4.1 Los 3 competidores núcleo (peers de Mega en la long-tail AAFF)

| Competidor | Posición | Fortalezas | Debilidades explotables |
|---|---|---|---|
| **Élite Energía** | Líder long-tail AAFF | Money page AAFF con servicios discretos ("energía reactiva", "optimización de la potencia", "agrupación de puntos de suministro", "cambio de comercializadora"); teléfono arriba (697 17 21 43); "Estudiamos tu factura". | Solo electricidad (**el gas te distingue**); contadores sin rellenar que renderizan "+0 Clientes/+0 Admin. de fincas"; **sin blog**; sin testimonios; sin schema; sin señal de colegios. |
| **ECD Energía** | #1 para "comercializadora para administradores de fincas" | Se autodefine literalmente "comercializadora especializada en administradores de fincas"; **FAQ de 18 preguntas** que resuelve toda la mecánica del cambio; "presupuesto gratuito"; teléfono arriba (900 525 682 / 658 501 558); desglosa "cambio de titular". | Solo electricidad; **sin blog** (0 frescura); sin testimonios; sin schema; sin señal de colegios; formulario larguísimo (fricción). |
| **Nasergy** | #1 para la variante con modificador "…luz y gas" | Posee "Administradores de fincas: gestión de Luz y gas"; **cubre gas**; **blog activo ~1 post/semana**; muestra Instagram (@nasergyenergia) + LinkedIn; "ESTUDIO GRATIS"; teléfono arriba (+34 673 259 939); trata rehabilitación, comunidades energéticas, eficiencia. | Blog **diluido** (industrial 3, pymes 3, hogar 1, autoconsumo 1, solo 2 de comunidades) → autoridad AAFF diluida; sin schema; sin testimonios; sin señal de colegios. |

**Dónde gano yo hoy:** único con JSON-LD; blog **100% AAFF** (10 posts) que nadie iguala en foco; más señales de confianza (logos CAF Cádiz/Málaga, "regulada CNMC"); **el gas** como diferenciador frente a Élite y ECD; y la puerta abierta con dos colegios de AAFF. **Dónde pierdo:** no reclamo on-page las keywords nº2/nº3, sin teléfono above-the-fold, sin páginas de servicio, sin FAQ de mecánica, blog parado 3 meses, NAP roto y sin backlinks.

### 4.2 Mapa de la SERP — dos capas

1. **Término CABEZA amplio "luz y gas para comunidades de propietarios"** → lo dominan los **grandes incumbentes** con vertical AAFF/comunidades propio: **Naturgy** (`naturgy.es/comunidad_propietarios`), **Endesa** (`endesa.com/…/property-administrators`), **Repsol** (`repsol.es/…/administradores-de-fincas`), **TotalEnergies** (`…/administradores-fincas`). Copan el clic transaccional del genérico por marca y presupuesto. **Mega no los bate por el head term a corto plazo.**
2. **Long-tail con modificador "…administradores de fincas"** → aquí ganan los **especialistas** (Élite, ECD, Nasergy), pero el pelotón es denso: **Green Energy Group / Green Energy 360** (`greenenergygroup.es`, el runner-up más consistente: doble vertical `/soluciones-energeticas-administradores-de-fincas/` y `/administradores-de-fincas/`, modelo comercializadora+servicios+instalaciones → **4º competidor claro si se amplía**), `enercom.es`, GlobaEnergy (Plenitude), Central Energy Asesores, ElectryConsulting, ADS Solutions, `fiva.es`, `naturelek.com`, Task Force Alliance, Multienergía Verde.

### 4.3 4º competidor a vigilar + ruido a descartar

- **4º competidor si se amplía:** **Green Energy Group** (runner-up consistente, doble vertical).
- **Modelo atípico a vigilar:** **CUGEC** (`cugec.com`), compra agrupada de luz/gas promovida por administradores **colegiados** que traslada el 100% del ahorro a la comunidad — no es comercializadora al uso, pero compite por el mismo cliente con un argumento de neutralidad potente.
- **Ruido a descartar (no son competidores transaccionales):** (a) informacional/guías que roba espacio — Norberto Martínez (#2 en kw1), Jocapal, artículos de Conversia; (b) **sindicación de notas de prensa** que rankea para kw2 (`segundojazz.es`, `mercadosanjuanpalma.es`, misma nota clonada) → **señal de que la kw2 es atacable con PR**; (c) comparadores (`comparadorluz.com/empresas/comunidad-propietarios`) aparecen en el término amplio pero no dominan la SERP transaccional.
- **Excluida por instrucción:** `net-energia.es` (empresa hermana), que tampoco apareció en el top-10.

### 4.4 El hueco para Mega

`fincas.megaenergia.es` **no apareció en el top-10** de ninguna de las 3 keywords principales ni de las combinadas: hoy no rankea en primera página por sus términos objetivo. Todo el clic se lo reparten incumbentes (head term) y especialistas (long-tail). **La oportunidad on-page está en la long-tail AAFF, donde los líderes son PYMES batibles** — exactamente lo que atacan los P1/P2 de §2 (reclamar kw2/kw3 on-page, páginas servicio+segmento, FAQ de mecánica, blog activo) y los backlinks sectoriales de §3 (colegios de AAFF, donde nadie compite). La kw2 "comercializadora para administradores de fincas" es, además, atacable con PR (ver ruido b).

---

*Fin del plan. Ejecutar §2 en el repo (sin push sin permiso de Victor) y trasladar §3 a Victor. Re-verificar posiciones en vivo con Search Console (§3.5) antes de dar por buena cualquier lectura de SERP.*
