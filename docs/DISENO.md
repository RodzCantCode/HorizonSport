# Diseño

Sistema visual v2 (15-ago-2026). Todos los tokens y las clases globales están en
[src/styles/global.css](../src/styles/global.css). Por qué es así: [DECISIONES → Diseño](DECISIONES.md#diseño).

## Líneas rojas

Mario detecta estos patrones enseguida y los rechaza como "AI slop". Tumbaron la v1.

1. **Titulares que mezclan dos tipografías, con la segunda como la "elegante"**: serif, casi siempre
   itálica y casi siempre en el color de acento. Era el titular de portada de la v1. El patrón siempre
   se resuelve igual, y por eso se nota que es plantilla. Justificarlo con un concepto ("las dos fuentes
   encarnan la tesis del programa") no lo salva.
2. **Texto descriptivo por todas partes, a modo de tooltip**: un antetítulo sobre cada encabezado, una
   línea de explicación bajo cada elemento, cajas de notas que le cuentan la página al visitante.

Qué hacer en su lugar:

- Una sola familia con rango propio. El énfasis sale de la anchura y el peso, no de otra fuente.
- Los encabezados van solos, sin antetítulo.
- Si un elemento se entiende por sí mismo, no lleva descripción.
- Las notas de trabajo van a `docs/`, nunca a la página.
- Si Mario señala algo, se nombra el fallo y se quita. No se defiende el concepto primero.

## Tipografía: una familia, dos voces

**Archivo variable** (ejes `wdth` 62–125 y `wght` 100–900), cargada desde Google Fonts en `Base.astro`.

| Clase | Qué es | Dónde |
| --- | --- | --- |
| `.ancha` | `font-stretch: 125%`, peso 800, mayúsculas, interlineado 0.9 | Todos los titulares |
| `.estrecha` | `font-stretch: 75%`, peso 600, mayúsculas, espaciado 0.1em, 0.75rem, gris tenue | Etiquetas, número de episodio, metadatos |

Titulares: `.titular-hero`, `.titular-pagina`, `.titular-seccion` (se combinan con `.ancha`) y
`.titular-tarjeta` (peso 600, sin `.ancha`). Texto: `.entradilla`, `.parrafo`, `.dato`.

La **portada** es un solo titular sin color, "EL PARTIDO SE JUEGA EN LOS DESPACHOS", sin imagen, sin
reproductor y sin frase resaltada en azul.

## Color

| Token | Valor | Uso |
| --- | --- | --- |
| `--tinta-900` | `#07090c` | Fondo de página |
| `--tinta-850` | `#0a0e13` | Pie |
| `--tinta-800` | `#0d1218` | Secciones alternas (`.seccion--alterna`) |
| `--tinta-700` | `#12181f` | Tarjetas |
| `--tinta-600` | `#1a222b` | Campos, botones de contorno, fondo de retrato y de miniatura |
| `--linea` / `--linea-fuerte` | `#1f2831` / `#2c3945` | Filetes / bordes de botones y campos |
| `--papel` | `#f1f5f8` | Texto principal |
| `--papel-medio` | `#98a5b2` | Párrafos, entradillas |
| `--papel-tenue` | `#7d8b98` | Metadatos, etiquetas, placeholders |
| `--azul` | `#169eff` | Acento |
| `--azul-tinta` | `#04121e` | Texto sobre azul (los botones azules llevan texto oscuro) |
| `--azul-filete` | `rgba(22,158,255,.32)` | Borde de `.tarjeta--decision` y subrayado de `.enlace` |

Reglas del azul:

- **Azul sólido (`variant="accent"`) solo en CTA de conversión**: colaborar, postular, patrocinar,
  suscribirse, descargar el media kit. Si el azul aparece en todas partes, deja de señalar dónde hay
  que decidir algo.
- Por eso "Ver el episodio" y "Ver todos" van en contorno (`variant="surface"`).
- `.tarjeta--decision` es el único filete azul del sitio: marca dónde se decide colaborar.
- Detalles en azul permitidos: el punto del logo ("Horizon**.**Sport"), el rol de cada host, el
  subrayado activo del menú, el foco (`:focus-visible`) y las viñetas de las listas de `/colabora`.

## Botones y campos: Mochi

Desde el 1-oct-2026 los botones y los campos de formulario son componentes de
[Mochi](https://github.com/RodzCantCode/mochi), la librería propia de Mario (por qué:
[DECISIONES](DECISIONES.md#diseño)). No se escriben botones a mano.

- **Forma y movimiento, los de Mochi**: píldora, 44 px de alto (56 px en formularios, `size="lg"`;
  36 px en el pie, `size="sm"`). **Letra y colores, los de Horizon**: `global.css` redefine las
  variables `--mochi-*` con los tokens de arriba. Esa tabla de equivalencias es la única fuente; no
  se tocan los estilos de la librería.
- Dos variantes en uso: `accent` (azul, solo conversión) y `surface` (contorno sobre `--tinta-600`).
  Mochi no trae estado de paso del ratón; `global.css` conserva el de los botones antiguos.
- **Movimiento de los botones sin JavaScript.** Los muelles de Mochi necesitan JavaScript, y en la
  0.3.0 un botón pintado en el servidor no se mueve (su README dice que sí se hunde; no es así).
  `global.css` lo suple con las curvas CSS que Mochi publica para esto (`--mochi-ease-*`,
  `--mochi-duration-*`): se hunde al pulsar (`press`), vuelve con rebote (`snappy`) y el color cambia
  con `color`. Con "reducir movimiento" no se hunde. Si una versión nueva de Mochi lo trae de serie,
  se quita esa regla.
- `LinkButton` (enlaces) se pinta en el servidor, sin JavaScript. `TextField` (campos de una línea)
  va como isla de React (`client:visible`; `client:load` en `/newsletter`, donde el campo está arriba):
  esas páginas cargan JavaScript cuando el formulario aparece en pantalla.
- Mochi no tiene campo de varias líneas. El texto largo de `/colabora` es un `<textarea>` con la
  clase `.campo-largo`, que imita al `TextField` (fondo, anillo de foco y etiqueta que sube) sin JS.
- El `Button` de enviar no usa sus estados de cargando y hecho: los formularios aún no envían a
  ningún sitio, y enseñar "hecho" sería mentir. Se activan cuando haya servicio de formularios.

## Accesibilidad

- **Contraste AA verificado**: 0 fallos, peor caso 5.12:1. `--papel-tenue` era `#5b6773` y daba
  3.1–3.5:1, así que se aclaró. **Si se oscurece algún gris, hay que volver a medir.**
- Enlace "Saltar al contenido", foco visible en azul y `prefers-reduced-motion` respetado.
- El menú funciona sin JavaScript: por debajo de 900 px pasa a una fila con desplazamiento horizontal.
- Los números de episodio son `aria-hidden`. El título lleva el número en texto oculto para lectores
  de pantalla.

## Disposición

- Ancho máximo 1180 px (`.envoltorio`), márgenes y espacios fluidos con `clamp()`.
- Cortes: **1024 px** (en las filas de episodio, el botón baja bajo el texto y la miniatura se
  reduce), **900 px** (menú), **860 px** (rejilla de 3 → 2, pie de 4 → 2), **700 px** (filas de
  episodio e invitado a una columna), **620 px** (rejillas a 1 columna), **520 px** (pie a 1 columna).

## Fotos de los hosts

- Retratos de estudio: polos oscuros y fondo azul verdoso, que queda cerca del azul de marca.
- En la web: WebP **900×1125** y **450×563** (proporción 4:5, unos 50 KB y 15 KB), servidos con
  `srcset` desde `public/fotos/<slug>-900.webp` y `-450.webp`. Cómo generarlas: [INFRA → Fotos](INFRA.md#fotos-de-los-hosts).
- Si un host no tiene foto (`foto: null`), el componente `Retrato` pinta un hueco rayado en vez de una
  imagen rota.

## Miniaturas de los episodios

- Las de YouTube, sin retocar: fondo azul oscuro con texto, que casa con la paleta. Van en la lista
  de episodios (portada y `/episodios`), entre el número y el título. Es una lista con imagen, no una
  rejilla de carátulas: la variante B sigue descartada.
- En la web: WebP **960×540** y **480×270** (16:9, unos 40 KB y 15 KB), desde
  `public/miniaturas/<slug>-960.webp` y `-480.webp`, con el mismo borde y radio que los retratos.
  Cómo generarlas: [INFRA → Añadir un episodio](INFRA.md#añadir-un-episodio-publicado).
- La miniatura enlaza al vídeo, pero fuera del orden de tabulación y oculta a lectores de pantalla:
  el enlace accesible es el botón "Ver el episodio". Si un episodio no tiene `miniatura`, la fila
  vuelve a la disposición sin imagen.

## Detalles que ya han dado guerra

- **`display: flex` gana al atributo `hidden`.** Un elemento con `hidden` y una clase con
  `display: flex` se sigue viendo. Hace falta una regla explícita, `.clase[hidden] { display: none }`.
  Pasó con la cuenta atrás de la portada de espera.
- **Los estilos con ámbito de Astro no llegan a los componentes de Mochi**, porque son de React.
  Para colocar o dimensionar uno desde un `.astro` hace falta `:global(.clase)`, pasándole la clase
  con `className`.

## Referencia

[docs/referencia/wireframes-dark.html](referencia/wireframes-dark.html) es el prototipo de junio de
2026: 3 variantes × 6 páginas, en modo oscuro, con selector de variante y de página. Las notas en
ámbar explican la intención de cada bloque. Ábrelo en el navegador. Es anterior a la v1: sirve para
entender la estructura y las variantes, **no** como referencia visual final (la tipografía y los
textos ya no son esos).
