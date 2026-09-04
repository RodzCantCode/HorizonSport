// Fuente única de contenido del sitio.
// Los episodios que aparecen aquí son los realmente publicados. Los grabados que
// aún no han salido van en `episodiosProximos`, sin nombre ni tema.

export const marca = {
  nombre: 'Horizon Sport',
  claim: 'El podcast del negocio del deporte',
  descripcion:
    'Conversaciones con quienes viven la industria del deporte por dentro: deportistas, entrenadores, marcas y gestores. El lado que no se ve desde la grada.',
};

export const episodios = [
  {
    numero: '01',
    titulo: 'Del anonimato a WOW FC: cómo vivir de las MMA',
    invitado: 'Santi Higuera',
    contexto: 'Luchador de MMA',
    duracion: '1 h 17 min',
    fecha: '2026-09-04',
    fechaTexto: '4 de septiembre',
    url: 'https://www.youtube.com/watch?v=-JBS4m7dXkM',
    resumen:
      'Santi Higuera cuenta cómo está construyendo su carrera en las MMA, desde sus primeras peleas hasta competir en organizaciones como WAR y WOW FC. Su evolución como luchador, la polémica pelea con Leo Climent, el peso que tiene la fe y todo lo que hay detrás de intentar vivir de esto: dinero, marca personal, oportunidades y negocio.',
  },
];

// Grabados y pendientes de edición: se anuncian cuando hay fecha.
export const episodiosProximos = [
  { numero: '02', pista: 'Por anunciar' },
  { numero: '03', pista: 'Por anunciar' },
  { numero: '04', pista: 'Por anunciar' },
  { numero: '05', pista: 'Por anunciar' },
  { numero: '06', pista: 'Por anunciar' },
];

// El reparto societario del proyecto es información interna y no se publica.
export const hosts = [
  {
    nombre: 'Izan',
    rol: 'Host principal · Negocio',
    bio: 'Lidera el proyecto y lleva la voz principal del podcast. Aunque también se mete en la parte audiovisual, su terreno es la operativa de negocio: activación de patrocinios y acuerdos de colaboración.',
    foto: 'izan',
  },
  {
    nombre: 'Lluís',
    rol: 'Host · Contenido',
    bio: 'Host y responsable de la estrategia de contenido en redes. Lleva además la dirección audiovisual de los proyectos que vienen después del podcast.',
    foto: 'lluis',
  },
  {
    nombre: 'Mario',
    rol: 'Técnico · Audiovisual',
    bio: 'El técnico. Está detrás de las cámaras cuidando que cada grabación salga como tiene que salir, y lleva la digitalización del proyecto y las colaboraciones con marcas.',
    foto: 'mario',
  },
];

export const invitados = [
  { nombre: 'Santi Higuera', rol: 'Luchador de MMA', episodio: '01', publicado: true },
  { nombre: null, rol: null, episodio: '02', publicado: false },
  { nombre: null, rol: null, episodio: '03', publicado: false },
  { nombre: null, rol: null, episodio: '04', publicado: false },
  { nombre: null, rol: null, episodio: '05', publicado: false },
  { nombre: null, rol: null, episodio: '06', publicado: false },
];

// Solo se pintan las que tienen URL: un enlace que no lleva a ninguna parte es
// peor que no enseñar la plataforma.
export const plataformas = [
  { nombre: 'YouTube', url: 'https://www.youtube.com/@HorizonSportPODCAST' },
  { nombre: 'Spotify', url: null },
  { nombre: 'Apple Podcasts', url: null },
];

export const navegacion = [
  { href: '/episodios', texto: 'Episodios' },
  { href: '/invitados', texto: 'Invitados' },
  { href: '/sobre-nosotros', texto: 'Sobre nosotros' },
  { href: '/newsletter', texto: 'Newsletter' },
];
