const form = document.querySelector(".signUpForm");
const fisrtName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const phoneNm = document.querySelector(".phoneNumber");
const firstPassowrd = document.querySelector(".firstPassword");
const confirmPassowrd = document.querySelector(".confirmPassword");

const firstNameError = document.querySelector(".firstNameError");
const lastNameError = document.querySelector(".lastNameError");
const emailError = document.querySelector(".emailError");
const phoneNumberError = document.querySelector(".phoneNumberError");
const firstPassowrdError = document.querySelector(".firstPasswordError");
const confirmPassowrdError = document.querySelector(".confirmPasswordError");


form.addEventListener("submit", validateForm);

function validateForm(e) {
    let firstNameMsg = [];
    let lastNameMsg = [];
    let emailMsg = [];
    let phoneNmMsg = [];
    let firstPwdMsg = [];
    let confirmPwdMsg = [];

    if (fisrtName.value === "" || fisrtName.value === null) {
        firstNameMsg.push("First name is required");
    }

    if (lastName.value === "" || lastName.value === null) {
        lastNameMsg.push("Last name is required");
    }

    if (email.value === "" || email.value === null) {
        emailMsg.push("Email is required");
    }

    if (phoneNm.value === "" || phoneNm.value === null) {
        phoneNmMsg.push("Phone number is required");
    }

    if (firstPassowrd.value === "" || firstPassowrd.value === null) {
        firstPwdMsg.push("Password is required");
    }

    if (confirmPassowrd.value === "" || confirmPassowrd.value === null) {
        confirmPwdMsg.push("Password is required");
    }

    if (firstNameMsg.length > 0) {
        e.preventDefault()
        firstNameError.textContent = firstNameMsg;
        firstNameMsg.length = 0;
    }

    if (lastNameMsg.length > 0) {
        e.preventDefault()
        lastNameError.textContent = lastNameMsg;
    }

    if (emailMsg.length > 0) {
        e.preventDefault()
        emailError.textContent = emailMsg;
    }

    if (phoneNmMsg.length > 0) {
        e.preventDefault()
        phoneNumberError.textContent = phoneNmMsg;
    }

    if (firstPwdMsg.length > 0) {
        e.preventDefault()
        firstPassowrdError.textContent = firstPwdMsg;
    }

    if (confirmPwdMsg.length > 0) {
        e.preventDefault()
        confirmPassowrdError.textContent = confirmPwdMsg;
    }
}   
