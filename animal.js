const animalOne={
    name:"Tommy",
    age:2,
    type:"Dog",
    diet:function(food){
        console.log(`${this.name} likes eating ${food}`)

    }
}

animalOne.diet("chicken")