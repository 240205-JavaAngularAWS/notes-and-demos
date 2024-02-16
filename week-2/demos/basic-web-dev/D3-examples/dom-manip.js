// DOM Manipulation with JS is the ability for JS to dynamically render elements on the page, update elements on the page, and add functionality to elements on the page

// Let's start thinking about how we might set up a front end for our IceCream

// We need to have some ice cream objects to be represented on the page
// Eventuall we'll be receiving this from some API
let inventory = [
    {
        "id": 1,
        "flavor": "Butter Pecan",
        "scoopsAvailable": 46,
        "dairyFree": false
    },
    {
        "id": 2,
        "flavor": "Vanilla",
        "scoopsAvailable": 50,
        "dairyFree": false
    },
    {
        "id": 3,
        "flavor": "Chocolate",
        "scoopsAvailable": 45,
        "dairyFree": false
    },
    {
        "id": 4,
        "flavor": "Lemon Sorbet",
        "scoopsAvailable": 37,
        "dairyFree": true
    },
    {
        "id": 5,
        "flavor": "Rainbow Sherbet",
        "scoopsAvailable": 15,
        "dairyFree": false
    }

]

// GOAL: Add each flavor to the page dynamically
// First thing we need to do is grab our container
// There are lots of ways to do this, we can grab elements by their ID, by their className, by their CSS Selector, or by their tag

// Here since we have the id field for our container it makes sense to leverage that
let iceCreamContainer = document.getElementById('IceCreamContainer')
console.log(iceCreamContainer)

// Now that we've isolated the container we need to update the HTML inside of it to include new elements that contain our ice cream

function populateFlavors(inventory){
    // In here we'll loop over the array of ice cream flavors and add the elements dynamically

    for (iceCream of inventory){
        // First thing is to create a div to hold the icecream itself
        let iDiv = document.createElement('div')


        // We can populate the information inside an HTML element by updating its innerHTML property

        // NOTE: I'll use template literals to fill in the information in this Div
        /*
        Template literals were introduced in ES6 and allow us to inject simple JS expression into strings with a little more ease than before
        We'll mainly use this to create formatted strings where we enter variable values dynamically
        */
        iDiv.innerHTML = `
            <h2> ${iceCream.flavor} </h2>
            <p> Scoops available: ${iceCream.scoopsAvailable} </p>
            <p> Dairy Free: ${iceCream.dairyFree ? "Yes" : "No"} </p>
        `

        // Since we want to style our divs we need to add some styling
        // An easy way to this is add a class, since we expect them all to be styled similarly
        iDiv.setAttribute('class', 'ice-cream')
        iDiv.setAttribute('id', `${iceCream.flavor}`)

        if (iceCream.flavor == "Chocolate"){
            iDiv.setAttribute('style', 'background-color: tan;')
        }

        iDiv.setAttribute('onclick', "updateStyling(event)")



        console.log(iDiv)

        // We need to essentially add this to our container div to see it render on the page
        // We could update the innerHTML and just add each div on, but we can also do this with the .append method
        iceCreamContainer.append(iDiv)
    }
}

populateFlavors(inventory)


// With the event object we can change things for a specific element that we've targeted and do somethings with it
function updateStyling(event){
    console.log(`${event.target.id} was clicked!`)

    let randomColor = Math.floor(Math.random()*16777215).toString(16)
    let colorString = '#' + randomColor

    event.target.setAttribute('style', `background-color: ${colorString};`)

}






// FETCH
// Fetch allows us to send HTTP requests in a nice clean manner

// Basic Promise Syntax
let promise = new Promise(function (resolve, reject){
    // Resolve is a callback for when the promise exectues successfully
    // Reject is a callback for when the promise has an error

    const x = 5;
    const y = 3;

    if (x >= y){
        resolve(x)
    } else{
        reject();
    }
})

// We can chain this promise with different consumer functions
promise
    .then((x) => x * 2) // New value of the promise is 5*2 = 10
    .then((z) => console.log(z));

promise
    .then(() => console.log("We resolved"))
    .catch(() => console.log("There was an error so we rejected"))
    .finally(()=> console.log("This guy executes no matter what"));

// At this point we're ready to do a simple fetch request

// We'll do some things here that will need to be refactored later, but we'll give it a shot!

// We'll attempt to send a GET Request to our backend to get the ice cream inventory info
// We'll first create an async function that will let JS know that the web api needs to handle it


(async () => {
    // API calls take time and we want to let JS know that it can start this method and then come back later for the resolved response
    
    let data = fetch("http://localhost:8080/icecream")
    // Just calling fetch like this implicity sends a GET request to the resource mentioned
    // To get the response, we need to parse it into JSON
    // Then we'll store it and call our populate function

    data
        .then((data) => data.json())
        .then((res) => console.log(res))
        .catch((error) => console.log("There was an error with the fetch request!"))

})();