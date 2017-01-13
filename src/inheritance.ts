interface IAnimal {
    readonly numberOfLegs: number;
    makeSound(): void;
    eatFood(food: string): void;
}

function testAnimal(animal: IAnimal): void {
    console.log('Number of legs:', animal.numberOfLegs);
    animal.makeSound();
    animal.eatFood('milk');
    animal.eatFood('meat');
}

abstract class Animal implements IAnimal {
    constructor(public numberOfLegs: number) {
    }

    abstract makeSound(): void;

    eatFood(food: string): void {
        console.log('Num num num ' + food);
    }
}

class Dog extends Animal {
    constructor(){
        super(4);
    }

    makeSound(): void {
        console.log('Wooof');
    }

    eatFood(food: string): void {
        if (food !== 'meat') {
            console.log('YUK!');
            return;
        }

        super.eatFood(food);
    }
}

testAnimal(new Dog());