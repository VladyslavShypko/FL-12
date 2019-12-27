// Your code goes here

const possiblePrize25 = 25;
const possiblePrize50 = 50;
const possiblePrize100 = 100;
const four = 4;
const two = 2;
const eight = 8;
let min = 0;
let max = 8;
let i;
let attemptsLeft = 3;
let totalPrize = 0;
let possiblePrize = [possiblePrize25, possiblePrize50, possiblePrize100];
let chooseNumber;
let random = Math.floor(Math.random() * (max - min + 1)) + min;
let playGame = confirm('Do you want to play a game?');
let nextLevel;

if (!playGame) {
    alert('You did not become a billionaire, but can.');

} else {

    while (attemptsLeft) {
        chooseNumber = prompt(`Choose a roulette pocket number from ${min} to ${max}
Attempts left: ${attemptsLeft}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${possiblePrize[attemptsLeft-1]}$`);

        if (+chooseNumber === random && chooseNumber.trim().length !== 0) {
            totalPrize += possiblePrize[attemptsLeft - 1];
            nextLevel = confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`);

            if (nextLevel) {
                max = max + four;
                random = Math.floor(Math.random() * (max - min + 1)) + min;
                attemptsLeft = four;

                for (i = 0; i < possiblePrize.length; i++) {
                    possiblePrize[i] = possiblePrize[i] * two;
                }

            } else {
                playGame = confirm('Do you want to play a game again?');

                if (playGame) {
                    attemptsLeft = four;
                    max = eight;
                    totalPrize = 0;
                    random = Math.floor(Math.random() * (max - min + 1)) + min;
                    possiblePrize = [possiblePrize25, possiblePrize50, possiblePrize100];

                } else {
                    attemptsLeft = 1;
                }
            }
        } else if (attemptsLeft === 1) {
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
            playGame = confirm('Do you want to play a game again?');

            if (playGame) {
                attemptsLeft = four;
                max = eight;
                random = Math.floor(Math.random() * (max - min + 1)) + min;
                totalPrize = 0;
                possiblePrize = [possiblePrize25, possiblePrize50, possiblePrize100];
            }
        }
        attemptsLeft--;
    }
}