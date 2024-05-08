const moves = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
let playerScore = 0;
let computerScore = 0;

const rules = {
    'Scissors': ['Paper', 'Lizard'],
    'Paper': ['Rock', 'Spock'],
    'Rock': ['Lizard', 'Scissors'],
    'Lizard': ['Spock', 'Paper'],
    'Spock': ['Scissors', 'Rock']
};

function playGame(playerMove) {
    const animationElement = document.getElementById('animation');
    const resultsElement = document.getElementById('results');
    
    // Clear previous results
    resultsElement.innerHTML = '';

    // Show animation
    animationElement.classList.add('spinning');
    animationElement.textContent = '🔄';

    // Simulate computer move with delay
    setTimeout(() => {
        const computerMove = moves[Math.floor(Math.random() * moves.length)];

        // Determine result
        let resultText;
        if (playerMove === computerMove) {
            resultText = 'It\'s a tie!';
        } else if (rules[playerMove].includes(computerMove)) {
            resultText = `You win! ${playerMove} beats ${computerMove}`;
            playerScore++;
        } else {
            resultText = `You lose! ${computerMove} beats ${playerMove}`;
            computerScore++;
        }

        // Display player and computer moves
        const playerImg = `<img src="img${moves.indexOf(playerMove) + 1}.jpg" alt="${playerMove}">`;
        const computerImg = `<img src="img${moves.indexOf(computerMove) + 1}.jpg" alt="${computerMove}">`;
        
        resultsElement.innerHTML = `
            ${playerImg} VS ${computerImg}
        `;

        // Update scores
        document.getElementById('playerScore').textContent = playerScore;
        document.getElementById('computerScore').textContent = computerScore;

        // Stop animation
        animationElement.classList.remove('spinning');
        animationElement.textContent = '';
    }, 1500); // Delay for 1.5 seconds
}
