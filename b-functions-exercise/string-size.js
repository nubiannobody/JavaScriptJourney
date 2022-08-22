// Write a function `stringSize` that accepts a string as an argument. 
// The function should return the
// string 'small' if the argument is shorter than 5 characters, 
// medium' if it is exactly 5 characters, and
// 'large' if it is longer than 5 characters.

let stringSize = function (str) {
if (str.length < 5) {
    return 'small';
} else if (str.length == 5) {
    return 'medium';
} else if (str.length > 5) {
    return 'large';
} else {
    return 'enter a string longer than 3 characters';
}
};

console.log(stringSize("cat")); // 'small'
console.log(stringSize("bell")); // 'small'
console.log(stringSize("ready")); // 'medium'
console.log(stringSize("shirt")); // 'medium'
console.log(stringSize("shallow")); // 'large'
console.log(stringSize("intelligence")); // 'large'
