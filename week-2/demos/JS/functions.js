// Functions in JS are very similar in nature to functions you'd see everywhere else
// Basically just a block of repeatable code that can also take in arguments that affect how the code is executed

function simpleFunction(){
    // Inside here you'll note a few differences to Java
    // One is that I don't have to declare a return type or really even return anything

    console.log("I'm inside a function!")
    
}

// Why does nothing appear?
// We need to call the function to actually use it
simpleFunction();


// We can do a few more things with functions
function isEven(num){

    // Notice no datatype in sight because JS is dynamic and loosely typed
    if (num % 2 == 1){
        return "Odd"
    } else{
        return "Even"
    }
}

let is7Even = isEven(7);
let is4Even = isEven(4);

console.log(is7Even);
console.log(is4Even);

// Default values
// This is similar to achieving overloading in Java, but we have the capability of using default values for our functions if none is provided

function multiply(x, y=1){
    // We've given y a default value of 1 meaning if this method is called without a second parameter, it'll use 1 as the parameter
    return x*y
}

let product = multiply(7,5)
console.log(product)

let identity = multiply(2);
console.log(identity)

// This is similar to overloading in the sense that we have "two" functions that have the same name but different number of parameters


// Anonymous functions
// These are functions without a name that are stored inside of a variable
let anonFunction = function (x){
    return x/2;
}


// There's also this thing called IIFE (Immediately invoked function expression)
let num = 0;

(function(num){
    console.log("I am self invoked");
    console.log(num);
    // I could be doing other things here
})(5);



// Other useful things to know since JS is JS

// Truthy vs Falsy
// Every value in JS is either truthy or falsy
// There are a few falsy values, if it is not falsy, then it's truthy

// Falsy Values:
/*
null,
undefined,
false,
empty string,
0, 
NaN (Not a number)
*/

// Why is this useful?
// A good usecase is to tell if a value has been initialized

// Let's say we have some input box for the user to enter in their username
// How can we tell if the input is actually filled out?
// Note: we can use '', "", or `` for strings in JS
let usernameText = '' // Pretend we stripped this from some input box in the html

// How to do we check if it's not empty
if (usernameText){
    console.log("Value exists since string is truthy")
} else{
    console.log("No username has been entered")
}

console.log(`---------------------------`)

// Type Coercion
// Since JS is loosely typed it will attempt to convert types when dealing with operations between differing types
// Because of this, there are actually 2 conditionals to check equality and not 1

// ==
// Performs Type Coercion (will attempt to convert between types before checking for equality)

console.log(5 == "5")

// ===
// Preforms strict comparison (will make sure the datatypes and values are equal)
console.log(5 === "5")

// This type coercion stuff needs to be watched carefully, otherwise you'll end up in some of the weird limbo spots that sometimes occur with JS
console.log(true + true + true)



// Hoisting
// Hoisting basically refers to how functions and variable declarations (not assignment tho) get "hoisted" to the top of their scope
// What does this mean?

toBeHoisted()

function toBeHoisted(){
    console.log("This function has been hoisted!")
}

