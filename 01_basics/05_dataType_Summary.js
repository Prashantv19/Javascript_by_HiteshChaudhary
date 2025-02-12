//premitive
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

const score = 100
const scoreValue = 100.3

const isloggedin = false
const outSideTemp = null
let userName;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);  //false

//const bigNumber = 1234567890123456789012345678901234567890n  //n is used to define BigInt



//non-premitive(reference)
// 1. Object
// 2. Array
// 3. Function

const heros = ['Superman', 'Batman', 'Ironman']        // array 
let myObj = {
    name: 'Prashant',           // these are objects
    age: 21,
}
const Function = function(){
    console.log('Hello World');
}

// console.log(typeof bigNumber); // BigInt
// console.log(typeof outSideTemp); // object
// console.log(typeof userName); // undefined
// console.log(typeof score);
// console.log(typeof Function);



//-------------------------------------------------------------------------
// thee are two types of memory
// Stack(Primittive) -> ye jab use hoti hai tab isme ek copy milta hai 
// Heap(Non-Primittive) -> isme original value ka referance milta hai
// Stack memory is limited and Heap memory is unlimited
let myYouTubename = "PrashantVishwakarma"
let AnotherName = myYouTubename

AnotherName = "thedeepocean"  
// ye change sirf AnotherName me hoga myYouTubename me nahi hoga because ye ek copy bana deta hai aur changes usi me hote hai.

console.log(AnotherName);
console.log(myYouTubename);

let user1 = {
    email : "user@google.com",
    upi: "user@okhdfc"
}
let user2 = user1
user2.email = "prashant@gmail.com"

console.log(user1.email);
console.log(user2.email);

//jab heap ke ander koi bhi value change hoti hai to uska referance change hota hai to usme sabhi value change ho jati hai.
//jo bhi changes hote hai wo original value me hote hai.
