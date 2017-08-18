// The video for this file:
// https://youtu.be/PZOPSzLqW3M
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPropertyValue(obj, propertyName) {
    return obj[propertyName];
}
const cat = null;
const catAge = getPropertyValue(cat, 'age');
const catName = getPropertyValue(cat, 'name');
const catSound = getPropertyValue(cat, 'sound');
function getProperties(obj, names) {
    return names.map(name => obj[name]);
}
const catAgeAndName = getProperties(cat, ['age', 'name']);
