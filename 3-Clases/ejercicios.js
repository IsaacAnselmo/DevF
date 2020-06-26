class Persona {
    constructor(nombre,aPaterno,aMaterno,fechaNacimiento,sexo,peso,altura)
    {
        this.nombre=nombre,
        this.aPaterno=aPaterno,
        this.aMaterno=aMaterno,
        this.dia=dia,
        this.mes=mes,
        this.anio=anio,
        this.edad=,

        this.sexo=sexo,
        this.peso=peso,
        this.altura=altura,
        this.rfc="";

    };
    calculaIMC() {
        let imc;
        if(altura-Math.trunc(this.altura)==!0)
        {
            imc=this.peso/Math.pow(this.altura,2);
        }
        else
        {
            
            imc=this.peso/Math.pow((this.altura/100),2);
        }
        return imc;
    };

    esMayorDeEdad()
    {
        if(this.edad>=18)
        {
            console.log(`Es mayor de edad`);
            return true;
        }
        else
        {
            console.log(`Es menor de edad`);
            return false;
        }

    };

    generaRFC()
    {
        this.rfc=this.rfc.concat(this.nombre.charAt(0),this.nombre.charAt(1),2020-this.edad,this.sexo);
        console.log(`El RFC es: ${this.rfc}`);
        return this.rfc;
    }

    


};

const persona1=new Persona('Isaac','Anselmo','Zavala','29','M','74','1.80')