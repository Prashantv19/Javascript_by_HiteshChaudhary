var a = "Prashant"
var z;
z = "Prashant"
console.log("it can  be defined after initialization");
//---------------------------------------------------------------------------------
let b = 21
let y
y = "Vishwakarma"      //always prefered to use let instead of var
console.log("it can  be defined after initialization");

//---------------------------------------------------------------------------------
const c = "Prashant"           //this is not allowed to redeclare the variable

//c = false; //this is not allowed to change the value of constant variable

//---------------------------------------------------------------------------------

let d21 = 21
let $ = "1313131"
let _name = "Prashant"
let NAME = "Prashant"
let name = "prashant"
console.log(d21, $, _name, NAME, name);

 var a = 21; //this is not allowed to redeclare the variable
 console.log(a);
 
 //------------------------------Data Type--------------------------------

// 1. Primitive Data Types
// 1.1. String        //String is a sequence of characters enclosed in single or double quotes.
// 1.2. Number        //Number represents numeric values.
// 1.3. Boolean       //Boolean represents true or false
// 1.4. Undefined     //Undefined represents an undefined value.
// 1.5. Null          //Null represents an empty value.
// 1.6. Symbol        //Symbol represents a unique value.
// 1.7. BigInt        //BigInt represents large integers.

// 2. Reference Data Types
// 2.1. Object        //Object represents a collection of key-value pairs.
// 2.2. Array         //Array represents a collection of elements.

//-----------------------------NOt important--------------------------------

// 2.3. Function      //Function represents a block of code that can be called.
// 2.4. Date          //Date represents a date and time.
// 2.5. RegExp        //RegExp represents a regular expression.
// 2.6. Map           //Map represents a collection of key-value pairs.
// 2.7. Set           //Set represents a collection of unique values.
// 2.8. WeakMap       //WeakMap represents a collection of key-value pairs where keys are objects only.
// 2.9. WeakSet       //WeakSet represents a collection of unique objects only.
// 2.10. ArrayBuffer  //ArrayBuffer represents a fixed-length binary data buffer.
// 2.11. SharedArrayBuffer //SharedArrayBuffer represents a fixed-length binary data buffer that can be shared among workers.
// 2.12. DataView      //DataView represents a view of an ArrayBuffer.
// 2.13. Typed Arrays  //Typed Arrays represent arrays of a specific numeric data type.
// 2.14. Promise       //Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// 2.15. Generator     //Generator represents an iterator that can pause and resume its
// 2.16. GeneratorFunction //GeneratorFunction creates a new Generator object.
// 2.17. AsyncFunction //AsyncFunction creates a new AsyncFunction object.
// 2.18. AsyncGenerator //AsyncGenerator creates a new AsyncGenerator object.
// 2.19. AsyncGeneratorFunction //AsyncGeneratorFunction creates a new AsyncGeneratorFunction object.
// 2.20. Proxy         //Proxy represents a handler object that can intercept fundamental operations of another object.
// 2.21. Reflect       //Reflect provides methods for interceptable JavaScript operations.
// 2.22. Module        //Module represents a module in JavaScript.
// 2.23. Error         //Error represents an error object.
// 2.24. EvalError     //EvalError represents an error regarding the global eval() function.
// 2.25. RangeError    //RangeError represents an error when a value is not in the set or range of allowed values.
// 2.26. ReferenceError //ReferenceError represents an error when an invalid reference is used.
// 2.27. SyntaxError   //SyntaxError represents a syntax error.
// 2.28. TypeError     //TypeError represents an error when a value is not of the expected type.
// 2.29. URIError      //URIError represents an error when a global URI handling function is misused.
// 2.30. InternalError //InternalError represents an error that occurs internally in the JavaScript engine.

//---------------------------------------------------------------------------------

//object creation
let myProfile = {
    Naam : "PrashantVishwakarma",
    RollNo : 141,
    Branch : "CSE",
    College : "SRMU",
    Stream : "DS+AI",
    Age: 22,
    isStudent : true,
    isEmployee : false,
    isMarried : false,
    isSingle : true,
    isAlive : true,
    isDead : false,
    isIndian : true,
    Aspiring : "SDE",
}
console.log(myProfile);

console.log("My name is : ", myProfile.Naam);
console.log("My roll no is : ", myProfile.RollNo);


//------------------------------------Quiz-----------------------------------
//write a JS program to store name, Phone no, and marks of a student using object.
let student = {
    Name : "Prashant Vishwakarma",
    PhoneNo : 8960729663,
    Marks : 100
}
console.log(student);


