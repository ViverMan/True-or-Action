import { phrases, phrases2 } from "./question-normal.js";
// -------- norma --------- //
let phrase = document.querySelector('.phrase');

const but = document.querySelector('.btn-true-norm');
if (but) {
  but.addEventListener('click', function() {

    let element = document.querySelector('.question-content-card');
    element.classList.remove('question-red');
    element.classList.add('question-blue');

    let rand = phrases.splice(Math.floor(Math.random() * phrases.length), 1);
    phrase.innerText = rand;
  });
}
const but2 = document.querySelector('.btn-action-norm');
if (but2) {
  but2.addEventListener('click', function() {

    let element = document.querySelector('.question-content-card');
    element.classList.remove('question-blue');
    element.classList.add('question-red');

    let rand = phrases2.splice(Math.floor(Math.random() * phrases2.length), 1);
    phrase.innerText = rand;
  });
}  
// -------- / norma --------- //




  