// The video for this file:
// https://youtu.be/IYyWy6trCyY
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assertNever(o) {
    throw new Error('Was called with an object ' + o);
}
function tellAFact(animal) {
    switch (animal.kind) {
        case 'cat':
            return `The cat has ${animal.numberOfLives} lives left`;
        case 'dog':
            const isBarking = animal.isBarkingOnStrangers ? '' : 'not ';
            return `The dog does ` + isBarking + 'bark on strangers';
        case 'cow':
            return `The cow drinks ${animal.drinks}`;
        default:
            return assertNever(animal);
    }
}
console.log(tellAFact({ kind: 'dog', isBarkingOnStrangers: false }));
console.log(tellAFact({ kind: 'cat', numberOfLives: 9 }));
console.log(tellAFact({ kind: 'cow', drinks: 'water' }));
