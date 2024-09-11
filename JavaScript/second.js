let score = JSON.parse(localStorage.getItem('score')) || {wins: 0, losses: 0, ties: 0};
updateScoreDisplay();

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
        score.ties += 1;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
        score.wins += 1;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}.`;
        score.losses += 1;
    }

    // Save the updated score in localStorage
    localStorage.setItem('score', JSON.stringify(score));

    document.getElementById('result').innerText = result;
    updateScoreDisplay();
}

function updateScoreDisplay() {
    document.getElementById('score').innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function reset() {
    // Reset the score
    score = {wins: 0, losses: 0, ties: 0};
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreDisplay();
    document.getElementById('result').innerText = '';
}