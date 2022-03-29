// hTML elements being assigned variables
var startButton = document.querySelector(".start-button");
var timerCount = document.querySelector(".timer-count");
var secondsRemainingLabel = document.querySelector(".timer").querySelector("h3")
var wordBlanks = document.querySelector(".word-blanks");
var blanks;
// hard coded some values
var timeLeft;
var word = "BASKETBALL";
function startGame(){
    timeLeft = 10;
    secondsRemainingLabel.textContent = "seconds remaining";
    timerCount.textContent = timeLeft;
    var countdown = setInterval(function(){
        if (timeLeft == 0){
            clearInterval(countdown)
            timerCount.textContent = "GAME OVER";
            secondsRemainingLabel.textContent = ""
            return;
        }
        timeLeft--;
        timerCount.textContent = timeLeft;
    },1000
    )
    blanks = toUnderscore(word);
    wordBlanks.textContent = blanks;
    wordBlanks.style.letterSpacing = "20px";
}
startButton.addEventListener("click",startGame)
function toUnderscore(str){
    var newString = ""
    for (var i=0;i<str.length;i++){
        newString = newString+ "_"
    }
    return newString;
}
window.addEventListener("keydown",function (event){
    var guess = event.key.toUpperCase();
    if(word.includes(guess)){
        for (var i=0;i<word.length;i++){
            console.log(word[i])
            if (word[i]===guess){
                blanks = blanks.split("")
                blanks[i] = guess;
                blanks = blanks.join("")
                console.log(blanks)
            }
        }
        
    }
    wordBlanks.textContent = blanks;
    
})