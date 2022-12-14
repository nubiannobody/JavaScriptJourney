// Write a function `startsWithR` that accepts a string as an argument 
// And returns a boolean indicating
// Whether or not the string starts with 'r' or 'R'.

let startsWithR = function (str) {
 if (str[0] === 'r' || str[0] === 'R') {
     return true
 } else {
     return false
 }
};

let startsWithR = function(str) {
    return str[0] === 'r' || str[0] === 'R';
}

// Alvin's way

console.log(startsWithR("roger that")); // true
console.log(startsWithR("Row, row, row your boat")); // true
console.log(startsWithR("slip")); // false
console.log(startsWithR("Taxicab")); // false