import winningCombinations from "./winningCombinations";
import takeNewBoard from "./takeNewBoard";
import {markPlayer, markComputer} from '../index';


const bestMoveComputer = (reboard, player) => {
    let array = takeNewBoard(reboard);
    if (winningCombinations(reboard, markPlayer)) {
        return {
            score: -10
        };
    } else if (winningCombinations(reboard, markComputer)) {
        return {
            score: 10
        };
    } else if (array.length === 0) {
        return {
            score: 0
        };
    }

    let moves = [];
    for (let i = 0; i < array.length; i++) {
        let move = {};
        move.index = reboard[array[i]];
        reboard[array[i]] = player;

        if (player === markComputer) {
            let takeWeightCell = bestMoveComputer(reboard, markPlayer);
            move.score = takeWeightCell.score;
        } else {
            let takeWeightCell = bestMoveComputer(reboard, markComputer);
            move.score = takeWeightCell.score;
        }
        reboard[array[i]] = move.index;

        moves.push(move);
    }

    let bestMove;
    if (player === markComputer) {
        let bestScore = -10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = 10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    return moves[bestMove];
}

export default bestMoveComputer;