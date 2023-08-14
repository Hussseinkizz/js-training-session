'use strict';

// get all refrences to DOM elements
const createAccountForm = document.querySelector('#createAccountForm');
const PhoneNumberInput = document.querySelector('#phoneNumberInput');
const PasswordInput = document.querySelector('#passwordInput');
const FormSubmitButton = document.querySelector('#submitButton');
const phoneErrorMessage = document.querySelector('#phoneNumberErrorMessage');
const PasswordErrorMessage = document.querySelector('#passwordErrorMessage');

// prevent defualt form behavior
createAccountForm.addEventListener('submit', function (event) {
  event.preventDefault();
});

// manage form data
let formData = {};

PhoneNumberInput.addEventListener('input', function () {
  let inputValue = PhoneNumberInput.value;
  let isNotNumber = isNaN(Number(inputValue));
  if (isNotNumber) {
    alert('Non Numbers not Allowed!');
    PhoneNumberInput.value = '';
  }
  console.log(inputValue);
});
