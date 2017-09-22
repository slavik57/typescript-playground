// The video for this file:
// https://youtu.be/zYTWAqwCoR4
function* iAmAGenerator() {
    for (let i = 0; i < 3; i++) {
        try {
            const inside = yield i;
            console.log(`inside ${i}`, inside);
        }
        catch (e) {
            console.log(`error ${i}`, e);
        }
    }
}
const iterator = iAmAGenerator();
console.log(iterator.next(11));
console.log(iterator.throw('some error'));
console.log(iterator.next(12));
console.log(iterator.return(111));
console.log(iterator.next(13));
console.log(iterator.next(14));
