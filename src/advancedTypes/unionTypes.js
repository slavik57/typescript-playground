// The video for this file
// https://youtu.be/IpP6xbkojy4
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cat {
    constructor(name, numberOfLives) {
        this.name = name;
        this.numberOfLives = numberOfLives;
    }
    eat() {
    }
}
exports.Cat = Cat;
class Dog {
    constructor(name, isBarkingOnNeighbors) {
        this.name = name;
        this.isBarkingOnNeighbors = isBarkingOnNeighbors;
    }
    eat() {
    }
}
exports.Dog = Dog;
class Person {
    constructor(name, age) {
        this.name = name;
    }
    eat() {
    }
}
exports.Person = Person;
function rename(thing, newName) {
    thing.name = newName;
}
rename(new Cat('Fluffy', 9), 'Mitzy');
rename(new Dog('Spark', true), 'Speedy');
rename(new Person('Ben', 18), 'John');
function printDate(date) {
    // Prints the date...
}
printDate(new Date());
printDate('13/05/2017');
printDate(321654321);
