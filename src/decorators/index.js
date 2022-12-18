//------------------------------------------ Decorator Functions ------------------------------------------ \\
console.log("Decorator Functions");

let sum = (...args) => {
  return [...args].reduce((acc, num) => acc + num);
};

const callCounter = (fn) => {
  let count = 0;

  return (...args) => {
    console.log(`sum has been called ${(count += 1)} times`);
    return fn(...args);
  };
};

sum = callCounter(sum);

console.log(sum(2, 3, 5));
console.log(sum(1, 5));
console.log(sum(14, 5));

console.log("Multiple Decorators Functions");

let rectangleArea = (length, width) => {
  return length * width;
};

const countParams = (fn) => {
  return (...params) => {
    if (params.length !== fn.length) {
      throw new Error(`Incorret number of parameters for ${fn.name}`);
    }
    return fn(...params);
  };
};

const requireIntegers = (fn) => {
  return (...params) => {
    params.forEach((param) => {
      if (!Number.isInteger(param)) {
        throw new TypeError(`Params for ${fn.name} must be Integers`);
      }
    });
    return fn(...params);
  };
};

rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);
console.log(rectangleArea(20, 30));

//------------------------------------------ Decorator Await Async ------------------------------------------ \\
console.log("Async Await Decoration");

const API_EXAMPLES = `https://randomuser.me/api/?results=5`;

let requestData = async (api) => {
  try {
    const response = await fetch(api);
    const {results}  = await response.json();
    return results;
  } catch (error) {
    console.error(error);
  }
};

const dataResponseTime = (fn) => {
  return async (url) => {
    console.time('time request ');
    const data = await fn(url);
    console.timeEnd('fn');
    return data;
  };
};


const myTestFunction = async () => {
    requestData = dataResponseTime(requestData);
    const data = await requestData(API_EXAMPLES);
    console.log(data)
}

myTestFunction();

