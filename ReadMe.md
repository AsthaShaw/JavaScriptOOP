# Introduction to OOP

### What is OOP?

Object Oriented Programming(OOP) is about modelling the real world by describing objects and their interactions.  Say if we are modelling the animal kingdom, then we would want to have objects representing the type of animals like a dog, cat etc. Every animal would have some properties in common like name, age etc. and they would have some common behaviours like what they like eating and some specific behaviours like some animals can make sound and some cannot.

### Why OOP?

If we use JavaScript objects like below 

```jsx
const animalOne={
    name:"Tommy",
    age:2,
    type:"Dog",
    diet:function(food){
        console.log(`${this.name} likes eating ${food}`)

    }
}

animalOne.diet("chicken")
```

This approach we would have to build many animal objects which wouldn't be very efficient. Instead of duplicating animal objects, we can define a blueprint for an animal and with that blueprint, create some instances/objects of animal

Other why of OOP?(To be discussed after the lecture)

- **Modularity and Reusability**- OOP breaks down a complex system like in our case animal kingdom into classes that can be reused in different parts of the code in the project leading to more efficient development. Like in our case Dog and Cat made use of existing Animal class through one of the pillars of OOP which is inheritance.
- **Easy maintenance and debugging**-OOP’s modular structure simplifies maintenance and code fix in one class would not effect others.
- **Scalability-** We can add new classes without disrupting existing code. Teams can work on different classes at the same time thus improving the overall productivity.
- **Real-World Modeling**-Since OOP models the real world entities and relationships this makes the code more intuitive and easier to understand.

### How?

Before coding few important OOP terminologies-

- **Classes**-template/blueprint for creating objects
- **Objects**-instance of a class and contains state and behaviour. State is the data associated with it and behaviour are the methods. For example a dog has name and age as attributes and the diet as the method which is describing the behaviour as what the dog likes eating.

```jsx
class Animal{

    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    diet(food){
        console.log(`${this.name} likes eating ${food}`);
    }
}

 const dog=new Animal("Tomy", 2);
 dog.diet("chicken")

 const cat=new Animal("Celine", 3)
 cat.diet("catfood")
```

- **constructor**-We pass values to the constructor for any internal state that we want to initialize in the new instance.

Now dog and cat can have their own unique behaviour like making a sound but some animals might not make a sound. In that case what should we do?

We delve into one of the pillars of OOP and that is inheritance.

### Pillars of OOP

- **Inheritance**-This pillar is about selfless parents and selfish children which basically means children can acquire all state and behaviour from parent but vice versa is not true.

So we will create a class dog but dog has the same attributes and behaviour of parent Animal but can have its own specific attributes and behaviour too.

```jsx
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
```

Thus the dog and animal are connected through the “extends” keyword. And the super keyword basically connects to the constructor of the parent.

- **Polymorphism-** Simple meaning of this pillar means many forms. Say we want a different implementation of diet method in dog. So parent class animal and child class dog has same method but different implementation. so here we can introduce the term “method overidding” which is basically the dog has overidden the parent’s diet method and has its own implementation now.

```jsx
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
```