let inventory = [];

let iceCreamContainer = document.getElementById('IceCreamContainer')
console.log(iceCreamContainer)


// This function is the same from the DOM-manip.js file, just adding in one new line to reset the container everytime we filter
function populateFlavors(inventory){

    // This is us emptying the container before we attempt to refill it
    iceCreamContainer.innerHTML = ""

    for (iceCream of inventory){

        let iDiv = document.createElement('div')

        iDiv.innerHTML = `
            <h2> ${iceCream.flavor} </h2>
            <p> Scoops available: ${iceCream.scoopsAvailable} </p>
            <p> Dairy Free: ${iceCream.dairyFree ? "Yes" : "No"} </p>
        `

        iDiv.setAttribute('class', 'ice-cream')
        iDiv.setAttribute('id', `${iceCream.flavor}`)

        if (iceCream.flavor == "Chocolate"){
            iDiv.setAttribute('style', 'background-color: tan;')
        }

        iDiv.setAttribute('onclick', "updateStyling(event)")

        iceCreamContainer.append(iDiv)
    }
}



// We'll attempt to send a GET Request to our backend to get the ice cream inventory info
// We'll first create an async function that will let JS know that the web api needs to handle it


(async () => {
    // API calls take time and we want to let JS know that it can start this method and then come back later for the resolved response
    
    let data = await fetch("http://localhost:8080/icecream")
    // Just calling fetch like this implicity sends a GET request to the resource mentioned
    // To get the response, we need to parse it into JSON
    // Then we'll store it and call our populate function

    // data
    //     .then((data) => data.json())
    //     .then((res) => console.log(res))
    //     .catch((error) => console.log("There was an error with the fetch request!"))

    // At this point we were able to resolve our promise and get the information that we wanted.
    // I'm gonna refactor this function not use the await keyword

    // AWAIT is a keyword that works in conjuction with asynchronous functions and essentially says "wait for this to be resolved before continuing"
    // This is useful for creating fetch requests with a bit cleaner syntax and can make it nice for variables
    // NOTE: AWAIT can only be used within ASYNC functions

    let res = await data.json() // Different syntax, same thing as before

    // Now we have the json data stored in a variable can do something with it
    inventory = res;

    populateFlavors(inventory)
})();


// We added the following method in to allow us to filter our results based off of the 'dairyFree' property

function checkBoxChange(){
    
    let dropDownValue = document.getElementById("dairy-free-input").value

    if (dropDownValue == "all"){
        populateFlavors(inventory)
    } else if (dropDownValue == "true"){
        populateFlavors(inventory.filter((x) => {
            if (x.dairyFree == true){
                return true
            } else{
                return false
            }
        }))
    } else{
        populateFlavors(inventory.filter((x) => {
            if (x.dairyFree == true){
                return false
            } else{
                return true
            }
        }))
    }
}

