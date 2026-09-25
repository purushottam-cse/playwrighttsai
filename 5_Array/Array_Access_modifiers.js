// accessing and modify 

let arr = [1,2,3,4,5]   

console.log(arr[0]) // 1
console.log(arr[1]) // 2        
console.log(arr.at(-6)) // undefined
console.log(arr.at(-5)) // 1
console.log(arr.at(-4)) // 2
console.log(arr.at(-3)) // 3
console.log(arr.at(-2)) // 4
console.log(arr.at(-1)) // 5

// Add to End 

console.log(arr.pop()) // remove last element
arr.push(6) // add to last element
console.log(arr) // [1,2,3,4,5,6]
console.log(arr.shift()) // remove first element
arr.unshift(0)// add to first element  
console.log(arr) // [0,1,2,3,4,5,6]


arr.splice(2, 2, 2.5) // add 2.5 at index    start index, remove count, add element 
// multiple elements can be added at once
// starting index can be negative, which counts from the end of the array

console.log(arr) // [0,1,2.5,3,4,5,6]




