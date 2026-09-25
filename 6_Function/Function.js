function getResult(score){
    return score >= 60 ? 'pass' : 'fail';
}

console.log(getResult(70)) // pass
console.log(getResult(50)) // fail  


function sayHello(name){
  console.log(`Hello ${name}`);

}
sayHello('John') // Hello John