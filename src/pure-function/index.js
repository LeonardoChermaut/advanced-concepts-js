// ---------------- PURE FUNCTIONS ---------------- //
const add = (x, y) => x + y;
console.log(add(7, 7));

const fullName = (first, last) => `${first} ${last}`;
console.log(fullName("Leonardo", "Chermaut"));

// A pure function should have at least one parameter.

//Otherwise, it is the same as constant because they can only work with their input
const z = 7;
const sum = (x, y) => x + y + z;

console.log(sum(2, 2));

// Pure functions cannot: Access a database API, file system, storage etc.
//Modify the DROM or even log to the console

//That said, clearly "impure" funcstion are necessary, but they are harder to test and debug

//Further, no input state can be modified, that is, no data should be "mutated". Consider all input data to be immutable

// Impure Example 1:
let x = 1;
const increment = () => (x += 1);
console.log(increment());
console.log(x);

// Impure Example 2:
const myArray = [1, 2, 3];
const addToArray = (array, data) => {
  array.push(data);
  return array;
};

console.log(addToArray(myArray, 4));
console.log(myArray);

// Refactor example 1:
const pureIncrement = (num) => (num += 1);
console.log(pureIncrement(x));
console.log(x);

// Refactor example 2:
const pureAddToArray = (arr, data) => [...arr, data];
console.log(pureAddToArray(myArray, 5));
console.log(myArray);

const oneToFive = [1, 2, 3, 4, 5];
const addToFive = oneToFive.filter((elem) => elem % 2 !== 0);
console.log(addToFive);

const doubled = oneToFive.map((elem) => elem * 2);
console.log(doubled);

const summed = oneToFive.reduce((acc, elem) => acc + elem);
console.log(summed);
