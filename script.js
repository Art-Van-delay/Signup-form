const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone-number');
const passwordError = document.querySelector('#password-error');
const passwordConfirmError = document.querySelector('#password-confirm-error');
const firstNameError = document.querySelector('#first-name-error');
const lastNameError = document.querySelector('#last-name-error');
const emailError = document.querySelector('#email-error');
const phoneError = document.querySelector('#phone-number-error');

firstName.addEventListener("input", function (event) {
    if (firstname.value === '') {
        firstnameError.textContent = 'Please type in your first name.';
    } else {
        firstnameError.textContent = '';
    }
});

lastname.addEventListener("input", function (event) {
    if (lastname.value === '') {
        lastnameError.textContent = 'Please type in your last name';
    } else {
        lastnameError.textContent = '';
    }
});

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        emailError.textContent = 'Please type in a valid email address';
    } else {
        emailError.textContent = '';
    }
});

phone.addEventListener("input", function (event) {
    if (phone.validity.patternMismatch) {
        phoneError.textContent = 'Please type in a valid phone number';
    } else {
        phoneError.textContent = '';
    }
});

password.addEventListener("input", function (event) {
    if (password.validity.patternMismatch) {
        const currentValue = password.value;
        const regExpCapt = /[A-Z]/g;
        const regExpDig = /[0-9]/g;
        let result = '';
        if (regExpCapt.test(currentValue)) {
            result += '';
        } else {
            result += "Missing at least 1 capital letter. ";
            result += '\n';
        }

        if (regExpDig.test(currentValue)) {
            result += '';
        } else {
            result += "Missing at least 1 number. ";
            result += '\n';
        }

        if (currentValue.length >= 8) {
            result += 'Passowrd must be at least 8 characters long.';
            result += '\n';
        } else {
            result += '';
        }
        passwordError = result;
    } else {
        passwordError.textContent = '';
    }
});

passwordConfirm.addEventListener("input", function (event) {
    if (passwordConfirm.value !== password.value) {
        passwordConfirmError.textContent = 'Passwords do not match';
    } else {
        passwordConfirmError.textContent = '';
    }
});