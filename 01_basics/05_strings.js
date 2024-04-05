const name = "shreyash"
const repocount = 50

// console.log(name + repocount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('Shreyash')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log((gameName.indexOf('S')));
// Refer MDN Docs for Strings methods for proper knowledge

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "   shreyash    "
console.log(newStringOne);
console.log(newStringOne.trim());   // Refer MDN for trim

const url = "https://shreyash.com/shreyash%20dhumale"

console.log(url.replace('%20','-'));

console.log(url.includes('shreyash'));

console.log(gameName.split('-'));

// MDN String and needs practice  
