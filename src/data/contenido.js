// Fuente única de contenido del sitio.
// Los textos son provisionales pero con la voz definitiva: sustituir por los reales
// según se publiquen episodios y lleguen los datos de marca.

export const marca = {
  nombre: 'Horizon Sport',
  claim: 'El podcast del negocio del deporte',
  descripcion:
    'Conversaciones con quienes dirigen la industria del deporte: directivos, agentes, marcas y gestores. El lado que no se ve desde la grada.',
};

export const episodios = [
  {
    numero: '01',
    titulo: 'El negocio del boxeo y el efecto Velada',
    invitado: 'Ramón Lord y Clara López',
    contexto: 'Entrenador y boxeadora',
    duracion: '48 min',
    fecha: '2026-08-06',
    fechaTexto: '6 de agosto',
    resumen:
      'Ramón Lord entrena boxeo desde hace años, formado en la escuela cubana. Clara López apunta a campeona de España en su peso. Con los dos repasamos el estado del boxeo, entramos en el debate de la Velada de Ibai y hablamos de cómo se sostiene económicamente el deporte por debajo de las grandes veladas.',
  },
  {
    numero: '02',
    titulo: 'Vivir de las MMA en España',
    invitado: 'Santi Higuera',
    contexto: 'Luchador de MMA',
    duracion: '52 min',
    fecha: '2026-08-13',
    fechaTexto: '13 de agosto',
    resumen:
      'Qué hay detrás de una carrera en artes marciales mixtas: de dónde sale el dinero, qué pesa más entre el resultado y la repercusión, y cómo se gestiona la exposición pública. Hablamos también, sin rodeos, de su pelea contra Leo Climent.',
  },
  {
    numero: '03',
    titulo: 'El negocio detrás de unos guantes de boxeo',
    invitado: 'Javi Echaleku',
    contexto: 'Marca de guantes y accesorios',
    duracion: '45 min',
    fecha: '2026-08-19',
    fechaTexto: '19 de agosto',
    resumen:
      'Montar una marca de material deportivo desde dentro del propio deporte: producción, márgenes, distribución y qué papel juegan los deportistas que lo llevan puesto. El negocio de la ropa y los accesorios, contado por quien fabrica.',
  },
];

// Grabados y pendientes de edición: se anuncian cuando hay fecha.
export const episodiosProximos = [
  { numero: '04', pista: 'Por anunciar' },
  { numero: '05', pista: 'Por anunciar' },
  { numero: '06', pista: 'Por anunciar' },
];

// Retratos reales. Rol y bio quedan vacíos a propósito: no inventamos datos
// sobre personas identificables. Añadirlos cuando los pasen ellos.
export const hosts = [
  { nombre: 'Izan', rol: null, bio: null, foto: 'izan' },
  { nombre: 'Lluís', rol: null, bio: null, foto: 'lluis' },
  { nombre: 'Mario', rol: null, bio: null, foto: 'mario' },
];

export const invitados = [
  { nombre: 'Ramón Lord', rol: 'Entrenador de boxeo', episodio: '01', publicado: true },
  { nombre: 'Clara López', rol: 'Boxeadora', episodio: '01', publicado: true },
  { nombre: 'Santi Higuera', rol: 'Luchador de MMA', episodio: '02', publicado: true },
  { nombre: 'Javi Echaleku', rol: 'Marca de guantes y accesorios', episodio: '03', publicado: true },
  { nombre: null, rol: null, episodio: '04', publicado: false },
  { nombre: null, rol: null, episodio: '05', publicado: false },
  { nombre: null, rol: null, episodio: '06', publicado: false },
];

export const plataformas = [
  { nombre: 'Spotify', url: '#' },
  { nombre: 'YouTube', url: '#' },
  { nombre: 'Apple Podcasts', url: '#' },
];

export const navegacion = [
  { href: '/episodios', texto: 'Episodios' },
  { href: '/invitados', texto: 'Invitados' },
  { href: '/sobre-nosotros', texto: 'Sobre nosotros' },
  { href: '/newsletter', texto: 'Newsletter' },
];
