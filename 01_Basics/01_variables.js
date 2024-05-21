const accountId = 123456
let accountEmail = "hemendra@gmail.com"
var accountPwd = "1234"
let accountCity = "Bareilly"
let accountState

// accountId = 2 // Not Allowed

accountEmail = "HV@gmail.com"
accountPwd = "1111"
accountCity = "Noida"

if (typeof accountState == "undefined"){
    console.log("True");
}else console.log("False");

console.log(accountId);

/*
Prefer not to use "var"
bacause of issue in block scope and functional scope 
*/

console.table([accountEmail, accountId, accountPwd, accountCity, accountState])