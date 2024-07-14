let randomNumber;
let attempts;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').innerText = '';
    document.getElementById('guess').value = '';
    document.getElementById('guess').disabled = false;
}

function checkGuess() {
    const userGuess = Number(document.getElementById('guess').value);
    attempts++;

    if (userGuess < 1 || userGuess > 100) {
        document.getElementById('result').innerText = 'Please enter a number between 1 and 100.';
    } else if (userGuess < randomNumber) {
        document.getElementById('result').innerText = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        document.getElementById('result').innerText = 'Too high! Try again.';
    } else {
        document.getElementById('result').innerText = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById('guess').disabled = true;
    }
}

// Start the game when the page loads
window.onload = startGame;
