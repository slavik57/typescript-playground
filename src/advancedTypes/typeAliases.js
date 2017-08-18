// The video for this file:
// https://youtu.be/qu9EZvo50l0
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toAge(ageSource) {
    if (typeof ageSource === 'number') {
        return ageSource;
    }
    return ageSource();
}
const age = toAge(1);
;
const node1 = null;
node1.data.age;
node1.next.data.age;
const node2 = null;
node2.age;
node2.next.age;
