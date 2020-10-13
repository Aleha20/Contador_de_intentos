"use strict";
let numberElement = document.querySelector(".js-type__number");
let writeNumberElement = document.querySelector(".write-number");
let attemptsElement = document.querySelector(".number__tried");
let btnTry = document.querySelector(".form__button");

// writeNumberElement.innerHTML = writeNumberElement.innerHTML + "Demasiado bajo";

function randomNumber() {
  let randomNumber = Math.ceil(Math.random() * 100);
  console.log(Math.ceil(Math.random() * 100));
  //   if (randomNumber < 1) {
  //     writeNumberElement.classlist.add("write-number");
  //   }
}

btnTry.addEventListener("click", randomNumber);

//dejo comentado lo que sé que no funciona
//He conseguido que me salga el
