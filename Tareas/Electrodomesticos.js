class Electrodomesticos
{
    constructor(precio,color,capacidad)
    {
        this.setPrecio(precio);
        this.setColor(color);
        this.setCapacidad(capacidad);
        this.setConsumoEnergetico(100);
    }
    getPrecio()
    {
        return this.precio;
    };
    setPrecio(precio){
        this.precio=precio;
    };
    getColor()
    {
        return this.color;
    };
    setColor(color){
        this.color=color;
    };
    getCapacidad(){
        return this.capacidad;
    }
    setCapacidad(capacidad){
        this.capacidad=capacidad;
    };
    getConsumoEnergetico()
    {
        return this.consumoEnergetico;
    }
    setConsumoEnergetico(consumoEnergetico){
        this.consumoEnergetico=consumoEnergetico;
    };    

};

class Lavadora extends Electrodomesticos
{
    constructor(precio,color,capacidad,carga)
    {
        super(precio,color,capacidad);
        this.setCarga(carga);
    }
    
    getCarga(){
        return this.carga;
    }

    setCarga(carga){
        this.carga=carga;
    };

    precioFinal()
    {
        return this.carga*this.consumoEnergetico;
    };
};

lavadora1=new Lavadora(100,'rojo',100,12);
console.log(`${lavadora1.precioFinal()}`);