// The video for this file:
// https://youtu.be/t_VGUAGgJWw
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let dogName = 'Spotty';
function changeDogName(newName) {
    dogName = newName;
}
exports.changeDogName = changeDogName;
function logDogName() {
    console.log('dogModuleA', dogName);
}
exports.logDogName = logDogName;
