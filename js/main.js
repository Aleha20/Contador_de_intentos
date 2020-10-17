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
    writeAnswer.innerHTML = 'El número debe estar entre 1 y 100'; // lo imprime en la web
    console.log('número muy grande o muy pequeño'); //esto lo  imprime por consola
  } else if (userNumber > randomNumber) {
    writeAnswer.innerHTML = 'Demasiado alto'; // lo imprime en la web
    console.log('pasa por aquí'); //esto lo  imprime por consola
  } else if (userNumber < randomNumber) {
    writeAnswer.innerHTML = 'Demasiado bajo'; // lo imprime en la web
    console.log('era otro numero'); //esto lo  imprime por consola
  } else if ((userNumber = randomNumber)) {
    writeAnswer.innerHTML = 'Has ganado campeona!!'; // lo imprime en la web
    console.log('entra por aquí'); //esto lo  imprime por consola
  }
}
// tryBtn.addEventListener('click', conectRandomNumber);
// estos eventos los comento porque solo me valen para probar que mi
// funcion está trabajando correctamente

let getClickAttemps = 0;

function getAttemps() {
  getClickAttemps += 1;
  counterAttemps.innerHTML = getClickAttemps;
}
// tryBtn.addEventListener('click', getAttemps);
// estos eventos los comento porque solo me valen para probar que mi
// funcion está trabajando correctamente

function handleClick() {
  conectRandomNumber();
  getAttemps();
}
tryBtn.addEventListener('click', handleClick);
