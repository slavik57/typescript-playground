export interface Cat {
    name: string;
    age: number;
    sound: string;
    feed(food: string): string;
}
