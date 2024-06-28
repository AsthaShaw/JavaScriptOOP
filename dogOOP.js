const Animal=require('./animalOOP.js')

class Dog extends Animal{

    constructor(name, age){
        super(name, age)
    }

    makeSound(){
        console.log(`${this.name} barks`);
    }
}

const tommy=new Dog("Tommy", 2);
tommy.diet("avocados");
tommy.makeSound();

const bailey=new Dog("Bailey", 3);
bailey.diet("lamb");
bailey.makeSound();