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
    titulo: 'Cuánto vale realmente un fichaje',
    invitado: 'Agente FIFA',
    contexto: 'Representación de futbolistas',
    duracion: '48 min',
    fecha: '2026-08-06',
    fechaTexto: '6 de agosto',
    resumen:
      'La cifra que sale en prensa casi nunca es la que se firma. Desglosamos cómo se construye una operación: variables, comisiones, derechos de imagen y por qué el mismo jugador vale cosas distintas según quién compre.',
    temas: ['Fichajes', 'Representación'],
  },
  {
    numero: '02',
    titulo: 'El patrocinio dejó de ser un logo en la camiseta',
    invitado: 'Directora de Marketing',
    contexto: 'Marca deportiva internacional',
    duracion: '52 min',
    fecha: '2026-08-13',
    fechaTexto: '13 de agosto',
    resumen:
      'Qué compra hoy una marca cuando patrocina, cómo se mide el retorno y por qué los acuerdos que solo aportan visibilidad están desapareciendo de los presupuestos.',
    temas: ['Patrocinio', 'Marketing'],
  },
  {
    numero: '03',
    titulo: 'Quién paga los derechos de televisión',
    invitado: 'Consultor de medios deportivos',
    contexto: 'Asesoría en derechos audiovisuales',
    duracion: '45 min',
    fecha: '2026-08-20',
    fechaTexto: '20 de agosto',
    resumen:
      'El dinero que sostiene al deporte profesional viene de las pantallas. Repasamos cómo se subastan los derechos, qué cambia con las plataformas y qué pasa cuando la burbuja deja de crecer.',
    temas: ['Derechos TV', 'Medios'],
  },
];

// Grabados y pendientes de edición: se anuncian sin desvelar invitado.
export const episodiosProximos = [
  { numero: '04', pista: 'Gestión de clubes y control económico' },
  { numero: '05', pista: 'Deporte femenino como oportunidad de negocio' },
  { numero: '06', pista: 'Datos y scouting: qué se compra y qué se vende' },
];

// Retratos reales. Rol y bio quedan vacíos a propósito: no inventamos datos
// sobre personas identificables. Añadirlos cuando los pasen ellos.
export const hosts = [
  { nombre: 'Izan', rol: null, bio: null, foto: 'izan' },
  { nombre: 'Lluís', rol: null, bio: null, foto: 'lluis' },
  { nombre: 'Mario', rol: null, bio: null, foto: 'mario' },
];

export const invitados = [
  {
    nombre: 'Agente FIFA',
    rol: 'Representación de futbolistas',
    episodio: '01',
    publicado: true,
  },
  {
    nombre: 'Directora de Marketing',
    rol: 'Marca deportiva internacional',
    episodio: '02',
    publicado: true,
  },
  {
    nombre: 'Consultor de medios',
    rol: 'Derechos audiovisuales',
    episodio: '03',
    publicado: true,
  },
  { nombre: null, rol: 'Gestión de clubes', episodio: '04', publicado: false },
  { nombre: null, rol: 'Deporte femenino', episodio: '05', publicado: false },
  { nombre: null, rol: 'Datos y scouting', episodio: '06', publicado: false },
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
