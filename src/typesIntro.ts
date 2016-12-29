let isDog:boolean = true;
let dogAge:number = 5;
let dogName: string = 'Doggy';

let dogNames: string[] = ['Rulf', 'Buch'];
let dogAges: number[] = [4, 6, 2.1];

let someUnknownThing: any = 'string';
let someThingsArray: any[] =
    [4, 'some thing', true];

function doStuff(): void {
    console.log('doing stuff');
    return;
}

doStuff();

function throwError(message: string): never {
    throw new Error(message);
}

enum ErrorCode {
    OUT_OF_MEMORY = 123,
    WRONG_INPUT = 234
}

let error = ErrorCode.WRONG_INPUT;

function getNameAndAge(): [string, number] {
    return ['Slava', 27];
}

let tuple: [string, number] = getNameAndAge();

let firstItem = tuple[0];
let secondItem: number = tuple[1];

