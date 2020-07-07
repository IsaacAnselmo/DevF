<<<<<<< HEAD
class Largometraje
{
    constructor(nombre,duracion,tipo)
    {
        this.nombre=nombre,
        this.duracion=duracion,
        this.tipo=tipo,
        this.reproducir=false,
        this.minute=0
    }

    iniciarReproducir()
    {
        this.reproducir=true;
        return `Se esta reprodiendo ${this.nombre}`
    }

    terminarReproducir()
    {
        this.reproducir=false;
        return `Se detuvo la reproducción de ${this.nombre}`
    }


}

module.exports={
    Largometraje,
=======
class Largometraje
{
    constructor(nombre,duracion,tipo)
    {
        this.nombre=nombre,
        this.duracion=duracion,
        this.tipo=tipo,
        this.reproducir=false,
        this.minute=0
    }

    iniciarReproducir()
    {
        this.reproducir=true;
        return `Se esta reprodiendo ${this.nombre}`
    }

    terminarReproducir()
    {
        this.reproducir=false;
        return `Se detuvo la reproducción de ${this.nombre}`
    }


}

module.exports={
    Largometraje,
>>>>>>> b60a10b61f92f42958e4f025d7d97778bd92a1a6
};