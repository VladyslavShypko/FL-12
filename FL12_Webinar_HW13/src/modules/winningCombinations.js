export let arr = [];
const winningCombinations = (board, player) => {
    if (board[0] === player && board[1] === player && board[2] === player){
        arr = [0, 1, 2];
        return true;
    }else if(board[3] === player && board[4] === player && board[5] === player){
        arr = [3, 4, 5];
        return true;
    }else if(board[6] === player && board[7] === player && board[8] === player){
        arr = [6, 7, 8];
        return true;
    }else if(board[0] === player && board[3] === player && board[6] === player){
        arr = [0, 3, 6];
        return true;
    }else if(board[1] === player && board[4] === player && board[7] === player){
        arr = [1, 4, 7];
        return true;
    }else if(board[2] === player && board[5] === player && board[8] === player){
        arr = [2, 5, 8];
        return true;
    }else if(board[0] === player && board[4] === player && board[8] === player){
        arr = [0, 4, 8];
        return true;
    }else if(board[2] === player && board[4] === player && board[6] === player) {
        arr = [2, 4, 6];
        return true;
    } else {
        return false;
    }
    }

export default winningCombinations;