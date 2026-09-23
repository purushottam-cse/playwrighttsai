console.log("" == 0); // true, because the empty string is coerced to 0 before comparison
console.log("0" == 0); // true, because the string "0" is coerced to the number 0 before comparison
console.log("" == "0"); // false, because the empty string is not equal to the string "0"

console.log("" === 0); // false, because the empty string is not equal to the number 0 when considering data type
console.log("0" === 0); // false, because the string "0" is not equal to the number 0 when considering data type    
console.log("" === "0"); // false, because the empty string is not equal to the string "0" when considering data type