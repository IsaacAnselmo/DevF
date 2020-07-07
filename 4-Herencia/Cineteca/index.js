<<<<<<< HEAD

const { Cine } = require('./Cine');
const { Documental } = require('./Documental');
const { Pelicula } = require('./Pelicula');

const cinemex = new Cine('Cinemex Reforma');
const cinepolis=new Cine('Cinepolis Centro');
// reproducir el documental Cosmos
const documental = new Documental('Cosmos',60,'nuevo',true,false);
// reproducir debe recibir un largometraje

cinemex.reproducir(documental);

// reproducir su película Favorita
const pelicula = new Pelicula('Pelicula',120,'nuevo','Fox','120000');

=======

const { Cine } = require('./Cine');
const { Documental } = require('./Documental');
const { Pelicula } = require('./Pelicula');

const cinemex = new Cine('Cinemex Reforma');
const cinepolis=new Cine('Cinepolis Centro');
// reproducir el documental Cosmos
const documental = new Documental('Cosmos',60,'nuevo',true,false);
// reproducir debe recibir un largometraje

cinemex.reproducir(documental);

// reproducir su película Favorita
const pelicula = new Pelicula('Pelicula',120,'nuevo','Fox','120000');

>>>>>>> b60a10b61f92f42958e4f025d7d97778bd92a1a6
cinepolis.reproducir(pelicula);