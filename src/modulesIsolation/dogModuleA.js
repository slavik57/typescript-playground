"use strict";
var dogName = 'Spotty';
function changeDogName(newName) {
    dogName = newName;
}
exports.changeDogName = changeDogName;
function logDogName() {
    console.log('dogModuleA', dogName);
}
exports.logDogName = logDogName;
