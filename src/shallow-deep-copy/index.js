//------------------------------------------ Shallow Copy and Deep Copy ------------------------------------------ \\
console.log("--- Shallow Copy and Deep Copy ---");

//Value vs Reference
//Primitives pass values:

let x = 2;
let y = x;
y += 1;
console.log(x);
console.log(y);

// Structural types use references:

let xArray = [1, 2, 3];
let yArray = xArray;
yArray.push(4);
console.log(xArray);
console.log(yArray);

// Mutable vs Immutable
let myName = "Leonardo";
myName[0] = "W";
console.log(myName);

// Reassigment is not the same as mutable
myName = "Leo";
console.log(myName);

// Structures contain mutable data
yArray[0] = 9;
console.log(yArray);
console.log(xArray);

// Pure Functions require you to avoid
// Mutating the original data

// Impure function that mutates the data
console.log("-- IMPURE FUNCTIONS --");

const addToScoreHistory = (array, score) => {
  array.push(score);
  return array;
};

const scoreArray = [44, 23, 12];
console.log(addToScoreHistory(scoreArray, 14));

// This mutates the original array.
// This is considered to be a side-effect.

// Shallow Copy
console.log("-- SHALLOW COPY --");
const zArray = [...yArray, 10];
console.log(zArray);
console.log(yArray);
console.log(zArray === yArray);
console.log(xArray === yArray);

//With Object.assign()

console.log("-- OBJECT ASSIGN --");
const tArray = Object.assign([], zArray);
console.log(tArray);
console.log(tArray === zArray);
tArray.push(11);
console.log(yArray);
console.log(tArray);

yArray.push([8, 9, 10]);
const vArray = [...yArray];
console.log(vArray);
vArray[4].push(5);
console.log(vArray);

// nested structural data types still share a referentce !

//Array.from() and slice() create shallow copies
console.log("-- OBJECT FREEZE --");

const scoreObj = {
  first: 44,
  second: 12,
  third: { a: 1, b: 2 },
};
Object.freeze(scoreObj);
scoreObj.third.a = 8;
console.log(scoreObj);

const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(newScoreObj);
console.log(newScoreObj === scoreObj);

console.log("--DEEP CLONE--");
const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  //create an array or object to hold the values
  const newObject = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    const value = obj[key];
    // recursive call for nested objects & arrays
    newObject[key] = deepClone(value);
  }
  return newObject;
};

const newScoreArray = deepClone(scoreArray);
console.log(newScoreArray);
console.log(newScoreArray === scoreArray);

const myScoreObj = deepClone(scoreObj);
console.log(myScoreObj);
console.log(myScoreObj === scoreObj);

console.log("--PURE FUNCTION CLONE--");

const pureAddToScoreHistory = (array, score, cloneFunc) => {
  const newArray = cloneFunc(array);
  newArray.push(score);
  return newArray;
};

const pureScoreHistory = pureAddToScoreHistory(scoreArray, 18, deepClone);
console.log(pureScoreHistory);
console.log(scoreArray);
