// Video for this file:
// https://youtu.be/-KvLjwtWdWI
function getError(message, user) {
    return 'Error ' + message +
        ', requesting user:' + user;
}
var errorToLog = getError('someError', 'someUser');
console.log(errorToLog);
var getErrorFunc = getError;
console.log(getErrorFunc('1', '2'));
var getErrorFunction = getError;
console.log(getErrorFunction('message1', 'user1'));
function getErrorOptionalUser(message, user) {
    if (user) {
        return 'Optional error ' + message +
            ' user:' + user;
    }
    else {
        return 'Optional only error ' + message;
    }
}
console.log(getErrorOptionalUser('err1'));
console.log(getErrorOptionalUser('err1', 'user2'));
function getErrorDefaultUser(message, user) {
    if (user === void 0) { user = 'unknown'; }
    return 'Default error ' + message +
        ' user:' + user;
}
console.log(getErrorDefaultUser('err1'));
console.log(getErrorDefaultUser('err1', 'user2'));
function logErrors(error) {
    var restErrors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restErrors[_i - 1] = arguments[_i];
    }
    var allErrors = [error].concat(restErrors);
    console.log(allErrors.join('|'));
}
logErrors('error1');
logErrors('error2', 'error3');
logErrors('error4', 'error5', 'error6');
function logPoint(param1, param2) {
    if (typeof param1 == 'object') {
        logPointXY(param1.x, param1.y);
    }
    else {
        logPointXY(param1, param2);
    }
}
function logPointXY(x, y) {
    console.log("[" + x + ", " + y + "]");
}
logPoint(1, 2);
logPoint({ x: 3, y: 4 });
function showMessageToUser(_a) {
    var width = _a.width, height = _a.height;
    console.log(width * height);
}
showMessageToUser({
    font: 'asdasd',
    fontSize: 121234,
    width: 4,
    height: 6
});