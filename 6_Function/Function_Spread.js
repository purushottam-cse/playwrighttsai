function sum(a,b,c){
    return a+b+c
}

let num =[1,2,3]
console.log(sum(...num))
console.log(...num)


function hasError(...codes){
    return codes.some(c => c>=400 );

}

let responseCode= [100,200,400]
 console.log(hasError(...responseCode))