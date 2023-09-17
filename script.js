// Made by Shikhar
'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // main code
  if (score > 1) {
    // no number
    if (!guess) {
      document.querySelector('.message').textContent = '⛔No Number!';

      // correct number
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉Correct Number!';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      // too high
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = '📈Too high!';
      score--;
      document.querySelector('.score').textContent = score;

      // too low
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '📉Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }

    //you lost
  } else {
    document.querySelector('.message').textContent = '💥You lost!';
    document.querySelector('.score').textContent = 0;
  }
});

// Again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
// EDited using github
