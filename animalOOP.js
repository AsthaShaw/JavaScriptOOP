class Animal{

    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    diet(food){
        console.log(`${this.name} likes eating ${food}`);
    }
}

// const dog=new Animal("Tomy", 2);
// dog.diet("chicken")

// const cat=new Animal("Celine", 3)
// cat.diet("catfood")

module.exports=Animal;
