let [first, second, third, fourth, fifth] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3
console.log(fourth); // 4
console.log(fifth);  // 5


let [first1, second1, ...rest] = [1, 2, 3, 4, 5];

console.log(first1);  // 1
console.log(second1);   // 2
console.log(rest);   // [3, 4, 5]