// Another interesting piece of things we can do in TS include enums
// Enums are like enums in Java, where they're essentially just a list of constant values that can be used to provide more specific info

enum Roles {
    // There are two major types of enums in TS
    // Number enums
    // String enums

    // Number enums are constants that can be resolved to a number value
    // String enums are more for string value

    Customer = 1, // Implicitly the first value is 0, it will auto increment after the first value
    Teller, // Should be equal to 2
    Admin // Should be equal to 3
}

function printRoleNumber(role: Roles) : void {

    console.log(role)
}

// Now to actually call this function
printRoleNumber(Roles.Customer) // 1
printRoleNumber(Roles.Admin) // 3

printRoleNumber(Roles['Teller']) // 2


// Situations where this might be useful
// Status Codes
enum StatusCodes {
    OK = 200,
    CREATED, // 201
    BAD_REQUEST = 400,
    UNAUTHORIZED, // 401
    PAYMENT_REQUIRED, // 402
    FORBIDDEN, // 403
    NOT_FOUND // 404
}

// Here we've add in an enum that can be used over and over to hold the representation of a status code

function testStatusCode(code: StatusCodes): boolean{
    console.log(code)
    if (code< 400){
        return false;
    } else{
        return true;
    }
}

console.log(`Is this an error code? ${testStatusCode(StatusCodes.NOT_FOUND)}`)


// String enums

// String enums are useful ways to store constant strings that get used over and over
enum Directions{
    North = "UP",
    South = "DOWN",
    East = "RIGHT",
    West = "LEFT"
}

// So string enums are useful ways to store common strings that may need to be reused and updated in one specific location
// String enums unfortunately do not provide the same auto increment feature but they have a different use case anyhow so it doesn't matter too much