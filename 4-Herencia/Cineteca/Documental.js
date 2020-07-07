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
};