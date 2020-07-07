class Bebida
{
    constructor(cantidad)
    {
        this.setCantidad(cantidad);        
    };

    getCantidad()
    {
        return this.cantidad;
    };

    setCantidad(cantidad)
    {
        this.cantidad=cantidad;
    };


};

class Refresco extends Bebida
{
    constructor(cantidadMl,azucarContenido)
    {
        super(cantidadMl);
        this.setAzucar(azucarContenido);
    };

    getAzucar()
    {
        return this.azucarContenido
    };

    setAzucar(azucarContenido)
    {
        this.azucarContenido=azucarContenido;
    };

};

class Cerveza extends Bebida
{
    constructor(cantidadMl, porcentajeAlcohol)
    {
        super(cantidadMl);
        this.setPorcentajeAlcohol(porcentajeAlcohol);
    };

    getPorcentajeAlcohol()
    {
        return this.porcentajeAlcohol;
    };
    setPorcentajeAlcohol(porcentajeAlcohol)
    {
        this.porcentajeAlcohol=porcentajeAlcohol;
    };
};

refresco1=new Refresco(500,5);
cerverza1=new Cerveza(350,12);

console.log(`${refresco1.getAzucar()} ${refresco1.getCantidad()}`);
console.log(`${cerverza1.getPorcentajeAlcohol()} ${cerverza1.getCantidad()}`);
