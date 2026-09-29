# Estado del proyecto

> Última revisión: **29-sep-2026**. Al cerrar un trabajo que cambie algo de aquí, actualiza la fecha y
> la sección correspondiente.

**En una frase:** la web está abierta en producción desde el estreno del 4-sep-2026, pero se ha
quedado atrás. YouTube lleva **4 episodios** y la web enseña **1**. Los formularios siguen sin enviar
a ningún sitio.

## Qué hay publicado

| Dónde | Estado a 29-sep-2026 |
| --- | --- |
| https://www.horizonsport.co | Sitio completo. Último cambio de contenido: 4-sep (`cc33a50`). `main` y `preview` están en el mismo commit. |
| YouTube [@HorizonSportPODCAST](https://www.youtube.com/@HorizonSportPODCAST) | 4 episodios largos + shorts de cada uno (42 vídeos, 30 suscriptores). |
| Instagram y TikTok | `@horizonsportpodcast`. Todavía no están enlazados desde la web. |

### Episodios: YouTube frente a la web

Fechas en hora de España. Duración redondeada al minuto, igual que el 01 (4616 s → 1 h 17 min).

| # | Invitado | Publicado | Duración | Vídeo | En la web |
| --- | --- | --- | --- | --- | --- |
| 01 | **Santi Higuera** — luchador de MMA (WAR, WOW FC) | vie 4-sep, 19:00 | 1 h 17 min (4616 s) | [`-JBS4m7dXkM`](https://www.youtube.com/watch?v=-JBS4m7dXkM) | Sí |
| 02 | **Javier Echaleku** — fundador de una marca de guantes y material de boxeo | vie 11-sep, 19:58 | 1 h 46 min (6360 s) | [`hRBRjxze-48`](https://www.youtube.com/watch?v=hRBRjxze-48) | No |
| 03 | **Jorge Coll** — director y fundador de ESBS (formación en industria deportiva) | vie 18-sep, 18:00 | 1 h 37 min (5816 s) | [`ydTVmDv9DvM`](https://www.youtube.com/watch?v=ydTVmDv9DvM) | No |
| 04 | **Rafa Pallarés** — psicología del alto rendimiento | lun 28-sep, 00:15 | 1 h 43 min (6150 s) | [`Cq96pj-CuJE`](https://www.youtube.com/watch?v=Cq96pj-CuJE) | No |

Temas de cada uno, según la descripción del vídeo (base para escribir el `resumen`):

- **02 Echaleku:** cómo montó su marca de guantes, marketing, ventas y emprendimiento, y el negocio del
  boxeo fuera del ring (patrocinios, oportunidades, dificultades).
- **03 Coll:** cómo construir una carrera en la industria deportiva: empleo, emprendimiento, nuevas
  tecnologías y el futuro del negocio del deporte.
- **04 Pallarés:** preparación mental para competir: presión, confianza, concentración, miedo a
  fallar, bloqueos y nervios.

Contexto que hay que tener presente:

- **La numeración la marca YouTube.** Los títulos del 01 y el 02 llevan "Horizon Sport #N"; el 03 y el
  04 ya no llevan número. En la web se numera por orden de publicación.
- **Ramón Lord + Clara López** (boxeo), el episodio que en agosto iba a ser el 01, **sigue sin
  publicarse**.
- **El foco se está ensanchando.** El 03 va de empleo en la industria y el 04 de psicología deportiva,
  no estrictamente de negocio. La descripción del canal ya presenta el proyecto como punto de
  encuentro entre profesionales del deporte y quienes quieren abrirse camino en la industria. La web
  sigue hablando de "negocio del deporte" para decisores. Ver la pregunta abierta de posicionamiento.
- Cadencia real: un episodio por semana, normalmente el viernes. La página de newsletter promete
  envío "cada jueves" (y la newsletter no existe todavía).

## Pendientes, por prioridad

1. **Poner al día los episodios 02–04** en `src/data/contenido.js` (`episodios` e `invitados`), con
   los datos de la tabla. Falta redactar los tres resúmenes y decidir el orden de la lista (hoy solo
   hay uno; lo habitual es el más reciente arriba). Receta: [INFRA → Añadir un episodio](INFRA.md#añadir-un-episodio-publicado).
   - `episodiosProximos` anuncia 02–06 como "Por anunciar" y ya no cuadra. **Mario tiene que decir
     cuántos quedan grabados sin publicar** (el 5 original era una deducción, nunca se confirmó).
2. **Formularios muertos.** Los dos de `/colabora` (invitado y patrocinio) y los dos de newsletter
   (bloque común y página) envían a `action="#"`: quien los rellena pierde lo que escribe. Es el
   agujero más caro, porque `/colabora` es la página de conversión. Falta elegir backend (Formspree,
   Web3Forms, endpoint propio con Resend…) y plataforma de newsletter (Beehiiv, Substack,
   MailerLite…). **Decisión de Mario y socios.**
3. **Media kit.** El botón "Descargar" de `/colabora#media-kit` apunta a `#`. Falta el PDF.
4. **Aviso legal.** `/legal` no tiene titularidad real (denominación, NIF, domicilio) ni revisión RGPD
   por alguien que sepa. Remite a "el correo de contacto", que no existe en la web.
5. **Plataformas.** Spotify y Apple Podcasts están a `null` y no se muestran. Instagram y TikTok no
   aparecen en el pie.
6. **Copy que se ha quedado corto** frente a los invitados reales: la meta descripción de `/invitados`
   habla de "agentes, directivos, consultores y responsables de marketing deportivo"; el pie, de
   "quienes dirigen la industria". Revisar junto con el posicionamiento.
7. **Imagen social.** El `og:image` es la miniatura del estreno (`public/og-estreno.jpg`, 1280×720).
   Cambiarla por una imagen de marca cuando exista.

## Preguntas abiertas (las decide Mario)

- ¿Cuántos episodios grabados quedan por publicar, y con quién?
- ¿Qué backend de formularios y qué plataforma de newsletter?
- ¿La web se alinea con la descripción nueva del canal (hacer carrera en la industria) o mantiene
  "el negocio del deporte"? El lema "El partido se juega en los despachos" no se toca sin preguntar.
- ¿Se enlazan Instagram y TikTok desde el pie?
- ¿Qué fecha se publica para el 04: 27-sep (YouTube en UTC) o 28-sep (hora de España)?

## Resuelto recientemente (para no volver a investigarlo)

- **Alias viejo `horizon-sport-web.vercel.app`.** Tras renombrar el proyecto de Vercel se quedó
  congelado sirviendo el sitio antiguo. Ahora está asignado a la rama `preview` y sirve el contenido
  actual (comprobado el 29-sep-2026).
- **Numeración (4-sep).** El #1 de YouTube era Santi Higuera y la web tenía otro 01. Manda YouTube.
- **Portada de espera (4-sep).** Estuvo activa unas horas el día del estreno y se retiró a las 19:00.
  Cómo repetirla: [INFRA → Portada de espera](INFRA.md#portada-de-espera).
- **Hosts (19-ago).** Roles, bios y fotos reales publicados.
