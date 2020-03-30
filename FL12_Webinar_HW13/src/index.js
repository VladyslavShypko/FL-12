import './scss/style.scss';

import random from './modules/randomPlayer.js';
import callMoveComputer from "./modules/callMoveComputer";
import game, {board, round, score} from "./modules/game";
import reset from "./modules/reset";

export let user = document.querySelector('.user');
export let computer = document.querySelector('.computer');
export let markPlayer;
export let markComputer;

let wrapperBoard = document.querySelector('.wrapper_board');
let buttonNewGame = document.getElementById('new_game');
let buttonClear = document.getElementById('clear');
let  markPlayerNode = document.querySelector('.user_title');
let markComputerNode = document.querySelector('.computer_title');


const boardAddEvent = () => {
    wrapperBoard.addEventListener('click', (event) => {
        let target = event.target;
        if (target.tagName !== 'TD') return;
        game(target, markPlayer);
    });
}

const firstMove = () => {
    if (random()) {
        markPlayer = 'X';
        markComputer = 'O';
        user.classList.add('highlight');
boardAddEvent(game, markPlayer);
    } else {
        markPlayer = 'O';
        markComputer = 'X';
        computer.classList.add('highlight');
        callMoveComputer();
        boardAddEvent(game, markPlayer);
    }
    markPlayerNode.innerHTML = `User (Mark - ${markPlayer})`;
    markComputerNode.innerHTML = `Computer (Mark - ${markComputer})`;
}

firstMove();

buttonNewGame.addEventListener('click', () => {
    reset(round, board, score);
    firstMove();
});

buttonClear.addEventListener('click', () => {
    score.computer = 0;
    score.user = 0;
    reset(round, board, score);
    firstMove();
});






