// camelCase

let userName = "John Doe"; // valid identifier
//=let 48user = "Jane Doe"; // invalid identifier (starts with a number)

let _user = "Alice"; // valid identifier (starts with an underscore)
let $user = "Bob"; // valid identifier (starts with a dollar sign)

// pascalcase 

UserProfile = "John Doe"; // valid identifier (PascalCase)

// snake_case

let user_profile = "Jane Doe"; // valid identifier (snake_case)

// screaming_snake_case

let USER_PROFILE = "Alice"; // valid identifier (screaming_snake_case)

// hungarian notation

let strUserName = "John Doe"; // valid identifier (Hungarian notation, prefix 'str' indicates a string)
let intUserAge = 30; // valid identifier (Hungarian notation, prefix 'int' indicates an integer)
let boolIsActive = true; // valid identifier (Hungarian notation, prefix 'bool' indicates a boolean)
let arrUserList = ["John", "Jane", "Alice"]; // valid identifier (Hungarian notation, prefix 'arr' indicates an array)
let ncount = 5; // valid identifier (Hungarian notation, prefix 'n' indicates a number)


//let #user = "Invalid"; // invalid identifier (contains a special character)

// must start with a letter, underscore, or dollar sign
// cannot start with a number
// cannot use reserved keywords as identifiers
// we will mostly use camelCase for variable and function names, and PascalCase for class names.

