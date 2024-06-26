function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('open');
}

function showPopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    window.location.href = 'play.html';
}

function goToPlayPage() {
    window.location.href = "play.html"; // Redirect to the play page
}

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

    // Reset and start animation
    animationElement.textContent = '🔄';
    animationElement.classList.add('spinning'); 

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

        const playerImg = `<img src="img${moves.indexOf(playerMove) + 1}.jpg" alt="${playerMove}" class="move-img">`;
        const computerImg = `<img src="img${moves.indexOf(computerMove) + 1}.jpg" class="move-img">`;

        resultsElement.innerHTML = `${playerImg} <span>VS</span> ${computerImg}`;
        
        document.getElementById('playerScore').textContent = playerScore;
        document.getElementById('computerScore').textContent = computerScore;

        animationElement.classList.remove('spinning'); // Stop animation
    }, 1000); // 1-second delay
}
