// Write a function `endsWithT` that accepts a string as an argument. 
// The function should return a boolean 
// Indicating whether or not the string ends with the character 't'.

let endsWithT = function (str){
if (str.indexOf('t') == str.length -1) {
    return true;
} else {
    return false
}
};

let endsWithT = function (str) {
    let lastChar = str[str.length - 1];
    return lastChar === 't';
}; // alvin's way


console.log(endsWithT("smart")); // true
console.log(endsWithT("racket")); // true
console.log(endsWithT("taco")); // false
console.log(endsWithT("boomerang")) // false