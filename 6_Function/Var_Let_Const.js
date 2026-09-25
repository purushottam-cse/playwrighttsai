const a = [1,2,3,4,5]
a.push(10)
console.log(a)


console.log(b)
var b = 'puru'
console.log(b)


// console.log(c)
// let c= 'puru'
// console.log(c)


// TDZ temporal died zone 

var apple = 'fruit'

if(true){
    console.log(apple)   // value of apple is undefined is in TDZ when var is used 
    var apple = 'exoctic fruit'
}

let fruit = 'Banana'

if (true){
    console.log(fruit)   // value of out scope, variable with no value because declared value is out of scope
    let fruit = 'Kela'
}

const score = 100;
// score = score + 10 cannot assign to constant valriable 
console.log(score)