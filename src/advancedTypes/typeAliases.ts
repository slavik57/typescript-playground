// The video for this file:
// https://youtu.be/qu9EZvo50l0

type Age = number;
type AgeProvider = () => Age;
type AgeSource = Age | AgeProvider;

function toAge(ageSource: AgeSource): Age {
  if (typeof ageSource === 'number') {
    return ageSource;
  }

  return ageSource();
}
const age = toAge(1);

export type Node<T> = { data: T; next: Node<T> };
export type DataNode<T> = T & { next: DataNode<T> };

interface Cat { age: Age };
const node1: Node<Cat> = null;
node1.data.age;
node1.next.data.age;
const node2: DataNode<Cat> = null;
node2.age;
node2.next.age;