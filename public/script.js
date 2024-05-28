"use strict";
/*
const person: { [key: string]: string | number } = {
  name: "John",
  age: 44,
};

person.name = "Steven";
person.lastName = "Smith";
*/
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.pi = 3.14;
        this.color = "red";
    }
    getArea() {
        return this.pi * this.radius * this.radius;
    }
}
const myCircle = new Circle(3);
console.log(myCircle.color);
var DaysOfTheWorkingWeek;
(function (DaysOfTheWorkingWeek) {
    DaysOfTheWorkingWeek[DaysOfTheWorkingWeek["Monday"] = 0] = "Monday";
    DaysOfTheWorkingWeek[DaysOfTheWorkingWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfTheWorkingWeek[DaysOfTheWorkingWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfTheWorkingWeek[DaysOfTheWorkingWeek["Thursday"] = 3] = "Thursday";
    DaysOfTheWorkingWeek[DaysOfTheWorkingWeek["Friday"] = 4] = "Friday";
})(DaysOfTheWorkingWeek || (DaysOfTheWorkingWeek = {}));
var Colors;
(function (Colors) {
    Colors["primary"] = "green";
    Colors["secondary"] = "blue";
    Colors["danger"] = "darkred";
})(Colors || (Colors = {}));
const person1 = {
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
