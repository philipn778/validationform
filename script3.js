const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkbox = document.getElementById('terms');
const repeatPassword = document.getElementById('repeatPassword');
const form = document.getElementById('validationForm');
const errorElement = document.getElementById('errorMessage');

form.addEventListener('submit', (e) => {
    let errors = []

    if (firstName.value.trim() === '' || firstName.value.trim() == null) {
        console.log('First name is required'); 
        errors.push('FirstName');
    } else {
        console.log('FirstName Success.');
    };

    if (lastName.value.trim() === '' || lastName.value.trim() == null) {
        console.log('last name is required');
        errors.push('LastName');
    } else {
        console.log('LastName Success.');
    };

    if (email.value.trim() === '' || email.value.trim() == null) {
        console.log('Email is required');
        errors.push('email');
    } else {
        console.log('Email Success.');
    };

    if(checkbox.checked == false) {
        console.log('Accept terms and conditions');
        errors.push('TermsAndConditions');
    } else {
        console.log('Checkbox Success.');
    };

    if (password.value.trim().length <= 6) {
        console.log('Password must be longer than 6 characters');
        errors.push('PasswordLength');
        }; 

        const user = {
            firstName: firstName.value, 
            lastName: lastName.value,
            email: email.value,
            password: password.value,
            repeatPassword: repeatPassword.value,
        };

    if (repeatPassword.value.trim() == password.value.trim()) {
        console.log('PasswordMatch Success.');
    } else {
        console.log('Password must match');
        errors.push('PasswordMatch');
    }

    if (errors.length > 0) {
        console.log('FORM NOT VALID.');
      } else {
        console.log('FORM IS VALID.', user);
      };

    if (errors.length > 0) {
        e.preventDefault();
        errorElement.innerText = errors.join(', ');
    } else {
        errorElement.innerText = 'Alla fält är korrekta!';
        e.preventDefault();
    }; 

})