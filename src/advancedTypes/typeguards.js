// The video for this file:
// https://youtu.be/S4ewVsq8JV0
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logError(error) {
    if (typeof error === 'string') {
        console.log(error);
    }
    else {
        console.log(error.message);
    }
}
var Rectangle = (function () {
    function Rectangle(topLeft, width, height) {
        this.topLeft = topLeft;
        this.width = width;
        this.height = height;
    }
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var Circle = (function () {
    function Circle(center, radius) {
        this.center = center;
        this.radius = radius;
    }
    return Circle;
}());
exports.Circle = Circle;
function getArea(geometry) {
    if (geometry instanceof Circle) {
        return Math.PI * Math.pow(geometry.radius, 2);
    }
    else {
        return geometry.height * geometry.width;
    }
}
function isPoint(geometry) {
    return typeof geometry.x === 'number' && typeof geometry.y === 'number';
}
function logCenter(geometry) {
    if (isPoint(geometry)) {
        console.log(geometry.x, geometry.y);
    }
    else if (geometry instanceof Rectangle) {
        console.log(geometry.topLeft.x + geometry.width / 2, geometry.topLeft.y + geometry.height / 2);
    }
    else {
        console.log(geometry.center);
    }
}
