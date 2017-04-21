interface IAnimal {
    readonly numberOfLegs: number;
    makeSound(): void;
    eatFood(food: string): void;
}
declare function testAnimal(animal: IAnimal): void;
declare abstract class Animal implements IAnimal {
    numberOfLegs: number;
    constructor(numberOfLegs: number);
    abstract makeSound(): void;
    eatFood(food: string): void;
}
declare class Dog extends Animal {
    constructor();
    makeSound(): void;
    eatFood(food: string): void;
}
