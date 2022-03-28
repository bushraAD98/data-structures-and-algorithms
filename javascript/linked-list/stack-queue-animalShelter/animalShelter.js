'use strict';
const Queue = require('../queue');

class  AnimalShelter {

    constructor(){
        this.name = name;
        this.queue = new Queue();
    }


enqueue(animal){

    if(typeof animal == "object") {

        this.queue.enqueue(animal);
    }
    else return null ;


}

dequeue(pref){

    if(this.queue.peak().name == pref){
        let animalName = this.queue.peak();
        this.queue.dequeue();
        return animalName;
    }
    else return null;
}

}


class Dog extends AnimalShelter {
    constructor(name) {
        super();
        this.name = name;
    }

}

class Cat extends AnimalShelter {
    constructor(name) {
        super();
        this.name = name;
    }
}


module.exports = { AnimalShelter, Cat, Dog }