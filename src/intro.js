/* eslint-disable semi */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const exclamation = document.getElementsByClassName('error');
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const formError = document.getElementsByClassName('form_error');
const input = document.getElementsByTagName('input');
function formValidation (event) {
  for (i = 0; i < 4; i++) {
    input[i].classList.remove('error');
    formError[i].style.display = 'none';
    if (!email.validity.valid) {
      formError[2].style.display = 'block';
      email.classList.add('error')
      event.preventDefault()
    }
    if ((input.type != 'email' || input.type != 'submit') && input[i].value == '') {
      formError[i].style.display = 'block';
      input[i].classList.add('error');
      event.preventDefault()
    }
  }
}
form.addEventListener('submit', formValidation, false)
