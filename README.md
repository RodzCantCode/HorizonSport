# Horizon Sport

Web del podcast sobre el negocio del deporte: https://www.horizonsport.co
Astro estático, en español y en modo oscuro. Vercel despliega cada push a `main`.

```bash
npm install
npm run dev      # desarrollo en localhost:4321
npm run build    # genera dist/
```

Requiere Node 22 (`.nvmrc`). Para montar el proyecto en otro equipo, ver
[docs/INFRA.md](docs/INFRA.md#empezar-en-un-dispositivo-nuevo).

## Documentación

| | |
| --- | --- |
| [docs/ESTADO.md](docs/ESTADO.md) | **Empieza aquí.** Qué está publicado, qué va desfasado y qué falta, por prioridad |
| [docs/DECISIONES.md](docs/DECISIONES.md) | Qué se decidió, cuándo y por qué |
| [docs/DISENO.md](docs/DISENO.md) | Sistema visual y líneas rojas |
| [docs/INFRA.md](docs/INFRA.md) | Vercel, dominios, ramas y recetas |
| [CLAUDE.md](CLAUDE.md) | Instrucciones para Claude Code (las carga solo al abrir el proyecto) |

## Estructura

```
src/data/contenido.js   Fuente única: episodios, hosts, invitados, plataformas, menú
src/layouts/Base.astro  <head> común (SEO, Open Graph, fuentes), menú y pie
src/components/         Piezas compartidas (FilaEpisodio, Retrato, BloqueColabora…)
src/pages/              Una página por ruta
src/styles/global.css   Tokens y clases globales del sistema de diseño
public/fotos/           Retratos de los hosts en WebP (900 y 450 px)
docs/referencia/        Prototipo de wireframes de junio de 2026
```

Para cambiar contenido, basta con tocar `contenido.js`: se propaga a todas las páginas.
