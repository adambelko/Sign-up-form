const form = document.querySelector(".signUpForm");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const phoneNm = document.querySelector(".phoneNumber");
const firstPassword = document.querySelector(".firstPassword");
const confirmPassword = document.querySelector(".confirmPassword");

const firstNameMsg = document.querySelector(".firstNameMsg");
const lastNameMsg = document.querySelector(".lastNameMsg");
const emailMsg = document.querySelector(".emailMsg");
const phoneNumberMsg = document.querySelector(".phoneNumberMsg");
const firstPasswordMsg = document.querySelector(".firstPasswordMsg");
const confirmPasswordMsg = document.querySelector(".confirmPasswordMsg");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm()
});

function validateForm() {
    if (firstName.value === "") {
        runErrorMsg(firstNameMsg, "First name is required");
    } else {
        runValidMsg(firstNameMsg, "");
    }

    if (lastName.value === "") {
        runErrorMsg(lastNameMsg, "Last name is required");
    } else {
        runValidMsg(lastNameMsg, "");
    }

    if (email.value === "") {
        runErrorMsg(emailMsg, "Email is required");
    } else if (validateEmail(email.value) === false) {
        runErrorMsg(emailMsg, "Incorrect email format")
    } else {
        runValidMsg(emailMsg, "");
    }

    if (phoneNm.value === "") {
        runErrorMsg(phoneNumberMsg, "Phone number is required");
    } else if (!validatePhoneNm(phoneNm.value)) {
        runErrorMsg(phoneNumberMsg, "Phone number must contain numbers only");        
    } else {
        runValidMsg(phoneNumberMsg, "");
    }

    if (firstPassword.value === "") {
        runErrorMsg(firstPasswordMsg, "Password is required");
    } else {
        runValidMsg(firstPasswordMsg, "");
    }

    if (confirmPassword.value === "") {
        runErrorMsg(confirmPasswordMsg, "Password is required");
    } else if (firstPassword.value !== confirmPassword.value) {
        runErrorMsg(firstPasswordMsg, "Passwords does not match");    
        runErrorMsg(confirmPasswordMsg, "");    
    } else {
        runValidMsg(firstPassword, "");
    }
}

function runErrorMsg(input, message) {
    console.log(input)
    console.log(message)
    input.innerText = message;
}

function runValidMsg(input, message) {
    input.innerText = message;
}

function validateEmail(input) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return isValid = (input.match(validRegex)) ? true : false;
}

function validatePhoneNm(input) {
    const num = /^[0-9]+$/.test(input)
    return isValid = (num === true) ? true : false;
}