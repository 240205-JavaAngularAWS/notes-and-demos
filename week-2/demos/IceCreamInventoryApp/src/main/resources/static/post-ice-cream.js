let iceCreamInput = document.getElementById('flavor-input')
let diaryFreeInput = document.getElementById('dairy-free-input')
let submitButton = document.getElementById('new-flavor-button')

async function submitNewFlavor(){

    let flavorName = iceCreamInput.value
    let dairyFree = diaryFreeInput.value

    // We'll form an object and get it ready to be sent off to the database
    let iceCreamObject = {
        flavor: flavorName,
        scoopsAvailable: 50,
        dairyFree: dairyFree == "true" ? true : false
    }

    console.log(iceCreamObject)

    // Now that we're learning fetch we can attempt to POST this flavor
    let req = await fetch("http://localhost:8080/icecream", {
        // This object is going to contain information about the request to send the appropriate one to our spring boot backend
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(iceCreamObject)
    }); 
    // You can customize this request to send PUT or DELETE requests as well to the appropriate target if you wanted
    let res = await req.json();

    console.log(res) // Notice the difference to the printed object from line 20. This should have an Id field now that the DB has created an ID for us

    // Let's imagine if you will that we're not creating ice cream flavors but instead logging a user in. How do we store the active user?
    sessionStorage.setItem("username", `${res.flavor}`)
    // NOTE: You could also use local storage if you wanted as well
    

    // Also we can redirect after the request
    window.location.href = "index.html"
}

// We need to tie this function the the submit button itself
submitButton.addEventListener('click', submitNewFlavor)




