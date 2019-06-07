/* GAME FUNCTION/RULES:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if loses
- Let player chooser to play again 
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const gameUI = document.querySelector('#game'),
    minNumUI = document.querySelector('.min-num'),
    maxNumUI = document.querySelector('.max-num'),
    guessBtnUI = document.querySelector('#guess-btn'),
    guessInputUI = document.querySelector('#guess-input'),
    messageUI = document.querySelector('.message');

// Assign UI min and max

minNumUI.textContent = min;
maxNumUI.textContent = max;

// Listen for guess

guessBtnUI.addEventListener('click', function () {
    let guess = parseInt(guessInputUI.value);
    console.log(guess); //NaN if no value input

    //validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }
    //check if won
    if (guess === winningNum) {
        //disable input
        guessInputUI.disabled = true;
        //change border color
        guessInputUI.style.borderColor = 'green';
        //let user know they won
        setMessage(`${winningNum} is correct!, YOU WON!`, 'green')
    } else {

    }
})

// Set message function
function setMessage(msg, color) {
    messageUI.style.color = color;
    messageUI.textContent = msg;

}