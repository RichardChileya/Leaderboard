// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

/*
function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
*/

const scores = [
  {
    Name: 'Name',
    score: 100,
  },
  {
    Name: 'Name',
    score: 20,
  },
  {
    Name: 'Name',
    score: 50,
  },
  {
    Name: 'Name',
    score: 78,
  },
  {
    Name: 'Name',
    score: 125,
  },
  {
    Name: 'Name',
    score: 100,
  },
  {
    Name: 'Name',
    score: 77,
  },
  {
    Name: 'Name',
    score: 42,
  },
];

scores.forEach((val) => {
  const scoreContainer = document.querySelector('.score-container');
  const divElement = document.createElement('div');
  divElement.className = 'score-item';
  divElement.innerHTML = `
  <div class = "scoreItems">
      
      <span>${val.Name}<span/>
      <span>${val.score}<span/>
  
  </div>
  `;
  scoreContainer.appendChild(divElement);
});