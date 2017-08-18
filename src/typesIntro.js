// Video for this file:
// https://youtu.be/tJQrhWfW6WI
let isDog = true;
let dogAge = 5;
let dogName = 'Doggy';
let dogNames = ['Rulf', 'Buch'];
let dogAges = [4, 6, 2.1];
let someUnknownThing = 'string';
let someThingsArray = [4, 'some thing', true];
function doStuff() {
    console.log('doing stuff');
    return;
}
doStuff();
function throwError(message) {
    throw new Error(message);
}
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["OUT_OF_MEMORY"] = 123] = "OUT_OF_MEMORY";
    ErrorCode[ErrorCode["WRONG_INPUT"] = 234] = "WRONG_INPUT";
})(ErrorCode || (ErrorCode = {}));
let error = ErrorCode.WRONG_INPUT;
function getNameAndAge() {
    return ['Slava', 27];
}
let tuple = getNameAndAge();
let firstItem = tuple[0];
let secondItem = tuple[1];
