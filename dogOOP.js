const Animal=require('./animalOOP.js')

class Dog extends Animal{

    constructor(name){
        super(name, 2)
    }

    makeSound(){
        console.log(`${this.name} barks`);
    }
}

const tommy=new Dog("Tommy");
tommy.diet("avocados");
tommy.makeSound();

const bailey=new Dog("Bailey");
bailey.diet("lamb");
bailey.makeSound();