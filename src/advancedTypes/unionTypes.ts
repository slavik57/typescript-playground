// The video for this file
// https://youtu.be/IpP6xbkojy4

export class Cat {
  constructor(public name: string, public numberOfLives: number) { }
  public eat(): void {
  }
}
export class Dog {
  constructor(public name: string, public isBarkingOnNeighbors: boolean) { }
  public eat(): void {
  }
}
export class Person {
  constructor(public name: string, age: number) { }
  public eat(): void {
  }
}

function rename(thing: Cat | Dog | Person, newName: string): void {
  thing.name = newName;
}

rename(new Cat('Fluffy', 9), 'Mitzy');
rename(new Dog('Spark', true), 'Speedy');
rename(new Person('Ben', 18), 'John');

function printDate(date: string | number | Date): void {
  // Prints the date...
}

printDate(new Date());
printDate('13/05/2017');
printDate(321654321);