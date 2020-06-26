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
};