// explicit types
var character;
var age;
var isLoggedIn;
// age = luigi;
age = 33;
isLoggedIn = true;
// arrays
var ninjas = [];
//ninjas = ["yoshi", "mario"]
ninjas.push("yoshi");
// ninjas.push(2);
// union types
var mixed = [];
mixed.push("mario");
mixed.push(33);
mixed.push(true);
console.log(mixed);
var uid;
uid = 123;
uid = "Steffen";
// uid = true;
// objects
var ninjaOne;
ninjaOne = { name: "yoshi", age: 33 };
// ninjaOne = [];
var ninjaTwo;
ninjaTwo = { name: "mario", age: 33, beltColour: "black" };
