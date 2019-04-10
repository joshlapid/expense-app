// const person = {
//     name: 'Josh',
//     age: 28,
//     location: {
//         city: 'San Diego',
//         temp: 60
//     }
// };

// const {age, name: firstName = 'annonymous'} = person;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;

// if (city && temperature) {
//     console.log(`its ${temperature} in ${city}`);
// }

// const book = {
//     title: 'book title here',
//     author: 'bob jones',
//     publisher: {
//         name: 'bookco'
//     }
// }

// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName);

// Array

const address = ['123 bob st', 'sd', 'ca', '91919'];

const [street, city, state, zip] = address;

console.log(`You are in ${street} ${city} ${state}`);

const item = ['coffee (hot)', '2.00', '2.50', '2.75'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} is ${medium}.`);