  //------------------------------------------ Closure ------------------------------------------ \\
  console.log('Closure')
  let x = 1;

  const parentFunction = () => {
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
      console.log((x += 5));
      console.log((myValue += 1));
    };
    return childFunction;
  };

  const result = parentFunction();
  result();
  result();
  result();
  try {
      console.log(x);
      console.log(myValue);
    
  } catch (error) {
    console.trace('Ocorreu este erro: ', error);
  }


    //------------------------------------------ Closure with SelfInkoved ------------------------------------------ \\
    console.log('Self Inkoved'); 

    const privateCounter = (() => {
            let count = 0;
            console.log(`Initial value: ${count}`)
            
            return () => {count += 1; console.log(count);}
    })();

    privateCounter();
    privateCounter();
    privateCounter();

//------------------------------------------ Self Closure Inkoved with param ------------------------------------------ \\
console.log('Self Inkoved with param'); 

const credits = ((num) => {
    let credits = num;
    console.log(`Initial credits: ${credits}`);
    return () => {
        credits -=1;
        if(credits > 0) console.log(`Playing game, ${credits} credits(s) remaining`);
        if(credits <= 0) console.log(`Not enough credits.\nYour credits: ${credits}`);
    }

})(3);

credits();
credits(); 
credits();