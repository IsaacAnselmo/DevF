
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

cinepolis.reproducir(pelicula);