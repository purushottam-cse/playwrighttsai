let results = [1, 2, 3, 4, 5]

let result = Array.isArray(results) // true
console.log(result) // true

let result2 = Array.isArray('a') // false
console.log(result2) // false


// map, filter, reduce 


// every, some 

let arr1 = [1, 2, 3, 4, 5]

// validate if all elements in the array are greater than 0
let allgreater = arr1.every(s => s>0)
console.log(allgreater) // true


// at least one element in the array is greater than 3
let atleastone = arr1.some(s => s>3)
console.log(atleastone) // true