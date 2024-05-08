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
    
    resultsElement.innerHTML = ''; // Clear previous content
    animationElement.textContent = '🔄'; // Display spinning icon
    animationElement.classList.add('spinning'); // Optional: use a CSS class for animation

    setTimeout(() => {
        const computerMove = moves[Math.floor(Math.random() * moves.length)];
        
        let resultText;
        if (playerMove === computerMove) {
            resultText = "It's a tie!";
        } else if (rules[playerMove].includes(computerMove)) {
            resultText = `You win! ${playerMove} beats ${computerMove}`;
            playerScore++;
        } else {
            resultText = `You lose! ${computerMove} beats ${playerMove}`;
            computerScore++;
        }

        // Create images for player and computer moves
        const playerImg = `<img src="img${moves.indexOf(playerMove) + 1}.jpg" alt="${playerMove}" class="move-img">`;
        const computerImg = `<img src="img${moves.indexOf(computerMove) + 1}.jpg" alt="${computerMove}" class="move-img">`;

        // Display images with "VS" between them
        resultsElement.innerHTML = `${playerImg} <span>VS</span> ${computerImg}`;
        
        // Update scores
        document.getElementById('playerScore').textContent = playerScore;
        document.getElementById('computerScore').textContent = computerScore;

        // Stop animation
        animationElement.classList.remove('spinning');
        animationElement.textContent = '';
    }, 1500); // 1.5 seconds delay
}
