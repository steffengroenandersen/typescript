// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = luigi;
age = 33;

isLoggedIn = true;

// arrays

let ninjas: string[] = [];

//ninjas = ["yoshi", "mario"]
ninjas.push("yoshi");
// ninjas.push(2);

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push("mario");
mixed.push(33);
mixed.push(true);
console.log(mixed);

let uid: string | number;
uid = 123;
uid = "Steffen";
// uid = true;

// objects

let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 33 };
// ninjaOne = [];

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = { name: "mario", age: 33, beltColour: "black" };
