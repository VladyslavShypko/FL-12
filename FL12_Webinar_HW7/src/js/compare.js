
export let points = {
	computerPoints: 0,
	playerPoints: 0,
	sumPoints: 0,
}
let field_result = document.getElementById('field_result');

const compare = (computerShow, playerShow) => {
	if (playerShow === 'rock') {
		if (computerShow === 'paper') {
			points.computerPoints++;
			points.sumPoints++;
			field_result.innerHTML = `Round ${points.sumPoints}, Rock vs. Paper, You’ve LOST!`;
		} else if (computerShow === 'scissors') {
			points.playerPoints++;
			points.sumPoints++;
			field_result.innerHTML = `Round ${points.sumPoints}, Rock vs. Scissors, You’ve WON!`;
		} else {
			points.sumPoints++;
			field_result.innerHTML = `Round ${points.sumPoints}, Rock vs. Rock, Friendship WON`;
		}
	} else if (playerShow === 'paper') {
		if (computerShow === 'rock') {
			points.playerPoints++;
			points.sumPoints++;
			field_result.innerHTML = `Round ${points.sumPoints}, Paper vs. Rock, You’ve WON!`;
		} else if (computerShow === 'scissors') {
			points.computerPoints++;
			points.sumPoints++;
			field_result.innerHTML = `Round ${points.sumPoints}, Paper vs. Scissors, You’ve LOST!`;
		} else {
			points.sumPoints++;
			field_result.innerHTML = `Round ${points.sumPoints}, Paper vs. Paper, Friendship WON`;
		}
	} else if (playerShow === 'scissors') {
		if (computerShow === 'rock') {
			points.computerPoints++;
			points.sumPoints++;
			field_result.innerHTML = `Round ${points.sumPoints}, Scissors vs. Rock, You’ve LOST!`;
		} else if (computerShow === 'paper') {
			points.playerPoints++;
			points.sumPoints++;
			field_result.innerHTML = `Round ${points.sumPoints}, Scissors vs. Paper, You’ve WON!`;
		} else {
			points.sumPoints++;
			field_result.innerHTML = `Round ${points.sumPoints}, Scissors vs. Scissors, Friendship WON`;
		}
	}
	if (points.sumPoints === 3) {
		if (points.computerPoints > points.playerPoints) {
			field_result.innerHTML = 'You LOST!';
		} else if (points.computerPoints < points.playerPoints) {
			field_result.innerHTML = 'You WON!';
		} else {
			field_result.innerHTML = 'Friendship WON';
		}
	}
}
export default compare;
