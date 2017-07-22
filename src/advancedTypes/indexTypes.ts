// The video for this file:
// https://youtu.be/PZOPSzLqW3M

export interface Cat {
  name: string;
  age: number;
  sound: string;
  feed(food: string): string;
}

// keyof operator
type CatKey = keyof Cat;

// T[K] access operator
type ageType = Cat['age'];
type feedType = Cat['feed'];

function getPropertyValue<T, K extends keyof T>(obj: T, propertyName: K): T[K] {
  return obj[propertyName];
}

const cat: Cat = null;
const catAge = getPropertyValue(cat, 'age');
const catName = getPropertyValue(cat, 'name');
const catSound = getPropertyValue(cat, 'sound');

function getProperties<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
  return names.map(name => obj[name]);
}

const catAgeAndName = getProperties(cat, ['age', 'name']);
