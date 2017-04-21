declare let isDog: boolean;
declare let dogAge: number;
declare let dogName: string;
declare let dogNames: string[];
declare let dogAges: number[];
declare let someUnknownThing: any;
declare let someThingsArray: any[];
declare function doStuff(): void;
declare function throwError(message: string): never;
declare enum ErrorCode {
    OUT_OF_MEMORY = 123,
    WRONG_INPUT = 234,
}
declare let error: ErrorCode;
declare function getNameAndAge(): [string, number];
declare let tuple: [string, number];
declare let firstItem: string;
declare let secondItem: number;
