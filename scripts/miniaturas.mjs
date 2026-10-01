// Descarga la miniatura de YouTube de cada episodio y la guarda en WebP, en dos anchos.
// Uso, desde la raíz del proyecto:  node scripts/miniaturas.mjs
//
// Solo genera las que faltan en public/miniaturas, así que se puede lanzar cada vez que entra un
// episodio. Para rehacer una (si se cambia la miniatura en YouTube), borra sus dos archivos.
// Se sirven desde el propio dominio para no hacer peticiones a YouTube al cargar la página.
import { existsSync, mkdirSync } from 'node:fs';
import sharp from 'sharp';
import { episodios } from '../src/data/contenido.js';

const carpeta = 'public/miniaturas';
const anchos = [960, 480];
mkdirSync(carpeta, { recursive: true });

for (const ep of episodios) {
  if (!ep.miniatura) continue;
  const destinos = anchos.map((ancho) => `${carpeta}/${ep.miniatura}-${ancho}.webp`);
  if (destinos.every((d) => existsSync(d))) continue;

  const id = new URL(ep.url).searchParams.get('v');
  const original = await descargar(id);
  for (const [i, ancho] of anchos.entries()) {
    await sharp(original)
      .resize(ancho, Math.round((ancho * 9) / 16), { fit: 'cover' })
      .webp({ quality: 80 })
      .toFile(destinos[i]);
  }
  console.log(`Episodio ${ep.numero}: ${destinos.join(', ')}`);
}

// maxresdefault (1280×720) no existe en todos los vídeos; hqdefault (480×360) sí, con bandas
// negras arriba y abajo que el recorte a 16:9 elimina.
async function descargar(id) {
  for (const calidad of ['maxresdefault', 'hqdefault']) {
    const respuesta = await fetch(`https://i.ytimg.com/vi/${id}/${calidad}.jpg`);
    if (respuesta.ok) return Buffer.from(await respuesta.arrayBuffer());
  }
  throw new Error(`No hay miniatura para el vídeo ${id}`);
}
