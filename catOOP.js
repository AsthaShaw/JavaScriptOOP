const Animal=require('./animalOOP.js')

class Cat extends Animal{

    constructor(name){
        super(name, 2)
    }

    makeSound(){
        console.log(`${this.name} meows`);
    }
}

const celine=new Cat("Celine");
celine.diet("catfood");
celine.makeSound();