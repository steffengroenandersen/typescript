type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has uid of ${uid}`);
};

const greet = (user: { name: string; uid: StringOrNum }) => {
  console.log(`${user.name} says hello`);
};

// With type aliases
const greetAgain = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
