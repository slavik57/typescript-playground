// The video for this file:
// https://youtu.be/PZOPSzLqW3M
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPropertyValue(obj, propertyName) {
    return obj[propertyName];
}
var cat = null;
var catAge = getPropertyValue(cat, 'age');
var catName = getPropertyValue(cat, 'name');
var catSound = getPropertyValue(cat, 'sound');
function getProperties(obj, names) {
    return names.map(function (name) { return obj[name]; });
}
var catAgeAndName = getProperties(cat, ['age', 'name']);
