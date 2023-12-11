import { phrases3, phrases4 } from "./question-hot.js";
// -------- hot --------- //
let phrase2 = document.querySelector('.phrase2');

const but3 = document.querySelector('.btn-true-hot');
  but3.addEventListener('click', function() {

    let element = document.querySelector('.question-content-card');
    element.classList.remove('question-red');
    element.classList.add('question-blue');

    let rand = phrases3.splice(Math.floor(Math.random() * phrases3.length), 1);
    phrase2.innerText = rand;
  });

const but4 = document.querySelector('.btn-action-hot');
  but4.addEventListener('click', function() {

    let element = document.querySelector('.question-content-card');
    element.classList.remove('question-blue');
    element.classList.add('question-red');

    let rand = phrases4.splice(Math.floor(Math.random() * phrases4.length), 1);
    phrase2.innerText = rand;
  });  
// -------- / hot --------- //



  