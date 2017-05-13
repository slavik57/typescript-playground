// The video for this file:
// https://youtu.be/IpP6xbkojy4

import * as _ from 'lodash';

export class Cat {
  constructor(public name: string, public numberOfLives: number) { }
}
export class Dog {
  constructor(public name: string, public isBarkingOnNeighbors: boolean) { }
}

function compose<T, U>(obj1: T, obj2: U): T & U {
  return _.assignIn({}, obj1, obj2);
}

const monster = compose(new Cat('Mitzy', 9), new Dog('Sparky', false));
monster.name = 'Sparky Mitzy';
monster.numberOfLives = 100;
monster.isBarkingOnNeighbors = true;

interface Destroyable {
  destroy(): void;
}

interface Lengthable {
  readonly length;
}

function destroyIfTooLong(obj: Lengthable & Destroyable): void {
  if (obj.length > 1000) {
    obj.destroy();
  }
}