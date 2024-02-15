// Arrays in Typescript are similar to how arrays are created in JS the only major difference is that we're being specific about the type in the array
let numArray : number[] = [1, 2, 3, 4, 5 ]

// There are ways to make arrays with multiple types using the union types we talked about earlier
let stringOrBoolArray : (boolean | string)[] = ["String", true, "different string", false]

// We should also note that TS gives us access to generics like Java
// We may not necessarily use them for Arrays but they'll be useful later so we'll cover them

let genericArray: Array<string | number> = ["test", "test2"]

// These function exactly like arrays in JS so we can add to them, do any of our array methods and just use them as a general data structure

// Now there is also a new type of data structure introduced through TS called a tuple
// Tuples are fixed length data structures where the type at each index is specified

// Let's imagine we want to create a tuple that holds the response from an HTTP Request
// An HTTP response is made of a few parts, like status code, headers, and body
let httpResponse : [number, string[], string];

httpResponse = [201, ["ContentType = application/json", "Authorization=username"], "{'username':'janedoe'}"]
// Tuples create structures that are multilength (but cannot grow or shrink) and the datatype is specified at each step