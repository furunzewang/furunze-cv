# Furunze Wang · CV online

Currículum online bilingüe (español / inglés), hecho con HTML, CSS y JavaScript puros (sin frameworks), listo para GitHub Pages.

## Archivos

| Archivo | Qué es |
| --- | --- |
| `index.html` | Contenido en español (idioma por defecto), metaetiquetas SEO / Open Graph y datos estructurados |
| `styles.css` | Diseño en pantalla y hoja de impresión A4 para el PDF |
| `script.js` | Cambio de idioma (textos en inglés), copiar email, botón de PDF y navegación activa |
| `foto-perfil.jpg` | Foto de perfil recortada y optimizada (480×480, sin metadatos) |
| `og-image.jpg` | Imagen que aparece al compartir el enlace (LinkedIn, WhatsApp…) |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Iconos con las iniciales FW |

## Editar contenido

- **Español:** directamente en `index.html`.
- **Inglés:** en el objeto `EN` al principio de `script.js`. Cada clave coincide con un atributo `data-i18n="…"` del HTML.
- **Enlace directo en inglés:** `https://furunzewang.github.io/furunze-cv/?lang=en`, útil para reclutadores internacionales.

## Descargar el CV en PDF

El botón «Descargar CV (PDF)» abre el diálogo de impresión. Elige **Guardar como PDF**, tamaño **A4** y márgenes **predeterminados**. El PDF sale en el idioma que tengas activo.

## Publicar con GitHub Pages (gratis)

1. Haz merge de la pull request en `main`.
2. En GitHub, entra en el repositorio → **Settings** → **Pages**.
3. En **Build and deployment**, elige **Source: Deploy from a branch**.
4. En **Branch**, selecciona `main` y la carpeta `/ (root)`. Pulsa **Save**.
5. En uno o dos minutos la web estará en `https://furunzewang.github.io/furunze-cv/`.

> En cuentas gratuitas, GitHub Pages requiere que el repositorio sea **público**.
> Si publicas en otra URL (por ejemplo, un dominio propio), actualiza en `index.html` las direcciones de `canonical`, `og:url`, `og:image` y `twitter:image`.

Para verla en local, abre `index.html` en el navegador.
