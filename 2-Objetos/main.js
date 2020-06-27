//Defición de objeto literal
const persona1={
    //clave:valor
    name: 'Mali',
    age: 21,
    isHuman: true,
    //ecma 5
    getAge(){
        return this.age;
    },
    //ecma 5
    setAge(newAge){
        this.Age=newAge;
    }

};

console.log(`Hola soy ${persona1.name} tengo ${persona1.getAge()}`);