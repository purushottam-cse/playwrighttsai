//map - same sixe array 
let scores = [10,20,30,40,50]   
let grade = scores.map( s => s>40 ? "pass" : "fail")
console.log(grade) // ["fail", "fail", "fail", "pass", "pass"] 

// filter - smaller size array
let passedStudent = scores.filter( s => s>30);
console.log(passedStudent) // [40, 50]


// reduce method - reduce the array to a single value

let totalScore = scores.reduce((total, score) => total + score, 0);
console.log(totalScore) // 150