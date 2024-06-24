"use strict";
// let greet = () => {
//   console.log("Hello world!");
// };
// greet = "Hello world!"
let greet;
greet = () => {
    console.log("Hello world!");
};
// const add = (a: number, b: number, c?: number | string) => {
//   return a + b;
// };
const add = (a, b, c = "10") => {
    return a + b;
};
let result = add(10, 19); // Overkill explicit declaration
console.log(result);
const substract = (a, b) => {
    return a - b;
};
const result1 = substract(10, 7);
console.log(result1);
