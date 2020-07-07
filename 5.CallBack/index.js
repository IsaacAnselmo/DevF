//1

function mensaje(callback,mensaje){
    callback(mensaje);
}

mensaje(console.info,"Hola mundo");

//2

let minutosA=[120,80,200,100,500,400,60];

function comparar(arreglo)
{
    let resultado=[];
    for(let i=0;i<arreglo.length;i++)
        if(arreglo[i]/60>2)
            resultado.push(arreglo[i]/60);
    
    return resultado;
}

function mostrarMayorDos(arreglo,callback)
{
    let resultado=callback(arreglo);
    for(let i=0;i<resultado.length;i++)
        console.log(resultado[i]);
}

mostrarMayorDos(minutosA,comparar);
