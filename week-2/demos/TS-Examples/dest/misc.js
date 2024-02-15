"use strict";
// Some other things in typescript that are more of utility features to make it easier to work with include some Utility Types
// These guys end up using generics as well
// There are a couple of these utility types we can use on the interface IUser
// Partial -> Makes all fields optional
let samplePerson = {
    name: "John Smith",
    age: 27
    // Generally we'd need every field
};
let partialPerson = {
    age: 35
};
// Another utility type is readonly, which makes it so the values are readonly once they're initialized
let permanentPerson = {
    name: "Unchanged Man",
    age: 29
};
// This list is not exhaustive, check docs on TS website or RevPro for more utility classes
// Literals
// Kinda similar to how a enum might work but basically gives specific options for the value of a variable
const sampleConstant = "constant";
// sampleConstant = "non constant value"
let sampleLiteral = "hello";
// So this allows us to reassign the variable but only to the possible literal values
sampleLiteral = "hello";
// sampleLiteral = "hey"
// Why would we do this??
// This is not very useful here
function sendHttpRequest(body, method) {
    // we'd do some logic here
}
sendHttpRequest("sample body", "GET");
// sendHttpRequest("sample body", "PUT")
// By using literals we can set the specific values that can come in (or out of) to a function 
