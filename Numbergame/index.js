// script.js
let randomNumber;
let attempts = 10;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    startNewGame();

    document.getElementById('submitGuess').addEventListener('click', () => {
        const guess = parseInt(document.getElementById('guessInput').value);
        checkGuess(guess);
    });

    document.getElementById('playAgain').addEventListener('click', () => {
        startNewGame();
    });
});

function startNewGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 10;
    document.getElementById('attemptsLeft').textContent = attempts;
    document.getElementById('feedback').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('playAgain').style.display = 'none';
}

function checkGuess(guess) {
    if (guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }

    attempts--;

    if (guess === randomNumber) {
        document.getElementById('feedback').textContent = 'Congratulations! You guessed correctly!';
        document.getElementById('playAgain').style.display = 'inline';
        score += 10;
        document.getElementById('score').textContent = score;
    } else if (attempts === 0) {
        document.getElementById('feedback').textContent = `Sorry, you've run out of attempts. The number was ${randomNumber}.`;
        document.getElementById('playAgain').style.display = 'inline';
    } else if (guess < randomNumber) {
        document.getElementById('feedback').textContent = 'Too low. Try again!';
    } else if (guess > randomNumber) {
        document.getElementById('feedback').textContent = 'Too high. Try again!';
    }

    document.getElementById('attemptsLeft').textContent = attempts;
}

