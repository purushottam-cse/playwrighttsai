
let identity = { name : "Purushottam" }
console.log(identity.name)


//call by value 
let number1= 10;
let number2 = number1
number2 = 99

console.log(number1)
console.log(number2)


// call by reference 

let obj = { value : 'pass'}
let obj2 = obj 
obj2.value = 'fail'

console.log(obj )