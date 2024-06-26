// let greet: Function;

// Example 1:
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

// Example 2:
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "action") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

// Example 3:
let logDetails: (obj: { name: string; age: number }) => void;

logDetails = (ninja: { name: string; age: number }) => {
  console.log(`${ninja.name} is ${ninja.age} years old.`);
};

// Example 4:
type person = { name: string; age: number };

let logPerson: (obj: person) => void;

logPerson = (person: person) => {
  console.log(`${person.name} is ${person.age} years old.`);
};
