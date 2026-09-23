// ==  ===

// == is used to compare two values for equality, but it does not consider the data type of the values being compared. It performs type coercion if the values are of different types. For example, if you compare a string and a number, JavaScript will convert the string to a number before making the comparison.

// === is used to compare two values for equality, and it also considers the data type of the values being compared. It does not perform type coercion, so if the values are of different types, the comparison will return false.  

// > , < , >= , <=

// return boolean value true or false


// != , !== 

console.log(5 != "5"); // false, because the values are equal after type coercion

console.log(5 !== "5"); // true, because the values are not equal when considering the data type

