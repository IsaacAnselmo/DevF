<<<<<<< HEAD
const { Largometraje } = require('./Largometraje');
class Pelicula extends Largometraje
{
    constructor(nombre,duracion,tipo,compania,costo)
    {
        super(nombre,duracion,tipo)

        this.compania=compania,
        this.costo=costo
    }

    informacion()
    {
        return `La pelicula ${this.nombre} fue desarrollada por ${this.compania} y tuvo un costo de ${this.costo}`
    }

}

module.exports={
    Pelicula,
=======
const { Largometraje } = require('./Largometraje');
class Pelicula extends Largometraje
{
    constructor(nombre,duracion,tipo,compania,costo)
    {
        super(nombre,duracion,tipo)

        this.compania=compania,
        this.costo=costo
    }

    informacion()
    {
        return `La pelicula ${this.nombre} fue desarrollada por ${this.compania} y tuvo un costo de ${this.costo}`
    }

}

module.exports={
    Pelicula,
>>>>>>> b60a10b61f92f42958e4f025d7d97778bd92a1a6
};