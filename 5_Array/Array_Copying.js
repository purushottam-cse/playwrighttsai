let original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// shaloow copy of an array can be created using the following methods:
let copy = [...original] // spread operator
console.log(copy) // [1,2,3,4,5,6,7,8,9,10] 

let copy2 = original.slice() // slice method
console.log(copy2) // [1,2,3,4,5,6,7,8,9,10]

let copy3 = Array.from(original) // Array.from method
console.log(copy3) // [1,2,3,4,5,6,7,8,9,10]

let copy4 = original.concat() // concat method
console.log(copy4) // [1,2,3,4,5,6,7,8,9,10]


copy.push(99)
console.log(original) // [1,2,3,4,5,6,7,8,9,10]  original array is not modified
console.log(copy) // [1,2,3,4,5,6,7,8,9,99]  copy array is modified


let deepCopy = original;

deepCopy.push(99)
console.log(original) // [1,2,3,4,5,6,7,8,9,10,99]  original array is modified
console.log(deepCopy) // [1,2,3,4,5,6,7,8,9,10,99]  deepCopy array is modified  
