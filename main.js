"use strict";
let numberElement = document.querySelector(".js-type__number");
let writeNumberElement = document.querySelector(".write-number");
let attemptsElement = document.querySelector(".number__tried");
let btnTry = document.querySelector(".form__button");

function randomNumber() {
  let randomNumber = Math.ceil(Math.random() * 100);
  console.log(Math.ceil(Math.random() * 100));
}

// function getRandomNumber(min, max) {
//   return Math.ceil(Math.random() * 100);
//   console.log(getRandomNumber);
// }

btnTry.addEventListener("click", randomNumber);
