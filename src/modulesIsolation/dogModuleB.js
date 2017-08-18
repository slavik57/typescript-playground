// The video for this file:
// https://youtu.be/t_VGUAGgJWw
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let dogName = 'Coco';
function changeDogName(newName) {
    dogName = newName;
}
exports.changeDogName = changeDogName;
function logDogName() {
    console.log('dogModuleB', dogName);
}
exports.logDogName = logDogName;
