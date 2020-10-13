"use strict";
let numberElement = document.querySelector(".js-type__number");
let writeNumberElement = document.querySelector(".write-number");
let attemptsElement = document.querySelector(".number__tried");

function getNumberElement() {
  let getNumberElement = numberElement.value;
  console.log(numberElement);
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
