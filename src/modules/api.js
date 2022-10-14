import Scores from './scores.js';

const display = (gameData) => {
  const gameScore = document.querySelector('.score-container');
  gameScore.innerHTML = '';
  gameData.sort((a, b) => a.score - b.score);
  const displayScores = gameData.map((list) => `<h2 class ='scoreList'>${list.user}: ${list.score} </h2>`).join('');
  gameScore.innerHTML = displayScores;
};

const addScore = async (user, score) => {
  const scoreUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const url = `${scoreUrl}games/`;
  const gameID = 'TxZJWGnmYnPWmpSwkqWN';
  const playloadObject = new Scores(user, score);
  const response = await fetch(`${url}${gameID}/scores/`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(playloadObject) });
  const gameData = await response.json();
  return gameData;
};

const getScores = async () => {
  const scoreUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const url = `${scoreUrl}games/`;
  const gameID = 'TxZJWGnmYnPWmpSwkqWN';
  const response = await fetch(`${url}${gameID}/scores/`);
  const gameData = await response.json();
  if (response.ok) {
    display(gameData.result);
  }
};

export { addScore, getScores };