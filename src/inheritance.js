// The video for this file:
// https://youtu.be/aK0_-TLkSvc
function testAnimal(animal) {
    console.log('Number of legs:', animal.numberOfLegs);
    animal.makeSound();
    animal.eatFood('milk');
    animal.eatFood('meat');
}
class Animal {
    constructor(numberOfLegs) {
        this.numberOfLegs = numberOfLegs;
    }
    eatFood(food) {
        console.log('Num num num ' + food);
    }
}
class Dog extends Animal {
    constructor() {
        super(4);
    }
    makeSound() {
        console.log('Wooof');
    }
    eatFood(food) {
        if (food !== 'meat') {
            console.log('YUK!');
            return;
        }
        super.eatFood(food);
    }
}
testAnimal(new Dog());
