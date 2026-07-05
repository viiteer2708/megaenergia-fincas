# Contexto de negocio (Prompt 0) — fincas.megaenergia.es

> Memoria del sistema /seo-local. Referenciar siempre; no volver a pedir estos datos.
> Creado 2026-07-05 desde el wiki de Victor + el propio repo. Lo no verificado está marcado PENDIENTE.

## 1. Identidad del negocio (NAP)
- **Nombre exacto:** Mega Energía (vertical "Fincas" — administradores de fincas). Nombre en GBP: PENDIENTE (confirmar si existe ficha propia del vertical o solo la corporativa de Mega Energía).
- **Dirección:** PENDIENTE (extraer de megaenergia.es / confirmar con Victor; la web fincas no publica dirección).
- **Teléfono:** +34 623 723 217 (el que publica fincas.megaenergia.es — confirmar que es el oficial del canal AAFF). ⚠️ Hay un "600 000 000" placeholder en alguna parte del HTML: revisar.
- **Web:** https://fincas.megaenergia.es (canonical). Web corporativa: https://megaenergia.es
- **Email de contacto:** fincas@megaenergia.es. ⚠️ Hay un "tu@email.com" placeholder en el HTML: revisar.

## 2. Ficha de Google Business Profile
- **URL pública de la ficha:** PENDIENTE
- **Categoría principal actual:** PENDIENTE
- **Categorías secundarias:** PENDIENTE
- **¿Acceso de gestión a la ficha?** PENDIENTE (preguntar a Victor)
- Nota de sesión: sin navegador MCP no se puede hacer recon en vivo de GBP/Maps; las auditorías 1–8 quedan como cola de datos/acciones para Victor.

## 3. Qué vende y dónde
- **Servicios principales:** gestión integral de suministros de luz y gas de comunidades de propietarios, en nombre del administrador de fincas: altas/bajas y cambios de titular, revisión y optimización de contratos y potencias, energía reactiva, autoconsumo colectivo, un solo interlocutor para todas las gestiones.
- **Servicio estrella:** interlocutor único que le quita al administrador toda la carga energética de su cartera de comunidades ("No te damos trabajo, te lo quitamos").
- **Zona de servicio:** toda España (B2B nacional, servicio remoto — no es un negocio local con tienda; el "SEO local" aplica en su variante nacional-vertical: búsqueda de servicio + segmento, no servicio + ciudad).
- **¿Local o SAB?** Servicio sin local de cara al público (SAB nacional).

## 4. Cliente y propuesta de valor
- **Cliente ideal:** administrador de fincas (colegiado o despacho) con cartera de comunidades de propietarios. No compra energía: compra tranquilidad, orden y menos carga mental. La energía rara vez es su prioridad.
- **Propuesta única de valor:** especialistas SOLO en administradores de fincas, con equipo dedicado (dirección de canal + KAM + backoffice). Mensajes canónicos: "No te damos trabajo, te lo quitamos" · "No tienes que analizar nada, lo hacemos por ti" · "No te dejamos solo" · "Sin cortes, sin permanencia, un solo interlocutor".
- **Insight clave:** el administrador NO está motivado por el ahorro en sí, sino por facilidad + seguridad + reducción de carga; quedar bien ante presidentes y juntas.
- **Objeciones frecuentes:** "mientras no haya problemas, no toco nada" (statu quo), desconfianza hacia comercializadoras, miedo a que el cambio le genere trabajo o incidencias.

## 5. Competidores (mínimo 3)
- PENDIENTE → los descubre la fase de recon (búsqueda en vivo de quién rankea para las keywords principales con página/vertical para AAFF).
- Nota interna: NET Energía (net-energia.es) es empresa hermana del grupo, también especialista en AAFF — NO tratarla como competidor a batir; excluirla del teardown.

## 6. Keywords objetivo
- **3 principales (formato servicio + segmento, nacional):**
  1. energía para administradores de fincas
  2. comercializadora para administradores de fincas
  3. luz y gas para comunidades de propietarios
- **Secundarias / long-tail:** suministros comunidades de propietarios · cambiar de comercializadora comunidad de propietarios · energía reactiva comunidad de propietarios penalización · autoconsumo colectivo comunidades · cambio de titularidad suministros comunidad · optimizar contratos luz comunidad.
- **Términos de clientes reales:** "los de la luz", "suministros", "cambio de titular", "que no me den trabajo", "¿se puede ahorrar en la comunidad?".

## 7. Activos y accesos disponibles
- **Google Search Console:** SÍ, conectado (propiedad configurada; sitemap enviado — verificar estado).
- **Google Analytics:** PENDIENTE (no consta GA4 en esta web; sí existe en agentes.megaenergia.es).
- **CMS:** HTML estático + Tailwind CSS (build `npm run build:css`), hosting Vercel, DNS Hostinger.
- **Directorios / perfiles:** PENDIENTE (citaciones NAP sin inventariar).

## 8. Objetivo y restricciones
- **Objetivo principal a 90 días:** formularios/llamadas de administradores de fincas; objetivo de negocio de Victor: dominar la búsqueda principal del vertical (el ranking es consecuencia; no se prometen posiciones).
- **Idioma de los entregables:** Español (España).
- **Tono de marca:** cercano-profesional B2B; directo, sin humo; colores Mega (teal #30B7BB, ámbar #F8AD16, navy #1A1A2E).
- **Líneas rojas:** sector energético regulado — no prometer ahorros concretos sin estudio; no publicar cifras internas de comisiones ni €/MWh; no inventar reseñas ni datos; nada de keyword stuffing, doorway pages ni AggregateRating self-serving; schema solo con datos visibles en la página.

---

**Registro de auditorías** (la skill lo va rellenando):

| Fecha | Prompt / auditoría | Estado | Acciones abiertas |
|-------|--------------------|--------|-------------------|
| 2026-07-05 | Plan §2 WEB — P1 (WEB-NAP-01, F09-1, A10-1, A11-1, A17-01, A19-01) | APLICADO | Confirmar NAP público y teléfono oficial del canal (Victor, §3.1-A/§3.2) |
| 2026-07-05 | Plan §2 WEB — P2 (F16-1, META, SERV, A10-2, SCHEMA, A11-2, A11-3, A17-02/03/04, A19-02) | APLICADO | `sameAs` LinkedIn/Instagram PENDIENTE DE DATO; validar cifras de marca (§3.1-B) |
| 2026-07-05 | Plan §2 WEB — P2 F5 (rendimiento) | PARCIAL | Textura de terceros fuera; self-host de fuentes + subset de iconos aplazados (binarios/tooling) |
| 2026-07-05 | Plan §2 WEB — P3 triviales (F16-STRAT, F16-4, A10-7, F8, A10-8) | APLICADO | A17-05 y A17-06 (posts P3) en cola editorial (no triviales) |
| 2026-07-05 | 10 páginas nuevas (6 servicio+segmento + 4 posts) + sitemap/canonical | APLICADO | Enviar sitemap actualizado a GSC (Victor, §3.5) |
| 2026-07-05 | Gate `scripts/seo-gate.mjs` | 0 errores (3 warnings baseline) | — |
| — | Cola §3 (GBP, reseñas, citaciones/backlinks, medición, E-E-A-T) | PENDIENTE (Victor) | Fuera del repo; read-only en deploy/DNS/secretos |
