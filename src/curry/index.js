//------------------------------------------ Currying Function ------------------------------------------ \\
console.log("--------------- Curry () ---------------");

const buildSandwich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `ingredients my sandwich: ${ingredient1}, ${ingredient2}, ${ingredient3}`;
    };
  };
};

const mySandwich = buildSandwich("Bacon")("Lettuce")("Tomato");
console.log(mySandwich);

//Refactor code ↑ ↓

const buildHamburguer = (ingred1) => (ingred2) => (ingred3) =>
  `ingredients my hamburger: ${ingred1}, ${ingred2}, ${ingred3}`;

const myHamburguer = buildHamburguer("beaf")("tomato")("ketchup");
console.log(myHamburguer);

console.log("--------------- Curried Function ---------------");

const multiply = (x, y) => x * y;
const curriedMultiply = (x) => (y) => x * y;

console.log(multiply(2, 3));
console.log(curriedMultiply(2));
console.log(curriedMultiply(2)(3));

// Partially applied functions
const timesTen = curriedMultiply(10);
console.log(timesTen);
console.log(timesTen(8));

const updateElement = (id) => (content) =>
  (document.querySelectorw(`#${id}`).textContent = content);
const updateHeaderText = updateElemText("header");
updateHeaderText("Hello Leonardo!");

//Allows calling small functions in a specific order
const addCustomer = fn => (...args) => {
    console.log("saving customer info...");
    return fn(...args);
  };

const processOrder = fn => (...args) => {
    console.log(`processing order #${args[0]}`);
    return fn(...args);
  };

let completeOrder = (...args) => {
  console.log(`Order #${[...args].toString()} completed.`);
};

completeOrder = processOrder(completeOrder);
console.log(completeOrder);
completeOrder = addCustomer(completeOrder);
completeOrder("1000");

function addCustomer(...args) {
    return function processOrder(...args){
        return function completeOrder(...args){
            //end
        }
    }
}

const curry = (fn) => {
    return curried = (...args) => {
        if(fn.length !== args.length) {
            return curried.bind(null, ...args); //bind create new function
        }
        return fn(...args);
    };
}

const total = (x, y, z) => x+y+z;

const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));