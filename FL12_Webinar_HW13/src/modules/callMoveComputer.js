import {board, round} from "./game";
import bestMoveComputer from "./bestMoveComputer";
import {computer, markComputer, user} from "../index";

const callMoveComputer = () => {
    round.count++;
    let index = bestMoveComputer(board.arr, markComputer).index;
    if(typeof index !== 'undefined') {
        board.arr[index] = markComputer;
        setTimeout(() => {
                document.getElementById(`${index}`).innerHTML = markComputer;
                computer.classList.remove('highlight');
                user.classList.add('highlight');
        }, 1000);


}
}

export default callMoveComputer;