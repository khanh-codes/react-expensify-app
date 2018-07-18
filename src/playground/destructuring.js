// Object Destructuring
/*
const person = {
    name: 'Khanh',
    age: 24,
    location: {
        city: 'Reston',
        temp: 80
    }
};

// setting default
const { name:firstName = 'Anonymous' , age } = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}`);

// setting rename
const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} is ${city}.`);
}

const book = {
    title: 'Ego is the Enermy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: pushlisherName = 'Self-Published' } = book.publisher

console.log(pushlisherName);
*/

// Array Destructuring

const address = ['1299 S Juniper Street', 'Reston', 'Virginia', '20190'];

const [, city, state] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
