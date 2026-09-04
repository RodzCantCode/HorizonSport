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

## Pendiente antes de publicar

- [ ] **Imagen Open Graph.** No hay `og:image`, así que al compartir el enlace por
      WhatsApp o LinkedIn sale sin miniatura. Hace falta un PNG de 1200×630 en
      `public/` y una etiqueta más en `Base.astro`.

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
