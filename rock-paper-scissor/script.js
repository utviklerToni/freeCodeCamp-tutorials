const computerChoiceDisplay = document.getElementById('computer');
const userChoiceDisplay = document.getElementById('user');
const gameScore = document.getElementById('score');

let userChoice;
let score;

let computerChoice = document.querySelectorAll('button');

computerChoice.forEach((choice) => {
	choice.addEventListener('click', (event) => {
		userChoice = event.target.id;
		userChoiceDisplay.innerHTML = userChoice;

		// computer choosing its selection
		computerChose();
		finalScore();
	});
});

function computerChose() {
	const randomNumber = Math.floor(Math.random() * 3) + 1;

	if (randomNumber === 1) {
		computerChoice = 'rock';
	}
	if (randomNumber === 2) {
		computerChoice = 'paper';
	}
	if (randomNumber === 3) {
		computerChoice = 'scissor';
	}

	computerChoiceDisplay.innerHTML = computerChoice;
}

function finalScore() {
	let scoreColor = document.getElementById('score');

	// for tie
	if (computerChoice === userChoice) {
		score = 'Tie';
		scoreColor.style.color = '#30b2ff';
	}

	let rockPC = computerChoice === 'rock';
	let paperPC = computerChoice === 'paper';
	let scissorPC = computerChoice === 'scissor';

	// for rock
	if (rockPC && userChoice === 'scissor') {
		score = 'Computer Won';
		scoreColor.style.color = 'red';
	}

	if (rockPC && userChoice === 'paper') {
		score = 'Player 1 Won';
		scoreColor.style.color = '#02ff02';
	}

	// for paper
	if (paperPC && userChoice === 'rock') {
		score = 'Computer Won';
		scoreColor.style.color = 'red';
	}
	if (paperPC && userChoice === 'scissor') {
		score = 'Player 1 Won';
		scoreColor.style.color = '#02ff02';
	}

	// for scissor
	if (scissorPC && userChoice === 'paper') {
		score = 'Computer Won';
		scoreColor.style.color = 'red';
	}
	if (scissorPC && userChoice === 'rock') {
		score = ' Player 1 Won';
		scoreColor.style.color = '#02ff02';
	}

	gameScore.innerHTML = score;
}
