const Animal=require('./animalOOP.js')

class Cat extends Animal{

    constructor(name, age){
        super(name, age)
    }

    makeSound(){
        console.log(`${this.name} meows`);
    }
}

const celine=new Cat("Celine");
celine.diet("catfood");
celine.makeSound();