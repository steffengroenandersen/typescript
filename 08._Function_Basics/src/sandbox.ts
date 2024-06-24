// let greet = () => {
//   console.log("Hello world!");
// };

// greet = "Hello world!"

let greet: Function;

greet = () => {
  console.log("Hello world!");
};

// const add = (a: number, b: number, c?: number | string) => {
//   return a + b;
// };

const add = (a: number, b: number, c: number | string = "10") => {
  return a + b;
};

let result: number = add(10, 19); // Overkill explicit declaration
console.log(result);

const substract = (a: number, b: number): number => { // Overkill return value explicit decleration
  return a - b;
};

const result1 = substract(10, 7);
console.log(result1);
