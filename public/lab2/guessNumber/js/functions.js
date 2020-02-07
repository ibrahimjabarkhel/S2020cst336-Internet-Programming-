// Your JavaScript goes here



var randomNumber = Math.floor(Math.random()*99) + 1;
var guesses = document.querySelector('#guesses');
var lastResult = document.querySelector('#lastResult');
var lowOrHi = document.querySelector('#lowOrHi');

var gamesWon = document.querySelector('#gamesWon');


var won = 0;
var lost = 0;

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton = document.querySelector('#reset');
resetButton.style.display = 'none';

console.log(randomNumber);
//document.getElementById("numberToGuess").innerHTML = randomNumber;

function checkGuess() {
    var userGuess = Number(guessField.value);
    if ((userGuess <= 99) && (userGuess > 0) && !(userGuess.isNaN)){
        if (guessCount === 1){
        guesses.innerHTML = 'Previous guesses: ';
        }
        guesses.innerHTML += userGuess + ' ';
        
        if (userGuess === randomNumber){
            won++;
            lastResult.innerHTML = 'Congratulations! You got it right!';
            lastResult.style.backgroundColor = 'green';
            lowOrHi.innerHTML = '';
            gamesWon.innerHTML = "Games won: " + won + "\n" + "Games lost: "+ lost;
            setGameOver();
        }
        else if (guessCount === 7 ){
            lastResult.innerHTML = 'Sorry, you lost!';
            lost++;
            gamesWon.innerHTML = "Games won: " + won + "\n" + "Games lost: "+ lost;
            setGameOver();
        }
        else{
            lastResult.innerHTML = 'Wrong!';
            lastResult.style.backgroundColor = 'red';
            if (userGuess < randomNumber){
                lowOrHi.innerHTML = 'Last guess was too low!';
            }
            else if ( userGuess > randomNumber){
                lowOrHi.innerHTML = 'Last guess was too high!';
            }
        }
        
        guessCount++;
        guessField.value = '';
        guessField.focus();
    }
    else{
        alert('Please! Enter a number btw 1 and 99');
    }
    
}

gamesWon.innerHTML = "Games won: " + won + "\n" + "Games lost: "+ lost;
guessSubmit.addEventListener('click', checkGuess);


function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'inline';
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    gamesWon.innerHTML = "Games won: " + won + "\n" + "Games lost: "+ lost;
    guessCount = 1;
    
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i=0; i< resetParas.length; i++){
        resetParas[i].textContent = '';
    }
    
    resetButton.style.display = 'none';
    
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    
    lastResult.style.backgroundColor = 'white';
    
    gamesWon.innerHTML = "Games won: " + won + "\n" + "Games lost: "+ lost;
    randomNumber = Math.floor(Math.random() * 99) + 1;
}   