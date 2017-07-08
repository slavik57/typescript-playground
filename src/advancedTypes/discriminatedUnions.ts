// The video for this file:
// https://youtu.be/IYyWy6trCyY

export interface Cat {
  kind: 'cat';
  numberOfLives: number;
}
export interface Dog {
  kind: 'dog';
  isBarkingOnStrangers: boolean;
}
export interface Cow {
  kind:'cow';
  drinks: string;
}
type Animal = Cat | Dog | Cow;

function assertNever(o: never): never {
  throw new Error('Was called with an object ' + o);
}

function tellAFact(animal: Animal): string {
  switch(animal.kind) {
    case 'cat':
      return `The cat has ${animal.numberOfLives} lives left`;
    case 'dog':
      const isBarking = animal.isBarkingOnStrangers ? '' : 'not '
      return `The dog does ` + isBarking + 'bark on strangers';
    case 'cow':
      return `The cow drinks ${animal.drinks}`;
    default:
      return assertNever(animal);
  }
}
console.log(tellAFact({kind:'dog',isBarkingOnStrangers:false}));
console.log(tellAFact({kind:'cat',numberOfLives:9}));
console.log(tellAFact({kind:'cow', drinks:'water'}));
