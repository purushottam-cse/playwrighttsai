console.log(null == undefined); // true, because null and undefined are considered equal in non-strict comparison
console.log(null === undefined); // false, because null and undefined are not the same type
console.log(null == 0); // false, because null is only equal to undefined in non-strict comparison
console.log(null >= 0); // true, because null is coerced to 0 in non-strict comparison
console.log(null > 0); // false, because null is coerced to 0 in non-strict comparison
console.log(null == 0 || null > 0); // false, because null is coerced to 0 in non-strict comparison
console.log(undefined > 0); // false, because undefined is not greater than 0 in non-strict comparison
console.log(undefined == 0); // false, because undefined is not equal to 0 in non-strict comparison