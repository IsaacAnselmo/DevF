<<<<<<< HEAD
const { Largometraje } = require('./Largometraje');
class Documental extends Largometraje
{
   constructor(nombre,duracion,tipo,independiente,historico) 
   {
       super(nombre,duracion,tipo),
       
       this.independiente=independiente,
       this.historico=historico
   }

   agradecer()
   {
       return `Gracias por ver el documental ${this.nombre}`
   }

}

module.exports={
    Documental,
=======
const { Largometraje } = require('./Largometraje');
class Documental extends Largometraje
{
   constructor(nombre,duracion,tipo,independiente,historico) 
   {
       super(nombre,duracion,tipo),
       
       this.independiente=independiente,
       this.historico=historico
   }

   agradecer()
   {
       return `Gracias por ver el documental ${this.nombre}`
   }

}

module.exports={
    Documental,
>>>>>>> b60a10b61f92f42958e4f025d7d97778bd92a1a6
};