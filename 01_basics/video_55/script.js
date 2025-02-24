// alert("hello, this is me")


// console.log("Hey this is tutorial 55");
// let a = 5;
// let b = 6;
// let c = "Prashant";


// console.log(a+b+5, " ", c);
// console.log(typeof a,typeof b, typeof c);
// // const a1 = 56;
// // a1 = a1 +2;    //this is not Allowed to add in constant variable
// {
//     let a1 = 45;
//     a1 = a1 + 5;
//     console.log(a1);
//     console.log("This is block scope");
// }
// console.log(a);

let x = "Prashant"
let y = 21
let z = 3.1416
const p = true
let q = null
let r = undefined

console.log(x, y, z, p, q, r);
console.log(typeof x ,typeof y, typeof z, typeof p, typeof q, typeof r);
let o = {
    "name" : "Prahant",
    "job": "SDE",
    "age": 21
}
console.log(o);


//------------------------------------------------------------

// Word-meaning dictionary
const dictionary = {
    "algorithm": "A step-by-step procedure to solve a problem.",
    "variable": "A storage location identified by a memory address and a symbolic name.",
    "function": "A reusable block of code that performs a specific task.",
    "object": "An instance of a class that contains properties and methods.",
    "array": "A collection of elements stored in a single variable."
};

// Function to get the meaning of a word
function getMeaning(word) {
    word = word.toLowerCase(); // Convert input to lowercase for case insensitivity
    if (dictionary[word]) {
        console.log(`Meaning of '${word}': ${dictionary[word]}`);
    } else {
        console.log(`The word '${word}' is not in the dictionary.`);
    }
}

// Example usage
getMeaning("algorithm");
getMeaning("function");
getMeaning("random");


