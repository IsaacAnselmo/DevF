const myPenguin ={
    name:"Mr. Penguin",
    origin:"Top Wing",
    note:"Penny's dad"

};

console.log(`Hola, soy un pingüino y mi nombre es ${myPenguin.name}`);

myPenguin.puedeVolar=false;

myPenguin.graznar = function(){
    console.log("kaww kaww!!");
}

myPenguin.graznar();