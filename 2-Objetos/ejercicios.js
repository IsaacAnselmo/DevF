const myPenguin ={
    name:"Mr. Penguin",
    origin:"Top Wing",
    note:"Penny's dad",

    getName()
    {
        return this.name ;
    }

};

console.log(`Hola, soy un pingüino y mi nombre es ${myPenguin.getName()}`);

myPenguin.puedeVolar=false;

myPenguin.graznar = function(){
    return "kaww kaww!!";
}
//punto 5
myPenguin.saludar=function()
{
    return `Hola, soy un pingüino y mi nombre es ${this.getName()}`;
}
//punto 6
myPenguin.name="Señor Pingu";

console.log(`${myPenguin.saludar()}`);
//punto 7
myPenguin.volar=function()
{
    if(this.puedeVolar)
        return `Puedo volar`
    else
        return `No puedo volar :(`
}

console.log(`${myPenguin.volar()}`);
//punto 8
myPenguin.puedeVolar=true;

console.log(`${myPenguin.volar()}`);