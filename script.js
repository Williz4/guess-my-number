'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 10;*/

/*adds the value 23 into the input guess*/
/*document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

let secretNumber = Math.trunc(Math.random()*20)+1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

const displayMessage = function(message) {
	document.querySelector('.message').textContent = message;
}

//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	if(!guess) {

		//document.querySelector('.message').textContent = '❌ No Number!';
		displayMessage('❌ No Number!');

	} else if (guess > 20) {

		//document.querySelector('.message').textContent = 'Please keep your guesses between 1 and 20';
		displayMessage('❌ Please keep your guesses between 1 and 20');

	} else if (secretNumber === guess) {
		//document.querySelector('.message').textContent = 'You guessed the Correct Number!';
		displayMessage('🎉 You guessed the Correct Number!');
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('.number').style.width = '30rem';

		if(score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}

	} else if (guess !== secretNumber) {
		if(score > 1) {

			//document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low';
			displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low');
			score--;
			document.querySelector('.score').textContent = score;

		} else {

			//document.querySelector('.message').textContent = 'Game Over! You Lost!';
			displayMessage('😥 Game Over! You Lost!');
			document.querySelector('body').style.backgroundColor = '#FF0000';
			document.querySelector('.score').textContent = 0;
		}
	}

	/*else if (guess > secretNumber) {

		if(score > 1) {

			document.querySelector('.message').textContent = 'Too High!';
			score--;
			document.querySelector('.score').textContent = score;

		} else {

			document.querySelector('.message').textContent = 'Game Over! You Lost!';
			document.querySelector('body').style.backgroundColor = '#FF0000';
			document.querySelector('.score').textContent = 0;


		}

	} else if (guess < secretNumber) {

		if(score > 1) {

			document.querySelector('.message').textContent = 'Too Low!';
			score--;
			document.querySelector('.score').textContent = score;

		} else {

			document.querySelector('.message').textContent = 'Game Over! You Lost!';
			document.querySelector('body').style.backgroundColor = '#FF0000';
			document.querySelector('.score').textContent = 0;

		}
	}*/
});

document.querySelector('.again').addEventListener('click', function() {
	score = 20;
	secretNumber = Math.trunc(Math.random()*20)+1;

	//document.querySelector('.message').textContent = 'Start guessing...';
	displayMessage('Start Guessing...💭');
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '30rem';
})

