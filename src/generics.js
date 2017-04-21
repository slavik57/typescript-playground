// The video for this file:
// https://youtu.be/je1YPQNcwOQ
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemsCache = (function () {
    function ItemsCache(itemConstructor) {
        this.itemConstructor = itemConstructor;
        this.itemsCache = {};
    }
    ItemsCache.prototype.createItem = function (id) {
        if (!!this.itemsCache[id]) {
            return this.itemsCache[id];
        }
        var item = new this.itemConstructor(id);
        this.itemsCache[id] = item;
        return item;
    };
    return ItemsCache;
}());
var Person = (function () {
    function Person(id) {
        this.id = id;
    }
    return Person;
}());
function createCache(itemConstructor) {
    return new ItemsCache(itemConstructor);
}
var itemsCache = createCache(Person);
var person1 = itemsCache.createItem("a");
var person2 = itemsCache.createItem("b");
var person3 = itemsCache.createItem("a");
console.log('person1', person1);
console.log('person2', person2);
console.log('person3', person3);
console.log('person1 === person2', person1 === person2);
console.log('person1 === person3', person1 === person3);
