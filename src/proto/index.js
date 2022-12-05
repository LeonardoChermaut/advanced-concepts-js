//------------------------------------------ Prototype ------------------------------------------ \\
console.log("--------------- Prototype ---------------");

const person = {
  alive: true,
};
const musician = {
  plays: true,
};

const guitarist = {
  strings: 6,
  __proto__: musician,
};

const car = {
    doors: 2,
    seats: 'Vinyl',
    get seatMaterial(){
        return this.seats;
    },
    set seatMaterial(marerial){
        this.seats = marerial;
    }
}

const luxuryCar = {}
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = 'leather';

try {
    console.log(musician.plays);
    console.log(musician.alive);
    console.log(musician);
    Object.setPrototypeOf(musician, person);
    console.log(musician.__proto__);
    console.log(guitarist.alive);
    console.log(guitarist.plays);
    console.log(guitarist.strings);
    console.log(luxuryCar);
    console.log('how many doors?\n', luxuryCar.doors);
    console.log('specs car\n',car);
    console.log('value of\n', luxuryCar.valueOf());
    console.log('object key = array\n',Object.keys(luxuryCar));
} catch (error) {
    console.trace("Ocorreu este erro: ", error);
}

// For..in loop includes inherited props
for (let key in luxuryCar){
    console.log('props proto\n', key)
}

//------------------------------------------ Object contructors ------------------------------------------ \\

console.log("--------------- Object contructors ---------------")

function Animal(species, food) {
    this.species = species;
    this.food = food;
    this.eats = true;
}

const Bear = new Animal("Bear", "Meat")

Animal.prototype.walks = () => {
    return `A ${this.species} is walking`
}

try {
    console.log('whats species?n',Bear.species)
    console.log('console my proto\n',Bear.__proto__);
    console.log('this is a proto? \n',Bear.__proto__ === Animal.prototype);
    console.log('whats a proto?\n',Animal.prototype);
    console.log('what is bear?\n',Bear);
    
} catch (error) {
    console.trace("Ocorreu este erro: ", error);
}

class Vehicle {
    constructor() {
        this.wheels = 4;
        this.motorized = true;
    }
    ready() {
        return "Ready to go";
    }
}


class Motorycle extends Vehicle {
    constructor(){
        super();
        this.wheels = 2;
    }
    wheelie(){
        return 'On one wheel now!';
    }
}
const myBike = new  Motorycle();
console.log('whats is my bike?\n',myBike);
console.log('how many wheels\n', myBike.wheels);
console.log('ready?\n', myBike.ready());
console.log('execute a wheelie\n', myBike.wheelie());
