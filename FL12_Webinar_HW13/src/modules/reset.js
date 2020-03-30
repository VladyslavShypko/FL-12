import {user, computer} from "../index";

let computerScoreNode = document.querySelector('.computer_score');
let userScoreNode = document.querySelector('.user_score');

const reset = (round, board, score) => {
    round.count = 0;
    board.arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let elements = document.querySelectorAll('td');
    for (let elem of elements) {
        elem.classList.contains('win') ? elem.classList.remove('win') : '';
        elem.innerHTML = '';
    }
    if(user.classList.contains('highlight')) {user.classList.remove('highlight')}
    if(computer.classList.contains('highlight')) {computer.classList.remove('highlight')}
    userScoreNode.innerHTML = `Score: ${score.user}`;
    computerScoreNode.innerHTML = `Score: ${score.computer}`;
}

export default reset;