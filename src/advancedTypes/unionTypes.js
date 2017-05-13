// The video for this file
// https://youtu.be/IpP6xbkojy4
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cat = (function () {
    function Cat(name, numberOfLives) {
        this.name = name;
        this.numberOfLives = numberOfLives;
    }
    Cat.prototype.eat = function () {
    };
    return Cat;
}());
exports.Cat = Cat;
var Dog = (function () {
    function Dog(name, isBarkingOnNeighbors) {
        this.name = name;
        this.isBarkingOnNeighbors = isBarkingOnNeighbors;
    }
    Dog.prototype.eat = function () {
    };
    return Dog;
}());
exports.Dog = Dog;
var Person = (function () {
    function Person(name, age) {
        this.name = name;
    }
    Person.prototype.eat = function () {
    };
    return Person;
}());
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
