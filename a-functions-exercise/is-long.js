// Write a function `isLong` that accepts a string as an argument. 
// The function should return a boolean
// Indicating whether or not the string is longer than 5 characters

let isLong = function (str) {
    if (str.length > 5) {
     return true;
    } else {
        return false;
    }
};

let isLong = function (str) {
    return str.length > 5;
}; // shorter way

console.log(isLong("pie")); // false
console.log(isLong("kite")); // false 
console.log(isLong("kitty")); // false
console.log(isLong("telescope")); // true  
console.log(isLong("thermometer")); // true 
console.log(isLong("restaurant")); // true 