// An event is any interaction with an element on the page (click, keyboard press, drag, etc)

// We can add event listeners to our elements to allow them to do things whenever there is a specified interaction

// First thing we'll do is get out elements and store them in variables for later use

let iceCreamInput = document.getElementById('flavor-input')
let diaryFreeInput = document.getElementById('dairy-free-input')
let submitButton = document.getElementById('new-flavor-button')


// Now that we have the elements themselves we can do some work with them
// One of the most common things you might want to do is add functionality to a button we want to click on

function submitNewFlavor(){
    // We want this function to be called whenever there is a click on the button and this would most likely end up sending a POST request to our database
    // to store our new ice cream flavor

    // If we wanted to do that we should get the info from the page itself
    // We need the value for the flavor and the valuye for dairy-free

    let flavorName = iceCreamInput.value
    // Let's get the dairy free input
    let dairyFree = diaryFreeInput.value

    // We'll form an object and get it ready to be sent off to the database
    let iceCreamObject = {
        flavor: flavorName,
        scoopsAvailable: 50,
        dairyFree: dairyFree == "true" ? true : false
    }

    console.log(iceCreamObject)

    // From here we'd probably send a post request holding this info inside it
}

// We need to tie this function the the submit button itself
submitButton.addEventListener('click', submitNewFlavor)


// Other things we can do
iceCreamInput.addEventListener('keypress', printPressed)

function printPressed(event){
    // The event object allows us to see thing about what element was targeted and get more specific info about the event itself
    console.log(`Key was pressed in the flavor field: ${event.key}`)

    // You could also use this to help determine which element was clicked!
    // Refer to dom-manip.js for this part
}


function changeFunction(event){
    console.log("Dairy free was changed!")
}