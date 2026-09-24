let age = 19;
let isAdult = age > 18 ? 'yes' : 'no';
console.log(`Is this person an Adult? ${isAdult}`); // yes

let statusCode = 404;
let category = statusCode <= 300 ? 'success' :
                statusCode <= 400 ? 'redirect' :
                statusCode <= 500 ? 'client error' : 'server error';

console.log(`The status code ${statusCode} indicates a ${category}.`); // The status code 404 indicates a client error.


let temperature = 35;
let weather = temperature >= 40 ? 'hot' : 
                   temperature >= 30 ? 'moderate' :
                   temperature >= 20 ? 'cold': 'freezing';
console.log(`The temperature is  ${temperature} and the feels like ${weather}.`); // The weather is moderate.
