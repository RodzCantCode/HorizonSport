# Horizon Sport

Web del podcast sobre el negocio del deporte. Astro estático, español, modo oscuro.

```bash
npm install
npm run dev      # desarrollo en localhost:4321
npm run build    # genera dist/
```

## Diseño

Una sola familia tipográfica (**Archivo** variable). El contraste sale del eje de anchura, no de
mezclar fuentes: titulares en `font-stretch: 125%` (clase `.ancha`), etiquetas y metadatos en
`font-stretch: 75%` (clase `.estrecha`).

Paleta negro / blanco / azul `#169EFF`. El **azul sólido está reservado a los CTA de conversión**:
por eso los botones "Escuchar" de los episodios van en contorno. Si el azul empieza a aparecer en
todas partes, deja de señalar dónde hay que decidir algo.

Todos los tokens están en `src/styles/global.css`.

## Contenido

`src/data/contenido.js` es la fuente única: episodios, hosts, invitados y navegación. Cambiar ahí
se propaga a todas las páginas.

## Despliegue

Vercel está enlazado al repo. **`main` → producción, cualquier otra rama → preview.**
No hace falta subir archivos a mano: basta con `git push`.

El dominio de producción es `horizonsport.co` y está declarado en `astro.config.mjs`
(`site`), de donde salen las URLs canónicas y las etiquetas Open Graph.

## 🔒 Portada de espera activa (4 de septiembre de 2026)

Ahora mismo el sitio **solo sirve la portada de espera** con la cuenta atrás al estreno de
las 19:00. Dos piezas la sostienen:

- `src/pages/` contiene **únicamente** `index.astro` (la portada de espera). Las páginas reales
  están aparcadas en `src/paginas-en-espera/`, fuera del enrutado de Astro, así que no se
  construyen ni se despliegan.
- `vercel.json` reescribe **cualquier ruta** a `/`. Quien escriba `/episodios` o `/colabora` a
  mano ve la portada de espera, no un 404. Los archivos estáticos (fotos, CSS) no se ven
  afectados: en Vercel las reescrituras solo actúan cuando no hay fichero que sirva.

**Para devolver la web completa:** revertir el commit que puso la portada, o a mano:

```bash
git rm vercel.json
rm -r src/pages
git mv src/paginas-en-espera src/pages
```

La hora del estreno vive en una sola constante (`ESTRENO`) al principio de `src/pages/index.astro`.
Lleva zona horaria explícita (`+02:00`), así que la cuenta atrás sale bien desde cualquier país.

## Pendiente antes de publicar

- [ ] **Imagen Open Graph del sitio.** La portada de espera ya tiene la suya
      (`public/og-estreno.jpg`, la miniatura del estreno), pero `Base.astro` —el resto
      de páginas— sigue sin `og:image`.

- [x] ~~Fotos de los hosts.~~ Hechas: los originales (PNG de ~20 MB) se redujeron a WebP de ~50 KB
      en dos tamaños (`-900` y `-450`, servidos con `srcset`). Para añadir o cambiar una, deja el
      archivo en `public/fotos/<slug>-900.webp` y `-450.webp` y pon `foto: '<slug>'` en el host.
- [ ] **Rol y bio de cada host.** Deliberadamente vacíos (`null`): no inventamos datos sobre
      personas identificables. Los componentes ya los pintan en cuanto tengan valor.
- [ ] **Textos reales.** Títulos de episodio y nombres de invitados son provisionales,
      escritos con la voz definitiva para poder enseñar la web.
- [ ] **Backend de formularios.** Los de `/colabora` y la newsletter no envían a ningún sitio
      (`action="#"`). Falta elegir servicio (Formspree, Web3Forms, endpoint propio con Resend…).
- [ ] **Plataforma de newsletter.** Beehiiv, Substack, MailerLite… sin decidir.
- [ ] **Media kit.** El botón de descarga no apunta a ningún PDF.
- [ ] **Enlaces de plataformas.** Spotify, YouTube y Apple están a `#` en `contenido.js`.
- [ ] **Aviso legal.** Falta titularidad real y revisión de RGPD por alguien que sepa.
