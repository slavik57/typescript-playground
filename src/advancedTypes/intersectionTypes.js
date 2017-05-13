// The video for this file:
// https://youtu.be/IpP6xbkojy4
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Cat = (function () {
    function Cat(name, numberOfLives) {
        this.name = name;
        this.numberOfLives = numberOfLives;
    }
    return Cat;
}());
exports.Cat = Cat;
var Dog = (function () {
    function Dog(name, isBarkingOnNeighbors) {
        this.name = name;
        this.isBarkingOnNeighbors = isBarkingOnNeighbors;
    }
    return Dog;
}());
exports.Dog = Dog;
function compose(obj1, obj2) {
    return _.assignIn({}, obj1, obj2);
}
var monster = compose(new Cat('Mitzy', 9), new Dog('Sparky', false));
monster.name = 'Sparky Mitzy';
monster.numberOfLives = 100;
monster.isBarkingOnNeighbors = true;
function destroyIfTooLong(obj) {
    if (obj.length > 1000) {
        obj.destroy();
    }
}
