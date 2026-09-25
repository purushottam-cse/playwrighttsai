let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// do not modify the original array, instead return a new array
// include start index, exclude end index
// if index is negative, it counts from the end of the array and goes right to left
// -1 is the last element, -2 is the second last element, and so on

console.log(arr.slice(2, 5)) // [3,4,5]  start index, end index (not included)
console.log(arr.slice(2)) // [3,4,5,6,7,8,9,10]  start index to end of array
console.log(arr.slice(-3)) // [8,9,10]  last 3 elements
console.log(arr.slice(-5,-2)) // [6,7,8]  last 5 elements to last 2 elements (not included)