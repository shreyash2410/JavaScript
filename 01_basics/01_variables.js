const accountId = 144553
let accountEmail = "shreyash@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "sd@sd.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var 
because of the issue of Scope of variable

*/
console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);