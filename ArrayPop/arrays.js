//#region Random Number Generator
function randomNumberGenerator(randomNumber){
    var randomNumber = Math.floor(Math.random()*10+1);
    console.log("Random Number is: " + randomNumber);
    document.getElementById("theRandomNumber").innerHTML="The Number is: "+randomNumber;
    return randomNumber;
}
randomNumber = randomNumberGenerator();
//#endregion
var allGuesses = [];
var playerScore = 0;

function myFunction(){
    var playerGuesses;
    playerGuesses = document.getElementById("input").value;
    console.log("The array is: " + allGuesses)
////
console.log(allGuesses.includes(playerGuesses));
    if (allGuesses.includes(playerGuesses)) {
        document.getElementById("duplicateNumber").innerHTML = "Yo...You already guessed that number. Do you kno da wae?";
        console.log("!!!!!!!!!!")
        // allGuesses.pop();
        ////
    console.log(allGuesses.includes(playerGuesses));
    } else {
        document.getElementById("duplicateNumber").innerHTML = "Negative";
        ////
    console.log(allGuesses.includes(playerGuesses));
    };



    if (playerGuesses == randomNumber) {
        var text = "Score is going up!";
        document.getElementById("message").innerHTML = text;
        playerScore = playerScore + 5;
        ////
    console.log(allGuesses.includes(playerGuesses));
        
    } else {
        playerScore = playerScore - 2;
        var text = "Oh no... Score is going down. ";
        document.getElementById("message").innerHTML = text;
        ////
    console.log(allGuesses.includes(playerGuesses));
    }
    document.getElementById("playerScore").innerHTML = playerScore;

    allGuesses.push(" " + playerGuesses);



    document.getElementById("numbersGuessed").innerHTML = allGuesses;
    console.log(allGuesses);
////
    console.log(allGuesses.includes(playerGuesses));
};




