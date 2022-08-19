console.log();
let phrase = "that's all folks";
console.log(phrase[phrase.length]); // undefined // phrase[16]
console.log(phrase[phrase.length - 1]); // s
console.log(phrase[phrase.length - 2]); // k
console.log();

console.log();
const i = 9;
const char = phrase[i];
console.log(char); // l
console.log(phrase.indexOf(char)); // 8
console.log(phrase.slice(2, 8)); // 'at's a'
console.log();

console.log();
console.log("abcdefg".slice(1,3)); // 'bc'
console.log("abcdefg".slice(2)); // 'cdefg'
console.log("abcdefg".slice(4)); // 'efg'
console.log("abcdefg".slice(2, -1)); // 'cdef'
console.log("abcdefg".slice(2, -2)); // 'cde'
console.log();