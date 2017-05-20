export interface Point {
    x: number;
    y: number;
}
export declare class Rectangle {
    topLeft: Point;
    width: number;
    height: number;
    constructor(topLeft: Point, width: number, height: number);
}
export declare class Circle {
    center: Point;
    radius: number;
    constructor(center: Point, radius: number);
}
