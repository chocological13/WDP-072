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
    });

    // Populate form with existing data
    document.querySelector('#inputName').value = profileData.name.textContent;
    document.querySelector('#inputTitle').value = profileData.title.textContent;
    document.querySelector('#inputAvailability').value = profileData.availability.textContent;
    document.querySelector('#inputAge').value = profileData.age.textContent;
    document.querySelector('#inputLocation').value = profileData.location.textContent;
    document.querySelector('#inputExp').value = profileData.exp.textContent;
    document.querySelector('#inputEmail').value = profileData.email.textContent;
})

// Get profile elements, use array and loop?
    let profileData = {
        name: document.querySelector('#yourName'),
        title: document.querySelector('#title'),
        availability: document.querySelector('#availability'),
        age: document.querySelector('#age'),
        location: document.querySelector('#location'),
        exp: document.querySelector('#exp'),
        email: document.querySelector('#email')
    };

// Get form elements
const form = document.querySelector('form');

// Event listener for form submissions
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form input values - change this, use array and loop instead
    const yourName = document.querySelector('#inputName').value;
    const title = document.querySelector('#inputTitle').value;
    const availability = document.querySelector('#inputAvailability').value;
    const age = document.querySelector('#inputAge').value;
    const location = document.querySelector('#inputLocation').value;
    const exp = document.querySelector('#inputExp').value;
    const email = document.querySelector('#inputEmail').value;

    // Form validation - alert if not complete   

    // Update existing data with new data
    profileData.name.textContent = yourName;
    profileData.title.textContent = title;
    profileData.availability.textContent = availability;
    profileData.age.textContent = age;
    profileData.location.textContent = location;
    profileData.exp.textContent= exp;
    profileData.email.textContent = email;

    // Reset form
    form.reset();

    // Disables the form again
    input.forEach(input => {
        input.setAttribute('disabled', true);
    });

});
