// Write a function `censorE` that accepts a string as an argument. The function should return a new
// version of string where all characters that are 'e's are replaced with '*'s.

let censorE = function (str) {
    let noE = ''; // empty string to store *
    for (let i = 0; i < str.length; i++) { // loop to iterate through entire string
        let char = str[i]; // single characters of string
        if (char === 'e'){ // checks if the characters equal e
            noE += '*'; // adds * to empty string
        } else { 
            noE += char; // adds characters that are not e to the empty string
        }
    }
    return noE; // returns new string with e replaced with *
}


console.log(censorE("speedy")); // 'sp**dy'
console.log(censorE("pending")); // 'p*nding'
console.log(censorE("scene")); // 'sc*n*'
console.log(censorE("heat")); // 'h*at'