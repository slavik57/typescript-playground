declare function getError(message: string, user: string): string;
declare let errorToLog: string;
declare let getErrorFunc: (message: string, user: string) => string;
interface GetErrorFunction {
    (msg: string, usr: string): string;
}
declare let getErrorFunction: GetErrorFunction;
declare function getErrorOptionalUser(message: string, user?: string): string;
declare function getErrorDefaultUser(message: string, user?: string): string;
declare function logErrors(error: string, ...restErrors: string[]): void;
interface Point {
    x: number;
    y: number;
}
declare function logPoint(x: number, y: number): void;
declare function logPoint(point: Point): void;
declare function logPointXY(x: number, y: number): void;
interface UserMessageConfiguration {
    font: string;
    fontSize: number;
    width: number;
    height: number;
}
declare function showMessageToUser({width, height}: UserMessageConfiguration): void;
