let results = [1, 2, 3, 4, 5]

console.log(results.indexOf(3)) // 2
console.log(results.indexOf(6)) // -1


let index = results.findIndex((element) => element > 3)
console.log(index) // 3

let element = results.find((element) => element > 3)    
console.log(element) // 4

let elements = results.findLastIndex((element) => element > 3)
console.log(elements) // 4

let lastElement = results.findLast(element => element > 3)
console.log(lastElement) // 5