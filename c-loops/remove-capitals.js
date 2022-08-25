// Write a function `removeCapitals` that accepts a string as an argument. The function should return a
// new version of the string with all capital letters removed.

let removeCapitals = function (str) {
    let noCapitals = ''; // empty string that will store the characters that are not capital
    for (let i = 0; i < str.length; i++) { // iterates through the string 
        let char = str[i]; // the index of each character in the string
        if (char === char.toLowerCase()) { // checks if the character is equal to the lowercase value of the character
           noCapitals += char; // adds the characters that are lowercased to the empty string noCapitals
        }
    }

    return noCapitals;
};

console.log(removeCapitals("fOrEver")); // 'frver'
console.log(removeCapitals("raiNCoat")); // 'raioat'
console.log(removeCapitals("cElLAr Door")); // 'clr oor'