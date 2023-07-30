"use strict";

const submitButton = document.getElementById("formsubmit");
//First Name
const firstName = document.querySelector(".first__name");
const firstNameLabel = document.querySelector(".first__name-label");
const firstNameError = document.querySelector(".first__name-error");

//Last Name
const userLastName = document.querySelector(".last__name");
const lastNameLabel = document.querySelector(".last__name-label");
const lastNameError = document.querySelector(".last__name-error");

//Email
const email = document.querySelector(".email");
const emailLabel = document.querySelector(".email-label");
const emailError = document.querySelector(".email-error");

//Password
const password = document.querySelector(".password");
const passwordLabel = document.querySelector(".password-label");
const passwordError = document.querySelector(".password-error");

const successMessage = document.querySelector(".success-msg");

let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passValidation = /^[A-Za-z]\w{7,14}$/;

let errorFunc = function () {

    if (firstName.value.length === 0) {
        firstNameLabel.textContent = "First Name cannot be empty";
        firstName.style.borderColor = "red";
        firstNameError.style.display = "inline";
    }

    if (userLastName.value.length === 0) {
        lastNameLabel.textContent = "Last Name cannot be empty";
        userLastName.style.borderColor = "red";
        lastNameError.style.display = "inline";
    }

    if (firstName.value.length > 0) {
        firstNameLabel.textContent = "";
        firstName.style.borderColor = "var(--grayish-blue)";
        firstNameError.style.display = "none";
    }

    if (userLastName.value.length > 0) {
        lastNameLabel.textContent = "";
        userLastName.style.borderColor = "var(--grayish-blue)";
        lastNameError.style.display = "none";
    }

    if (email.value.length === 0) {
        emailLabel.textContent = "Email cannot be empty";
        email.style.borderColor = "red";
        emailError.style.display = "inline";
    }

    if (!email.value.match(emailValidation) && email.value.length !== 0) {
        emailLabel.textContent = "Looks like this is not an email";
        email.style.borderColor = "red";
        emailError.style.display = "inline";
    }

    if (email.value.match(emailValidation)) {
        emailLabel.textContent = "";
        email.style.borderColor = "var(--grayish-blue)";
        emailError.style.display = "none";
    }

    if (password.value.length === 0) {
        passwordLabel.textContent = "password cannot be empty";
        password.style.borderColor = "red";
        passwordError.style.display = "inline";
    }

    if (!password.value.match(passValidation) && password.value.length !== 0) {
        passwordLabel.textContent =
            "A password must be between 7-16 characters that starts with a letter(Only letters, numbers & underscore)";
        password.style.borderColor = "red";
        passwordError.style.display = "inline";
    }

    if (password.value.match(passValidation)) {
        passwordLabel.textContent = "";
        password.style.borderColor = "var(--grayish-blue)";
        passwordError.style.display = "none";
    }

    if (
        firstName.value.length > 0 &&
        userLastName.value.length > 0 &&
        email.value.match(emailValidation) &&
        password.value.match(passValidation)
    ) {
        successMessage.textContent = "Success! Please check your email";
    } else {
        console.log("Unknown error");
    }
};

//CLick with mouse
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    errorFunc();
});

//Click with Enter
firstName.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        errorFunc();
    }
});

userLastName.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        errorFunc();
    }
});

email.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        errorFunc();
    }
});

password.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        errorFunc();
    }
});