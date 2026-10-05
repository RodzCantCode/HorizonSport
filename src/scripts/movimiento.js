// Movimiento de la web: titulares que se ensanchan, elementos que aparecen al entrar en pantalla,
// botones con imán y la cabecera que se recoge en móvil. Lo visual vive en global.css; aquí solo se
// decide cuándo pasa cada cosa.
// Solo se importan los muelles de Mochi (código sin React): el resto de su módulo de movimiento
// trae React y el empaquetador lo deja fuera.
import { Spring, springs } from 'mochi-ui/motion';

const raiz = document.documentElement;
const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;
const ahora = () => performance.now() / 1000;

// Máximo de espera a la tipografía antes de renunciar a la entrada del titular.
const ESPERA_FUENTE = 1200;
// Escalonado entre elementos que entran a la vez, y tope para que una lista larga no se eternice.
const PASO = 80;
const MAX_ESCALONADOS = 6;

/**
 * Arranca los titulares cinéticos y devuelve cuánto hay que esperar (ms) para que lo que viene
 * detrás entre cuando el titular ya está casi en su sitio.
 */
async function titulares() {
  const lista = [...document.querySelectorAll('[data-cinetico]')];
  if (!lista.length) return 0;

  const terminar = (t) => t.classList.add('cinetico-hecho');
  if (reducido) {
    lista.forEach(terminar);
    return 0;
  }

  // Medir antes de que llegue Archivo daría el ancho de la fuente de reserva y, al llegar la buena,
  // las palabras se cortarían. Si tarda demasiado, el titular aparece sin animar.
  const fuente = document.fonts
    .load('800 expanded 1em Archivo')
    .then((caras) => caras.length > 0)
    .catch(() => false);
  const plazo = new Promise((r) => setTimeout(() => r(false), ESPERA_FUENTE));
  if (!(await Promise.race([fuente, plazo]))) {
    lista.forEach(terminar);
    return 0;
  }

  let mayor = 0;
  for (const titular of lista) {
    const palabras = [...titular.querySelectorAll('.palabra')];
    // Todas las lecturas primero y luego todas las escrituras: una sola maquetación.
    const anchos = palabras.map((p) => p.getBoundingClientRect().width);
    palabras.forEach((p, i) => (p.style.width = `${anchos[i]}px`));
    titular.classList.add('en-marcha');

    const ultima = palabras.at(-1)?.querySelector('.palabra__tinta');
    const soltar = () => {
      palabras.forEach((p) => (p.style.width = ''));
      titular.classList.replace('en-marcha', 'cinetico-hecho');
    };
    ultima?.addEventListener('animationend', (e) => e.animationName.includes('ensancha') && soltar());
    // Por si la animación no llega a terminar (pestaña en segundo plano, por ejemplo).
    setTimeout(soltar, palabras.length * 70 + 1600);

    mayor = Math.max(mayor, palabras.length * 70 + 260);
  }
  return mayor;
}

/** Marca con `.revelado` lo que entra en pantalla, escalonando lo que entra a la vez. */
function revelar(esperaInicial) {
  const elementos = document.querySelectorAll('[data-revela]');
  if (!elementos.length) return;

  // Lo que ya está en pantalla al cargar entra de golpe, detrás del titular, aunque roce el borde
  // inferior: en un portátil, los botones de la portada quedan justo ahí, y en una pantalla alta el
  // horizonte cae exactamente en el borde. Un rótulo está bajado su propia altura mientras espera,
  // así que se mide desde donde quedará.
  const BORDE = 4;
  const enPantalla = [...elementos].filter((el) => {
    const r = el.getBoundingClientRect();
    const top = el.dataset.revela === 'rotulo' ? r.top - r.height : r.top;
    return top < innerHeight + BORDE && r.bottom > 0;
  });
  enPantalla.forEach((el, i) => {
    el.style.setProperty('--retardo', `${esperaInicial + Math.min(i, MAX_ESCALONADOS) * PASO}ms`);
    el.classList.add('revelado');
  });

  const observador = new IntersectionObserver(
    (entradas) => {
      const visibles = entradas
        .filter((e) => e.isIntersecting)
        .map((e) => e.target)
        .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
      visibles.forEach((el, i) => {
        el.style.setProperty('--retardo', `${Math.min(i, MAX_ESCALONADOS) * PASO}ms`);
        el.classList.add('revelado');
        observador.unobserve(el);
      });
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  elementos.forEach((el) => el.classList.contains('revelado') || observador.observe(el));
}

/** Imán y luz de los botones: solo con ratón, que en táctil no hay cursor que seguir. */
function imanes() {
  if (reducido || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  // Recorrido máximo hacia el cursor, en px: lo justo para notarse sin que el botón huya.
  const MAX_X = 6;
  const MAX_Y = 4;
  const limitar = (v) => Math.max(-1, Math.min(1, v));

  for (const boton of document.querySelectorAll('.mochi-button')) {
    const x = new Spring(0, springs.snappy);
    const y = new Spring(0, springs.snappy);
    let cuadro = 0;

    const pintar = () => {
      const t = ahora();
      boton.style.translate = `${x.value(t).toFixed(2)}px ${y.value(t).toFixed(2)}px`;
      cuadro = x.isSettled(t) && y.isSettled(t) ? 0 : requestAnimationFrame(pintar);
      if (!cuadro && x.target === 0 && y.target === 0) boton.style.translate = '';
    };
    const animar = () => {
      if (!cuadro) cuadro = requestAnimationFrame(pintar);
    };

    boton.addEventListener('pointermove', (e) => {
      const t = ahora();
      const r = boton.getBoundingClientRect();
      // El rectángulo ya incluye el desplazamiento del imán: se descuenta para medir desde el
      // centro en reposo.
      const cx = r.left + r.width / 2 - x.value(t);
      const cy = r.top + r.height / 2 - y.value(t);
      x.set(limitar((e.clientX - cx) / (r.width / 2)) * MAX_X, t);
      y.set(limitar((e.clientY - cy) / (r.height / 2)) * MAX_Y, t);
      boton.style.setProperty('--luz-x', `${e.clientX - r.left}px`);
      boton.style.setProperty('--luz-y', `${e.clientY - r.top}px`);
      animar();
    });

    boton.addEventListener('pointerleave', () => {
      const t = ahora();
      x.set(0, t, springs.morph);
      y.set(0, t, springs.morph);
      animar();
    });
  }
}

/** En móvil, la fila del menú se recoge al bajar y vuelve al subir. */
function cabecera() {
  const cab = document.querySelector('.cabecera');
  if (!cab) return;
  const movil = matchMedia('(max-width: 900px)');
  // Por debajo de este movimiento no se cambia nada: evita parpadeos con el temblor del dedo.
  const UMBRAL = 8;

  let ultimo = scrollY;
  let pendiente = false;

  const actualizar = () => {
    pendiente = false;
    const y = scrollY;
    const delta = y - ultimo;
    if (Math.abs(delta) < UMBRAL && y > 0) return;
    const recoger =
      movil.matches && delta > 0 && y > cab.offsetHeight && !cab.contains(document.activeElement);
    cab.classList.toggle('cabecera--recogida', recoger);
    ultimo = y;
  };

  addEventListener(
    'scroll',
    () => {
      if (!pendiente) {
        pendiente = true;
        requestAnimationFrame(actualizar);
      }
    },
    { passive: true },
  );
  cab.addEventListener('focusin', () => cab.classList.remove('cabecera--recogida'));
}

async function iniciar() {
  imanes();
  cabecera();
  const espera = await titulares();
  revelar(espera);
  raiz.classList.add('movimiento-listo');
}

iniciar();
