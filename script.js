const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkbox = document.getElementById('terms')
const repeatPassword = document.getElementById('repeatPassword')
const form = document.getElementById('validationForm');
const errorElement = document.getElementById('errorMessage')

form.addEventListener('submit', (e) => {
    let messages = []
    if (firstName.value === '' || firstName.value == null) {
        messages.push('First name is required');
        console.log('First name is required');
    } else {
        console.log('Success.');
    }

    if (lastName.value === '' || lastName.value == null) {
        messages.push('last name is required');
        console.log('last name is required');
    } else {
        console.log('Success.');
    }

    if (email.value === '' || email.value == null) {
        messages.push('Email is required');
        console.log('Email is required');
    } else {
        console.log('Success.');
    }

    if(checkbox.checked == false) {
        messages.push('Accept terms and conditions');
        console.log('Accept terms and conditions');
    } else {
        console.log('Success.');
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters');
        console.log('Password must be longer than 6 characters');
        }

    if (repeatPassword.value === '' || repeatPassword.value == null) {
        messages.push('Password must match');
        console.log('Password must match');
    } else {
        console.log('Success. ', firstName.value, lastName.value, email.value, password.value);
        messages.push(firstName.value, lastName.value, email.value, password.value);
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    } else {
        e.preventDefault();
    } 

    })
