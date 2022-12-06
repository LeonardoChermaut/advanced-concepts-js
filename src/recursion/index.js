//------------------------------------------ Iterator ------------------------------------------ \\
console.log("iterator function");
const countToTen = (num = 1) => {
  while (num <= 10) {
    console.log(num);
    num++;
  }
};

countToTen();
//------------------------------------------ Recursion ------------------------------------------ \\
console.log("recursion function");
const recurToTen = (num = 1) => {
  if (num > 10) return;
  console.log(num);
  num++;
  recurToTen(num);
};

recurToTen();
//------------------------------------------ Fibonacci Sequence whithout Recursion ------------------------------------------ \\

console.log("fibonacci without recursion");
const fibonacci = (num, array = [0, 1]) => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    num -= 1;
  }
  return array;
};

console.log(fibonacci(12));

//------------------------------------------ Fibonacci Sequence with Recursion ------------------------------------------ \\

console.log("fibonacci with recursion");
const fib = (num, array = [0, 1]) => {
  if (num <= 2) return array;
  const [nextToLast, last] = array.slice(-2);
  return fib(num - 1, [...array, nextToLast + last]);
};

console.log(fib(12));

//------------------------------------------ Without recursion ------------------------------------------ \\

console.log("without recursion");
const fibonacciPos = (pos) => {
  if (pos <= 1) return pos;
  const seq = [0, 1];
  for (let i = 2; i <= pos; i++) {
    const [nextToLast, last] = seq.slice(-2);
    seq.push(nextToLast + last);
  }
  return seq[pos];
};

console.log(fibonacciPos(8));

//------------------------------------------ With recursion ------------------------------------------ \\
console.log("with recursion");

const fibPos = (pos) => {
  if (pos < 2) return pos;
  return fibPos(pos - 1) + fibPos(pos - 2);
};

console.log(fibPos(8));

const smallFibPos = (pos) =>
  pos < 2 ? pos : smallFibPos(pos - 1) + fibPos(pos - 2);

console.log(smallFibPos(8));

//------------------------------------------ Real Examples ------------------------------------------ \\

const getAWSProductIdImages = async () => {
  //get data with await fetch request

  if (data.IsTruncated) {
    //recursive
    return await getAWSProductIdImages(
      productId,
      s3, //connection to s3
      resultArray, //accumulator
      data.nextContinuationToken
    );
  }
  return resultArray;
};

const artistsByGenre = {
    jazz: ["Miles Davis", "John Coltrane"],
    rock: {
        classic: ["Bob Seger", "The Eagles"],
        hair: ["Def Leppard", "Whitesnake", "Poison"],
        alt: {
            classic: ["Pearl Jam", "The Killers"],
            current: ["Joywave", "Sir Sly"]
        }
    },
    unclassified: {
        new: ["Caamp", "Neil Young"],
        classic: ["Seal", "Morcgeeba", "Chris Stapleton"]
    }
}


const getArtistName = (dataObj, arr = []) => {
    Object.keys(dataObj).forEach(key => {
        if(Array.isArray(dataObj[key])) {
            return dataObj[key].forEach(artist => {
                arr.push(artist);
            });
        }
        getArtistName(dataObj[key], arr);
    })
    return arr;
}

console.log(getArtistName(artistsByGenre));