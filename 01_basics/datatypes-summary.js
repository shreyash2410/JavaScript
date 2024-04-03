// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// null means empty not zero

const score = 100
const scoreValue = 100.3

const isLoogedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId);

const bigValue = 41156465464616415n



// Reference (Non primitive)

// Array, Objects 

const cars = ["Mustang", "Porshe", "BMW"];
let myObj = {
    name: "shreyash",
    age: 20,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof scoreValue);

//https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myhobby = "Trader"
let mycurrent = myhobby
mycurrent = "Student"

console.log(myhobby);
console.log(mycurrent);


let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "shreyash@google.com"

console.log(userOne.email);
console.log(userTwo.email);
