// Arrays are similar to how Lists work in Java
// They are ordered, indexed, and dynamic in size (recall that arrays in Java are fixed in size)
// There are various methods associated with them, that we'll explore

let simpleArray = [1, "Two", false, 1]

// We already saw that we can iterate over this using a for-of loop but there are other things we can do as well

// There's another thing from functions which we didn't talk about but we'll see here

// How do we add elements to an array?
simpleArray.push(true);
// This adds the value to the end of the array

// How could we go about printing each element? Or performing some operation?
// This will end up looking very similar to how streams looked in Java

simpleArray.forEach(function(x){
    console.log(x)
});

// Here we see a function being used as a parameter for another function
// i.e. we put the function inside of the forEach function
// We should note that this is called a callback function

// Callback functions are functions that are passed to another function, they'll be used here to describe the operations we want to take on the array
simpleArray.push(4);
simpleArray.push(5);
simpleArray.push(6);

// Next we can take elements off the the front or the back of the array
// To get this first element I can use the shift method
let x = simpleArray.shift(); // Note this will REMOVE the first element => should be 1
let y = simpleArray.pop(); // This will remove the last element => should be 6

console.log(x);
console.log(y);

// Now let's define a brand new array
let numArray = [1,2,3,4,5,6,7,8];

// Let's square each number in the array
// Map is another function that takes in a callback function
// For callback functions or really most anonymous functions we can use an arrow function instead (since ES6)
// Arrow functions are almost identical to lambdas in Java just with slightly different syntax
numArray.map((num) => {
    // Here we're inside the arrow function
    return num*num
})

console.log(numArray)
// We'll notice here that the array is unchanged. Why? JS is pass by value so once the function finishes executing it won't store the information in the variables that you were 
// working with. So if we want it to save inside the array itself, we'll just have to do another assignment

numArray = numArray.map((num) => {
    // Here we're inside the arrow function
    return num*num
})

console.log(numArray)

// One more function we'll look at will be our filter function
numArray = numArray.filter((num) =>{
    // Let's check if the number is divisble by 4
    if (num % 3 == 0){
        return true;
    } else{
        return false;
    }
})

console.log(numArray)



