// snippet 0-1
if (true) {
    console.log("foo");
} // foo

if (false) {
    console.log("bar");
} // blank 

// snippet 0-2
if (false || false) {
    console.log("boop");
} // blank

if (true || false) {
    console.log("beep");
} // beep
 
// snippet 0-3
let num = 40;

if (num > 0) {
    console.log("zip");
} // zip

if (num % 2 === 0) {
    console.log("zoop");
} // zoop

// snippet 0-4
let word = "jeep";

if (word[0] === "d") {
    console.log("yer");
} else {
    console.log("nah");
} // nah

// snippet 0-5
let sentence = "roger that";

if (sentence[sentence.length -1] === "t") {
    console.log("ends in t");
} else {
    console.log("does not end in t");
} // ends in t 

if (sentence.length <= 4) {
    console.log("short");
} else {
    console.log("long");
} // long 