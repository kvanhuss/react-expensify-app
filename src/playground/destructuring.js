//
// Object destructing
//

/*
const person = {
    name: 'Kate',
    age: 23,
    location: {
        city: 'Bettendorf',
        temp: 73
    }
};

// Set default name as anonymous
const { name = 'Anonymous', age } = person;
console.log(`${name} is ${age}.`);

const {city, temp} = person.location;
/*
if(person.location.city && person.location.temp) {
    console.log(`It's ${person.location.temp} in ${person.location.city}.`);
}
*/

/*
if(city && temp) {
    console.log(`It's ${temp} in ${city}.`);
}
*/
// Rename temp

/*
const {city, temp: temperature} = person.location;
if(city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}
*/
/*
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName  = 'Self published'} = book.publisher;

console.log(publisherName);
*/



//
// Array destructuring
//

const address = ['1299 S JuniperStreet', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York' ] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName,, mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);