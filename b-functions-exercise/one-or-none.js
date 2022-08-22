// Write a function `oneOrNone` that accepts two booleans as arguments. 
// The function should return true if exactly one of the arguments is true.
// If BOTH arguments are true, then it should return false.

let oneOrNone = function (bool1, bool2) {

    if (bool1 == true && bool2 == false) {
        return true;
    } else if (bool1 == false && bool2 == true) {
        return true;
    } else if (bool1 && bool2 == true) {
        return false;
    }
};


console.log(oneOrNone(false, false)); // false
console.log(oneOrNone(true, false)); // true
console.log(oneOrNone(false, true)); // true
console.log(oneOrNone(true, true)); // false