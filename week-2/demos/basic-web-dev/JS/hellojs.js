/*
This is our first JS file, where we'll test the basics of JS before using it to create dynamic web pages

JavaScript (not directly related to Java) is a programming language mainly used for client side programming/logic. It can also be used in conjuction with a node runtime environment
to build servers and function as a backend language but for our purposes we'll be using it to apply logic and functionality to our webpages

Notes about JS:
High-Level (human readible and has memory management)
Dynamically and Loosely typed (don't need to declare a data type and datatypes can change as needed)
Single-Threaded (different from Java's multithreaded capabilities)
Interpreted (as opposed to Java's compiled nature, JS is compiled line by line instead of the entire file at once, this implies that it's interpreted)
Multi-Paradigmed (It has support for different programming paradigms, such as functional, OOP, etc.)

So when learning or getting into a new programming language it's often important to identify key syntax differences in the normal day-to-day stuff you'll do
*/

// Creating a variable
var x = 10;

// In JS datatypes can change dynamically so all of this is valid code
x = "Ten"
x = false
x = true
x = {
    name: "Bryan"
};

x = 10

// How do we go about printing this?
console.log(x)

// Let and Const
// EcmaScript controls the standards for JS and its versions
// Since ES6 new ways to declare variables exist, specifically using let (general variable) and const (constant variable)
// The need for this becomes more important when we talk about scopes, but for now we'll just follow best practice and start using let and const

let y = 5;
y = "Five"

const z = 6;
// z = "six" won't work because this is a constant


// Datatypes
// Just  because JS is dynamically and loosely typed doesn't mean it doesn't have data types
// Primitive types: number, boolean, string, undefined, null, BigInt, Symbol

// Numbers represent numbers (integers, decimals, positive, negative etc)
// Boolean is true/false
// String is a collection of text: "Hello World!"
// Undefined is like declaring a variable but not giving it a value
// null is the absence of a value 

// Objects
// Objects in JavaScript contain key-value pairs separated by commas
let user = {
    username: "bryanserfozo",
    password: "password"
}

// This is a JavaScript object that represents a user, notice the similarities to JSON formatting
// The reason for this is that JSON stands for JS Object Notation, basically describes how objects are writted in JS

// Control Flow Statements
// It's important to know the kinds of control flow available in a given programming language

// If-else Statment
let a = 7

if (a <= 2){
    console.log("Number is less than or equal to 2")
} else {
    console.log("Number is greater than 2")
}


// For Loop
// Syntax is very similar to java
for (let i = 1; i<= 5; i++){
    console.log("The number is " + i)
}

// When we use var, i is globally scoped meaning we can access the variable outside of the block of code (for-loop)
// BUT when we use let, i only exists within block scope meaning this is undefined out here
// Recall that let is the new standard way for defining variables
// console.log(i);

// While Loops

let bool = true
let counter = 1

while(bool){
    console.log("Counter = " + counter)
    if (counter == 10){
        bool = false
    } else{
        counter++
    }
}

// Do-while loop
// Recall that counter = 10 right now

do{
    console.log(counter)
} while (counter < 0)

// Other newer control flow statements include for-of loops and for-in loops
// These are somewhat similar to enhanced for-loops in Java

// For-Of
// Allows us to iterate over things like Arrays
// Recall an Array just holds a series of values
let simpleArray = [1,2,3,4,5]

for (let num of simpleArray){
    console.log(num*num)
}


// For-In
// Used to iterate over the properties of an object and allows us to do logic based off each one
let person = {
    name: "Kaitlyn",
    age: 25,
    isMarried: false,
    favoriteFood: "Steak"
}

// Now that I have an object I can iterate over it using the for-in loop and do stuff with the properties
for (let property in person){
    console.log(property + ": " + person[property])
    if(person[property] == "Steak"){
        person[property] = "Fish"
    }
}

console.log(person)


