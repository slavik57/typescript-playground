// Video for this file:
// https://youtu.be/tJQrhWfW6WI
var isDog = true;
var dogAge = 5;
var dogName = 'Doggy';
var dogNames = ['Rulf', 'Buch'];
var dogAges = [4, 6, 2.1];
var someUnknownThing = 'string';
var someThingsArray = [4, 'some thing', true];
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
var error = ErrorCode.WRONG_INPUT;
function getNameAndAge() {
    return ['Slava', 27];
}
var tuple = getNameAndAge();
var firstItem = tuple[0];
var secondItem = tuple[1];
