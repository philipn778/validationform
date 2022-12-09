const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkbox = document.getElementById('terms');
const repeatPassword = document.getElementById('repeatPassword');
const form = document.getElementById('validationForm');
const errorElement = document.getElementById('errorMessage');
let success = 1

form.addEventListener('submit', (e) => {
    let messages = []

    if (firstName.value === '' || firstName.value == null) {
        console.log('First name is required'); 
        success = 0
    } else {
        console.log('Success.');
        success = 1
    };

    if (lastName.value === '' || lastName.value == null) {
        console.log('last name is required');
        success = 0
    } else {
        console.log('Success.');
        success = 1
    };

    if (email.value === '' || email.value == null) {
        console.log('Email is required');
        success = 0
    } else {
        console.log('Success.');
        success = 1
    };

    if(checkbox.checked == false) {
        console.log('Accept terms and conditions');
        success = 0
    } else {
        console.log('Success.');
        success = 1
    };

    if (password.value.length <= 6) {
        console.log('Password must be longer than 6 characters');
        success = 0
        };

        const user = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
            repeatPassword: repeatPassword.value,
        };

    if (repeatPassword.value === password.value || repeatPassword.value == password.value) {
        console.log('Success.');
        success = 1
    } else {
        console.log('Password must match');
        success = 0
    }

    if (Boolean(success)) {
        console.log('FORM IS VALID.', user);
      } else {
        console.log('FORM NOT VALID.');
      };

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    } else {
        e.preventDefault();
    }; 

    })