// The video for this file:
// https://youtu.be/Nwf76XryCG4
const list = ['one', 'two', 'three'];
for (let l in list) {
    console.log(l);
}
for (let l of list) {
    console.log(l);
}
const set = new Set(list);
set.some = 'thing';
for (let l in set) {
    console.log(l);
}
Object.defineProperty;
for (let l of set) {
    console.log(l);
}
let obj = {
    x: 1,
    y: 2,
    [Symbol.iterator]: function* () {
        for (let i = 10; i < 15; i++) {
            yield i;
        }
    }
};
for (let o in obj) {
    console.log(o);
}
for (let o of obj) {
    console.log(o);
}
