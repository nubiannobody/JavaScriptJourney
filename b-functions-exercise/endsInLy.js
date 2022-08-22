// Write a function `endsInLy` that accepts a string as an argument 
// And returns a boolean indicating
// whether or not the string ends in the substring 'ly'.

let endsInLy = function (str) {
let substring = str.indexOf('ly');
if (substring == -1) {
    return false;
} else {
    return true;
}
};

console.log(endsInLy("pretty")); // false
console.log(endsInLy("instant")); // false
console.log(endsInLy("analytic")); // false
console.log(endsInLy("timidly")); // true
console.log(endsInLy("fly")); // true
console.log(endsInLy("gallantly")); // true