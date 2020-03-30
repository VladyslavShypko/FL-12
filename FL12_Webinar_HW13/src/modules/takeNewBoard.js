const takeNewBoard = (reboard) => {
    return reboard.filter(cell => cell !== "X" && cell !== "O");
}

export default takeNewBoard;