"use strict";
// Another interesting piece of things we can do in TS include enums
// Enums are like enums in Java, where they're essentially just a list of constant values that can be used to provide more specific info
var Roles;
(function (Roles) {
    // There are two major types of enums in TS
    // Number enums
    // String enums
    // Number enums are constants that can be resolved to a number value
    // String enums are more for string value
    Roles[Roles["Customer"] = 1] = "Customer";
    Roles[Roles["Teller"] = 2] = "Teller";
    Roles[Roles["Admin"] = 3] = "Admin"; // Should be equal to 3
})(Roles || (Roles = {}));
function printRoleNumber(role) {
    console.log(role);
}
// Now to actually call this function
printRoleNumber(Roles.Customer); // 1
printRoleNumber(Roles.Admin); // 3
printRoleNumber(Roles['Teller']); // 2
// Situations where this might be useful
// Status Codes
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["CREATED"] = 201] = "CREATED";
    StatusCodes[StatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCodes[StatusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    StatusCodes[StatusCodes["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    StatusCodes[StatusCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    StatusCodes[StatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND"; // 404
})(StatusCodes || (StatusCodes = {}));
// Here we've add in an enum that can be used over and over to hold the representation of a status code
function testStatusCode(code) {
    console.log(code);
    if (code < 400) {
        return false;
    }
    else {
        return true;
    }
}
console.log(`Is this an error code? ${testStatusCode(StatusCodes.NOT_FOUND)}`);
// String enums
// String enums are useful ways to store constant strings that get used over and over
var Directions;
(function (Directions) {
    Directions["North"] = "UP";
    Directions["South"] = "DOWN";
    Directions["East"] = "RIGHT";
    Directions["West"] = "LEFT";
})(Directions || (Directions = {}));
// So string enums are useful ways to store common strings that may need to be reused and updated in one specific location
// String enums unfortunately do not provide the same auto increment feature but they have a different use case anyhow so it doesn't matter too much
