declare const list: string[];
declare const set: any;
declare let obj: {
    x: number;
    y: number;
    [Symbol.iterator]: () => IterableIterator<number>;
};
