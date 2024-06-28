const Animal=require('./animalOOP.js')

class Dog extends Animal{

    constructor(name, age){
        super(name, age)
    }

    makeSound(){
        console.log(`${this.name} barks`);
    }
//Polymorphism-method overiding
    diet(food){
        console.log(`${this.name} likes eating ${food} but his regular diet contains dog food too for extra nutrition`);
    }
    
}

const tommy=new Dog("Tommy", 2);
tommy.diet("avocados");
tommy.makeSound();
//Polymorphism

const bailey=new Dog("Bailey", 3);
bailey.diet("lamb");
bailey.makeSound();