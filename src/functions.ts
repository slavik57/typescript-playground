// Video for this file:
// https://youtu.be/-KvLjwtWdWI

function getError(
    message: string,
    user: string): string {
    return 'Error ' + message +
        ', requesting user:' + user;
}

let errorToLog =
    getError('someError', 'someUser');

console.log(errorToLog);

let getErrorFunc: (message: string, user: string) => string 
    = getError;

console.log(getErrorFunc('1', '2'));

interface GetErrorFunction {
    (msg: string, usr: string): string;
}

let getErrorFunction: GetErrorFunction = getError;

console.log(getErrorFunction('message1', 'user1'));

function getErrorOptionalUser(
    message: string,
    user?: string
): string {
    if (user) {
        return 'Optional error ' + message+ 
            ' user:' + user;
    } else {
        return 'Optional only error ' + message
    }
}

console.log(getErrorOptionalUser('err1'));
console.log(getErrorOptionalUser('err1', 'user2'));

function getErrorDefaultUser(
    message: string,
    user: string = 'unknown'
): string {
        return 'Default error ' + message+ 
            ' user:' + user;
}

console.log(getErrorDefaultUser('err1'));
console.log(getErrorDefaultUser('err1', 'user2'));

function logErrors(error:string, ...restErrors: string[]): void {
    let allErrors = [error, ...restErrors];
    console.log(allErrors.join('|'));
}

logErrors('error1');
logErrors('error2', 'error3');
logErrors('error4', 'error5', 'error6');

interface Point {
    x: number;
    y: number;
}

function logPoint(x: number, y: number): void;
function logPoint(point: Point): void;
function logPoint(param1: any, param2?: any): void {
    if(typeof param1 == 'object'){
        logPointXY(param1.x, param1.y);
    } else {
        logPointXY(param1, param2);
    }
}

function logPointXY(x: number, y: number): void{
    console.log(`[${x}, ${y}]`);
}

logPoint(1, 2);
logPoint({x:3, y:4});


interface UserMessageConfiguration {
    font: string;
    fontSize: number;
    width: number;
    height: number;
}

function showMessageToUser(
    {width, height}: UserMessageConfiguration
): void {
    console.log(width * height);
}

showMessageToUser({
    font: 'asdasd',
    fontSize: 121234,
    width: 4,
    height: 6
});


