const accountId = 56748993; 
// const using for value assign and value are no changeable if you decleare a value in const

let accountEmail = "Piyush.01@goggle.com"
// using a let and const in the javascript because they do not have blocl scope problem 
//  so mainly javascript using a const and let (Block scope)


var accountPassword = "12345"
// it can be re-assigned a value and it can also be declared again on (global scope)
accountCity = "Noida"

// without usign any let const var assigned a variable are not the proper way to declare a variable 

let accountState;
// if you not declare the value it shows undefine in the console .

//  accountId=23 "Not allowed"

accountEmail="piyush@goggle.com"
accountPassword = "2323232"
accountCity = "Agra"

console.log(accountId);

/*
Prefer not to be use Var
because of issue in a block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
// console.table is using for a multile variable console in single line 

