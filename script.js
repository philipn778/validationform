const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkbox = document.getElementById('terms');
const repeatPassword = document.getElementById('repeatPassword');
const form = document.getElementById('validationForm');
const errorElement = document.getElementById('errorMessage');
const user = firstName.value + lastName.value + email.value + password.value;

form.addEventListener('submit', (e) => {
    let messages = []

    if (firstName.value === '' || firstName.value == null) {
        console.log('First name is required');
    } else {
        console.log('Success.');
    };

    if (lastName.value === '' || lastName.value == null) {
        console.log('last name is required');
    } else {
        console.log('Success.');
    };

    if (email.value === '' || email.value == null) {
        console.log('Email is required');
    } else {
        console.log('Success.');
    };

    if(checkbox.checked == false) {
        console.log('Accept terms and conditions');
    } else {
        console.log('Success.');
    };

    if (password.value.length <= 6) {
        console.log('Password must be longer than 6 characters');
        };

    const user = firstName.value + lastName.value +  email.value + password.value;

    if (repeatPassword.value === '' || repeatPassword.value == null) {
        console.log('Password must match');
    } else {
        console.log(user);
    };

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    } else {
        e.preventDefault();
    }; 

    })