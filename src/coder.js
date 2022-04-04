/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable quotes */
const btnSwitch = document.querySelector("#content-switcher-1");
const btnSwitch2 = document.querySelector("#content-switcher-2");
const testinomialOne = document.querySelector(".testinomial-one");
const testinomialSecond = document.querySelector(".testinomial-second");

function fn(event) {
  if (event.target.matches("img")) {
    testinomialOne.classList.toggle("display-none");
    testinomialSecond.classList.toggle("display-none");
  }
  if (event.keyCode === 37 || event.keyCode === 39) {
    testinomialOne.classList.toggle("display-none");
    testinomialSecond.classList.toggle("display-none");
  }
}

btnSwitch.addEventListener('click', fn);
btnSwitch2.addEventListener('click', fn);
window.addEventListener("keydown", fn);
