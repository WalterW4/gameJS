let randomNumber;
let attempts;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').innerText = '';
    document.getElementById('guess').value = '';
    document.getElementById('guess').disabled = false;
}
// Start the game when the page loads
window.onload = startGame;
