let age: any;

age = 25;
console.log(age);

age = true;
console.log(age);

age = "hello";
console.log(age);

age = { name: "Mario" };
console.log(age);

let mixed: any[] = [];
mixed.push(5);
mixed.push("mario");
mixed.push(false);
console.log(mixed);

let ninja: { name: any; age: any };

ninja = { name: "yoshi", age: 25 };
console.log(ninja);

ninja = { name: 33, age: "yoshi" };
console.log(ninja);
