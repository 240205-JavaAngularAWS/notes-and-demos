"use strict";
// Here is a vlid TS file
// Just as a reminder, TypeScript is a superset of JavaScript, meaning all JS is valid TS
let sampleVariable = "Hello World!";
sampleVariable = "Another String!";
// Other data types to know about
// Boolean
// number
// undefined
// null
// any 
// void 
// enums 
// tuples (talk later)
// Arrays
// Never 
let sampleNumber = 5;
console.log(sampleNumber);
// We've been explicit about our types so far, but TS also has implicit type assignment built in
let x = true;
console.log(x);
// So the main idea of using TS is to essentially use JavaScript but be more mindful of types
// This gives us a variety of advantages
// One is that it eliminates (or at least mitigates) so of the more quirky features of JS
// Another thing that's nice is implicit intellisense everywhere (since we know what the type of the object is, we can use autofill to complete fields)
// Let's try looking at special types like UNION types
// So sometimes you'll run into a situation where you need a variable to have the ability to exist in more than just one type (i.e. maybe a number and a boolean)
// How do we tell TS to handle something like that?
let boolOrNumber = true;
boolOrNumber = 2;
boolOrNumber = false;
// There is also the possibility to avoid this type checking entirely by setting the datatype to any
let anyDataTypeVariable = "I'm currently a string";
anyDataTypeVariable = 51;
anyDataTypeVariable = false;
anyDataTypeVariable = "Wow look at all the datatypes I can be!";
// Let's move on to type aliases and interfaces
// Let's first create a function
function myFirstFunction(message) {
    console.log(message);
}
// Let's imagine we have a function that takes in a more complex data type
// Maybe we have a method for sending an automated offer letter to some email
function sendOfferLetter(emailObject) {
    console.log(`Hello ${emailObject.email}, welcome to our company. We're excited to have you onboarding as our new ${emailObject.position}. ` +
        `Your starting salary is ${emailObject.salary}`);
}
// To utilize a function like this I'll have to pass in some sort of object that obeys the parameters' specifications
let sampleEmailObject = {
    email: "bryguy1234@example.com",
    position: "Java Full Stack Developer",
    salary: 80000
};
// So now we should be able to pass this object to the sendOfferLetter method and go from there
sendOfferLetter(sampleEmailObject);
// If I try to create another object without that proper shape it should not let me call the function itself
let wrongEmailObject = {
    name: "Bryan",
    opportunity: "Java Full Stack Developer",
    email: "bryguy1234@example.com"
};
// We can leverage this guy and make it so we're abiding by proper datatype constraints
let emailTypeAlias = {
    email: "john@emaple.edu",
    position: "Calc Teacher",
    salary: 60000
};
// I can also use Type Aliases in functions
function sendDifferentOfferLetter(emailObject) {
    console.log(emailObject.position);
}
sendDifferentOfferLetter(emailTypeAlias);
// I was always taught to not ask ages
// So maybe I should want to set this up to where it has the capability to hold age but not the necessity
// Now that we have this interface we have essentially declared a way to create a person
let p1 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 26,
    isMarried: false
};
let p2 = {
    firstName: "",
    lastName: ""
};
p2.isMarried = true;
function questionnaire(fullName, age, isMarried) {
    // Here you could imagine we might split the fullName into first and last name and then construct a new person
    return {
        firstName: fullName,
        lastName: fullName,
        age: age,
        isMarried: isMarried
    };
}
