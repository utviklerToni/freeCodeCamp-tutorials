const computerChoiceDisplay = document.getElementById('computer');
const userChoiceDisplay = document.getElementById('user');
const gameScore = document.getElementById('score');

let userChoice;
let score;

let computerChoice = document.querySelectorAll('button');

computerChoice.forEach((choice) => {
	choice.addEventListener('click', (event) => {
		user = event.target.id;
		computerChoiceDisplay.innerHTML = user;

		// computer choosing its selection
		computerChoose();
		finalScore();
	});
});

function computerChoose() {
	const randomNumber = Math.floor(Math.random() * 3) + 1;

	if (randomNumber === 1) {
		computerChoice.innerHTML = 'rock';
	}
	if (randomNumber === 2) {
		computerChoice.innerHTML = 'paper';
	}
	if (randomNumber === 3) {
		computerChoice.innerHTML = 'scissor';
	}
}

function finalScore() {
	if (computerChoiceDisplay === computerChoice) {
		score = 'Tie';
	}

	gameScore.innerHTML = score;
}
