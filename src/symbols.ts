// The video for this file:
// https://youtu.be/v9P5R5APxuU

const sym1 = Symbol(1);
const sym2 = Symbol(1);
const sym3 = Symbol('I am a symbol');
const sym4 = Symbol('I am a symbol');

console.log(sym1 === sym2);
console.log(sym3 === sym4);

const propSymb = Symbol();
const funcSymb = Symbol();

export class SomeClass {
  constructor(){
    this[propSymb] = 123;
  }
  [funcSymb](): string {
    return 'I am a function value';
  }
}

const someObj = new SomeClass();
console.log(someObj[propSymb]);
console.log(someObj[funcSymb]());

console.log(SomeClass[Symbol.hasInstance](someObj))

const angularThing = {};
angularThing['$$somePrivateAngularProp'] = {};
angularThing['$somePublicAngularProp'] = {};
angularThing[propSymb] = {};
console.log(Object.keys(angularThing))