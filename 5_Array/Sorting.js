let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'cherry', 'date', 'elderberry']

let nums = [10, 5, 20, 15];
nums.sort();
console.log(nums); // [10, 15, 20, 5] (incorrect numerical order due to string comparison)
// NATURAL SORTING lexicographically sorts elements as strings, which can lead to unexpected results when sorting numbers. To sort numbers correctly, you can provide a compare function:



let numsAsc = [10, 5, 20, 15];
let sortedAsc = numsAsc.sort((a,b) => a-b);
console.log(sortedAsc); // [5, 10, 15, 20]

let numsDesc = [10, 5, 20, 15];
let sortedDesc = numsDesc.sort((a,b) => b-a);
console.log(sortedDesc); // [20, 15, 10, 5]