"use strict";
let numberElement = document.querySelector(".js-type__number");
let writeNumberElement = document.querySelector(".write-number");
let attemptsElement = document.querySelector(".number__tried");
let btnTry = document.querySelector(".form__button");

function getNumberElement() {
  let getNumberElement = numberElement.value;
  console.log(getnumberElement);
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

btnTry.addEventListener("click", getNumberElement);
