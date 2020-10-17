'use strict';

const inputNumber = document.querySelector('.js-type-number');
const tryBtn = document.querySelector('.js-try-btn');
const writeAnswer = document.querySelector('.js-write-try');
const counterAttemps = document.querySelector('.js-attemps');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let randomNumber = getRandomNumber(100);
console.log(randomNumber);

function conectRandomNumber(event) {
  let userNumber = inputNumber.value;
  userNumber = parseInt(inputNumber.value);
  if (userNumber < 1 || userNumber > 100) {
    writeAnswer.innerHTML = 'El número debe estar entre 1 y 100';
    console.log('número muy grande o muy pequeño');
  } else if (userNumber > randomNumber) {
    writeAnswer.innerHTML = 'Demasiado alto';
    console.log('pasa por aquí');
  } else if (userNumber < randomNumber) {
    writeAnswer.innerHTML = 'Demasiado bajo';
    console.log('era otro numero');
  } else if ((userNumber = randomNumber)) {
    writeAnswer.innerHTML = 'Has ganado campeona!!';
    console.log('entra por aquí');
  }
}

let getClickAttemps = 0;

function getAttemps() {
  getClickAttemps += 1;
  counterAttemps.innerHTML = getClickAttemps;
}

function handleClick() {
  conectRandomNumber();
  getAttemps();
}
tryBtn.addEventListener('click', handleClick);
