class Animal {
    constructor(name){
        this.name = name;
        this.legs = 4;
        this.tail = true;
        console.log('inside constructor');    
    }

    sayName(){
        console.log(`hello ${this.tail}`);
    }
}

class Dog extends Animal {
    constructor(){
        super('dog');
    }
    bark(){
        console.log('woff');        
    }
}

const dog = new Dog();
const cat = new Animal('cat');

dog.bark();
dog.sayName();
console.log(dog.name);