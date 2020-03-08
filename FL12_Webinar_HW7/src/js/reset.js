import {points} from './compare.js';

let field_result = document.getElementById('field_result');
let player = document.getElementById('player');
let computer = document.getElementById('computer');

const resetPoints = () => {
	points.computerPoints = 0;
	points.playerPoints = 0;
	points.sumPoints = 0;
	field_result.innerHTML = '';
	player.innerHTML = '';
	computer.innerHTML = '';
}
export default resetPoints;