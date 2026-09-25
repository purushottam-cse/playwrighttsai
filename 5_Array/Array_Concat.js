let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
console.log(c); // [1, 2, 3, 4, 5, 6]   

let d  = [...a,...b] // spread operator
console.log(d) // [1, 2, 3, 4, 5, 6]

let e = [1, 2, 3].join('-') // join array elements with a separator
console.log(e) // 1-2-3
