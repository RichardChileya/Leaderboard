// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import { addScore, getScores } from './modules/api.js';

const form = document.querySelector('.input-details');
const alert = document.querySelector('.message');
const refresh = document.querySelector('#refresh-btn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nameInput = document.querySelector('#name-input').value;
  const scoreInput = document.querySelector('#score-input').value;
  addScore(nameInput, scoreInput);
  getScores();

  if (nameInput === '' || scoreInput === '') {
    alert.innerHTML = 'Please fill in the use & score fields';
    alert.style.display = 'block';
    setTimeout(() => {
      alert.style.display = 'none';
    }, 6000);
  } else {
    alert.innerHTML = ' Score Added!! click REFRESH to show see socres';
    alert.style.display = 'block';
    alert.className = 'success';
    setTimeout(() => {
      alert.style.display = 'none';
    }, 6000);
  }
  form.reset();
});

refresh.addEventListener('click', getScores);
