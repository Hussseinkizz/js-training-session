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

PhoneNumberInput.addEventListener('change', function () {
  let inputValue = PhoneNumberInput.value;
  // 3. should be numbers
  // 0704353301, +256754599523 (13), 256754599523 (12), 1234567890
  // 1. phone should not be less than 10 digits but also not greater than 13
  // if (inputValue.length >= 10 && inputValue.length <= 12) {
  phoneErrorMessage.style.display = 'none';
  PhoneNumberInput.classList.add('border-gray-300');
  PhoneNumberInput.classList.remove('border-red-300');

  if (inputValue.startsWith('07') && inputValue.length === 10) {
    // console.log('valid number');
  } else {
    if (inputValue.startsWith('256') && inputValue.length === 12) {
      // console.log('valid number');
    } else {
      PhoneNumberInput.classList.remove('border-gray-300');
      PhoneNumberInput.classList.add('border-red-300');
      phoneErrorMessage.style.display = 'flex';
    }
  }
});
