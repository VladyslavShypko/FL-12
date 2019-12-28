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
let nextLevel;

//In case the user clicks the 'Cancel' button, the message 'You did not become a billionaire, but can.' should be shown (use alert).

let playGame = confirm('Do you want to play a game?');
if (!playGame) {
    alert('You did not become a billionaire, but can.');

} else {

    //If user clicked ‘Ok’ – start a game.
    
    while (attemptsLeft) {
        
      //Ask user to enter a number of pocket on which the ball could land.
        
        chooseNumber = prompt(`Choose a roulette pocket number from ${min} to ${max}
Attempts left: ${attemptsLeft}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${possiblePrize[attemptsLeft-1]}$`);

        //If user did guess.
        
        if (+chooseNumber === random && chooseNumber.trim().length !== 0) {
            totalPrize += possiblePrize[attemptsLeft - 1];
            nextLevel = confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`);

            //If user does want to continue, make number range bigger at 4 as the previous one, and two times bigger maximum prize 
            
            if (nextLevel) {
                max = max + four;
                random = Math.floor(Math.random() * (max - min + 1)) + min;
                attemptsLeft = four;

                for (i = 0; i < possiblePrize.length; i++) {
                    possiblePrize[i] = possiblePrize[i] * two;
                }

                //Ask if user wants to play again.
                
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
            
            //If user did not guess a number.
            
        } else if (attemptsLeft === 1) {
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
            playGame = confirm('Do you want to play a game again?');

            //Ask if user wants to play again.
            
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
