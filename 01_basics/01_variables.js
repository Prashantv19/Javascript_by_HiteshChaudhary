const accountId = 112233
let accountEmail = "prashantv1902@gmail.com"
let accountEmail1 = "prashantv"
let accountEmail2 = "202210101150141"
var accountPassword = "12345" //not recommendable
accountCity = "Jaunpur"  // we can do this without variable name
let accountState;

// accountId = 141 // not allowed 
/*
    Prefer not to  'var'
    because of issue in block scope and functonal scope
    {}-> is known as scope
*/


accountEmail = "prashantv@gmail.com"


accountPassword = "23456"
accountCity = "vns"

console.log(accountId)
console.log(accountCity)
console.log(accountState);
console.log(accountEmail1);
console.log(accountEmail2);

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

