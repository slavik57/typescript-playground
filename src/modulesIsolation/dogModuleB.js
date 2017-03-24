"use strict";
var dogName = 'Coco';
function changeDogName(newName) {
    dogName = newName;
}
exports.changeDogName = changeDogName;
function logDogName() {
    console.log('dogModuleB', dogName);
}
exports.logDogName = logDogName;
