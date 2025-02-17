const score =400
//console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString(2).length)
// console.log(balance.toFixed(2))   //to give precision value after decimal
const otherNumber1 = 23.8989
const otherNumber2 = 123.8989
const otherNumber3 = 1123.8989

//console.log(otherNumber1.toPrecision(3))  
//console.log(otherNumber2.toPrecision(3))  
//console.log(otherNumber3.toPrecision(3))  //to give precision value before decimal, jis position per chahiye precision valueusko likhana padega for example 3rd place pe chahiye to 3 likhna padega
//console.log(otherNumber3.toPrecision(4)) //for ex.
const hundred = 1000000
//console.log(hundred.toLocaleString('en-IN'));

//--------------------MATHS----------------------

// console.log(Math.PI);   //practice on console(browser)
// console.log(Math.abs(-14));   //absolute value
// console.log(Math.round(1.7)); //round off
// console.log(Math.ceil(1.4));  //round off to upper value
// console.log(Math.floor(1.9));   //round off to lower value
// console.log(Math.max(2,3,4,5,6,7,8,9)); //maximum value
// console.log(Math.min(2,3,4,5,6,7,8,9));  //minimum value

console.log(Math.random());  //it gives random value 
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //to get random value between 10 to 20 (+1 is for avoid zero)