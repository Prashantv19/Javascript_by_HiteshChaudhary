const name= "Prashant"
const repoCount = 40

// console.log(name + repoCount + "value");  // not recommended

console.log(`Hello my name is ${name} and myrepo count is ${repoCount}`);  // string interpolation  (new style to declear string)
 
const gameName = new String("PU-BG");
// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));

//console.log(gameName.indexOf("P"));

const newString = gameName.substring(0,2);
//console.log(newString);   //last wali value include nahi ho rahi hai

const newString1 = gameName.slice(-4,3);
console.log(newString1);

const newString2 = "            prashant       "

console.log(newString2);

console.log(newString2.trim());      //remove extra space from string
// trimStart() and trimEnd() also available( goto mdn docs)                                     
const URL = "https://www.prashant%20vishwakarma.com"
console.log(URL.replace('%20','-'))    //kya hatana chahte ho  , kisase replace karna chahte ho

console.log(URL.includes('prashant'));  //true or false return karega,,check karega ki string me hai ki nhi hai

console.log(gameName.split());     //array me convert kar dega,,
console.log(gameName.split('-')); 


//Do practice more practice