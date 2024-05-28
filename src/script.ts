/*
const person: { [key: string]: string | number } = {
  name: "John",
  age: 44,
};

person.name = "Steven";
person.lastName = "Smith";
*/

/*
const sum = (a: number, b: number, c?: number): number => {
  return c ? a + b + c : a + b;
};

console.log(sum(1, 2));
console.log(sum(1, 2, 2));

function sayHello(): void {
  console.log("Hello");
}
*/

/*
//Type Casting

const link = document.getElementById("link") as HTMLAnchorElement;

console.log(link.href);

*/

interface calcArea {
  getArea: () => number;
}

class Circle implements calcArea {
  private pi = 3.14;

  readonly color = "red";

  constructor(public radius: number) {}

  getArea() {
    return this.pi * this.radius * this.radius;
  }
}

const myCircle = new Circle(3);

console.log(myCircle.color);

interface Person {
  name: string;
  lastName: string;
  age: number;
  canDrive?: boolean;
  dayWhenBorn: DaysOfTheWorkingWeek;
}

enum DaysOfTheWorkingWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

enum Colors {
  primary = "green",
  secondary = "blue",
  danger = "darkred",
}

const person1: Person = {
  name: "John",
  lastName: "Smith",
  age: 44,
  dayWhenBorn: DaysOfTheWorkingWeek.Monday,
};

const button = {
  shape: "round",
  text: "STOP",
  color: Colors.danger,
};
