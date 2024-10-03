let player1Choice = '';
let player2Choice = '';
let round = 1;
let player1Score = 0;
let player2Score = 0;
let maxRounds = 6;

function startGame() {
    const player1Name = document.getElementById('player1-name').value;
    const player2Name = document.getElementById('player2-name').value;

    if (!player1Name || !player2Name) {
        alert('Please enter names for both players!');
        return;
    }

    document.getElementById('player1-display').innerText = player1Name;
    document.getElementById('player2-display').innerText = player2Name;

    document.getElementById('game-panel').style.display = 'block';
}

function playerChoice(player, choice) {
    if (player === 1) {
        player1Choice = choice;
    } else {
        player2Choice = choice;
    }

    if (player1Choice && player2Choice) {
        determineWinner();
    }
}

function determineWinner() {
    let resultText = '';
    if (player1Choice === player2Choice) {
        resultText = "It's a tie!";
    } else if (
        (player1Choice === 'stone' && player2Choice === 'scissors') ||
        (player1Choice === 'scissors' && player2Choice === 'paper') ||
        (player1Choice === 'paper' && player2Choice === 'stone')
    ) {
        resultText = 'Player 1 wins this round!';
        player1Score++;
    } else {
        resultText = 'Player 2 wins this round!';
        player2Score++;
    }

    document.getElementById('player1-score').textContent = player1Score;
    document.getElementById('player2-score').textContent = player2Score;
    document.getElementById('round-result').textContent = resultText;

    player1Choice = '';
    player2Choice = '';
    round++;

    if (round > maxRounds) {
        declareFinalWinner();
    } else {
        document.getElementById('round-number').textContent = round;
    }
}

function declareFinalWinner() {
    let finalResult = '';
    if (player1Score > player2Score) {
        finalResult = 'Player 1 wins the game!';
    } else if (player2Score > player1Score) {
        finalResult = 'Player 2 wins the game!';
    } else {
        finalResult = "It's a tie!";
    }
    document.getElementById('round-result').textContent = finalResult;
    document.querySelectorAll('.choice').forEach(button => button.disabled = true);

    saveGameResult();
}

function saveGameResult() {
    // Logic to send game result to the server (backend)
    // Use fetch() or XMLHttpRequest to send game data (e.g., player names, scores) to backend Java server.
}
