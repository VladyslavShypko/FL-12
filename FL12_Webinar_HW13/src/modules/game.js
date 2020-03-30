import winningCombinations, {arr} from "./winningCombinations";
import callMoveComputer from "./callMoveComputer";
import {markComputer, markPlayer} from '../index';
import {computer, user} from "../index";

export let round = {
    count: 0
};
export let board = {
    arr: [0, 1, 2, 3, 4, 5, 6, 7, 8]
}
export let score = {
    computer: 0,
    user: 0
}

const chooseWinner = (gamer) => {
    setTimeout(() => {
        for(let i = 0; i < arr.length; i++) {
            document.getElementById(`${arr[i]}`).classList.add('win');
        }
        gamer.classList.remove('highlight');
    }, 1050);
    setTimeout(() => {
        if(gamer === computer) {
            alert("YOU WIN");
        }else {
            alert("YOU LOST");
        }
    }, 1500);
}

 const game = (element, player) => {
    if (
        board.arr[element.id] !== markPlayer &&
        board.arr[element.id] !== markComputer &&
        !winningCombinations(board.arr, markPlayer) &&
        !winningCombinations(board.arr, markComputer)
    ) {

            round.count++;
            element.innerHTML = markPlayer;
            board.arr[element.id] = player;
            user.classList.remove('highlight');

            if (winningCombinations(board.arr, player)) {
                score.user++;
             chooseWinner(computer);
            return;
        } else {
                computer.classList.add('highlight');
           callMoveComputer();
            if (winningCombinations(board.arr, markComputer)) {
                score.computer++;
            chooseWinner(user);
                return;
            } else if (round.count > 8) {
                score.user++;
                score.computer++;
                setTimeout(() => {
                    computer.classList.remove('highlight');
                    user.classList.remove('highlight');
                }, 1010);
                setTimeout(() => {
                    alert("Draw!");
                }, 1500);

                return;
            }
        }
    }
}
export default game;
