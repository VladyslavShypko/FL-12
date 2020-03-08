import '../scss/style.scss';

import RockImage from '../img/rock.jpg';
import PaperImage from '../img/paper.jpg';
import ScissorsImage from '../img/scissors.jpg';

import random from './random.js';
import compare, {points} from './compare.js';
import resetPoints from './reset.js';


const rockImage = new Image();
rockImage.src = RockImage;
const paperImage = new Image();
paperImage.src = PaperImage;
const scissorsImage = new Image();
scissorsImage.src = ScissorsImage;

const arrImage = [rockImage, paperImage, scissorsImage];
const arr = ['rock', 'paper', 'scissors'];
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const reset = document.getElementById('reset');
let computer = document.getElementById('computer');
let player = document.getElementById('player');

const showResult = (image, button) => {
	player.innerHTML = '';
	computer.innerHTML = '';
	let img = new Image();
	img.src = image;
	let randomNumber = random();
	player.append(img);
	computer.append(arrImage[randomNumber]);
	compare(arr[randomNumber], button.innerHTML);
}

rock.addEventListener("click", () => {
	if (points.sumPoints < 3) {
		showResult(RockImage, rock);
	}
});
paper.addEventListener('click', () => {
	if (points.sumPoints < 3) {
		showResult(PaperImage, paper);
	}
});
scissors.addEventListener('click', () => {
	if (points.sumPoints < 3) {
		showResult(ScissorsImage, scissors);
	}
});
reset.addEventListener('click', resetPoints);