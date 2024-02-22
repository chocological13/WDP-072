// Set the stage for input
// Get the labels and edit button element
const input = document.querySelectorAll('input');
const editButton = document.querySelector('#editButton');

// Disable the input initially
input.forEach(input => {
    input.setAttribute('disabled', true);
})

// Add a click event listener to the button
editButton.addEventListener('click', function() {
    // Enable the input when the edit button is clicked
    input.forEach(input => {
        input.removeAttribute('disabled');
    })
})

// Get elements from profile card

// Use array and loop to get those elements
let profileData = {};

    // Create array of IDs
let ids = ['#yourName', '#title', '#availability', '#age', '#location', '#exp', '#email']

    // Loop through IDs to get elements
for (let i = 0; i < ids.length; i++) {
    profileData[ids[i]] = document.querySelector(ids[i]);
}

console.log(profileData); // Debugging purposes


// Get elements from form

// Create an array of IDs for the form input fields that you want to select
// Add an event listener
    // Inside create loop to get value from form
    // Asign the value to the corresponding property

const form = document.querySelector('form');
const inputIds = ['#inputName', '#inputTitle', '#inputAvailability', '#inputAge', '#inputLocation', '#inputExp', '#inputEmail'];

// Event listener
form.addEventListener('submit', function(event) {
    event.preventDefault();

    for (let i = 0; i < inputIds.length; i++) {
        const inputElement = document.querySelector(inputIds[i]);
        const inputValue = inputElement.value;
        // Store the IDs as a property name
        const inputId = inputIds[i].substring(1); // Remove the # from the IDs to store as property name i.e. inputIds.inputName, wtc.

        // replace the values of profileData
        profileData[inputId].textContent = inputValue; // Assign the input value to the corresponding property in profileData

    }

    console.log(profileData); // Debugging purposes

    form.reset(); // Reset form
});

// // Get form elements
// const form = document.querySelector('.form-control');

// // Event listener for form submissions
// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get the form input values - change this, use array and loop instead
//     const yourName = document.querySelector('#inputName').value;
//     const title = document.querySelector('#inputTitle').value;
//     const availability = document.querySelector('#inputAvailability').value;
//     const age = document.querySelector('#inputAge').value;
//     const location = document.querySelector('#inputLocation').value;
//     const exp = document.querySelector('#inputExp').value;
//     const email = document.querySelector('#inputEmail').value;

//     // Form validation - alert if not complete

//     // Update existing data with new data

//     // Reset form
//     form.reset();

// })
