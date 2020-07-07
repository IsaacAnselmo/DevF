<<<<<<< HEAD
const { Largometraje } = require('./Largometraje');
class Cine
{
    constructor(nombre){
        this.nombre=nombre

    }

    reproducir(Largometraje)
    {
        console.log(`${Largometraje.iniciarReproducir()} en el cine ${this.nombre}`)
        
    }
}

module.exports={
    Cine,
=======
const { Largometraje } = require('./Largometraje');
class Cine
{
    constructor(nombre){
        this.nombre=nombre

    }

    reproducir(Largometraje)
    {
        console.log(`${Largometraje.iniciarReproducir()} en el cine ${this.nombre}`)
        
    }
}

module.exports={
    Cine,
>>>>>>> b60a10b61f92f42958e4f025d7d97778bd92a1a6
};