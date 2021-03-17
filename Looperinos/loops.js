var playerName = prompt("What is your name young traveler?");
alert("Welcome Young "+playerName);
var startGame = prompt("Would you like to take a journey? Y or N");
startGame = startGame.toLowerCase();
var numOfShurikens = Math.floor(Math.random()*20);
var shurikenDamage = Math.floor(Math.random()*10);
var shredderHitPoints = Math.floor(Math.random()*100);

if(startGame == 'y'){
    newGame();
    playAgain();
    
}else if(startGame == 'n'){
    console.log('You are wise to carry on young warrior. You shall live to fight another day '+playerName);
}else{
    console.log('Hmmm... I did not catch that.');
}


function newGame(){
    alert('Watch out... Shredder jumps out to to stop you on this journey.Check the console for what happens next.')
    do{
        shredderHitPoints = shredderHitPoints - shurikenDamage;
        console.log("Shredder Attacks.");
        if(shredderHitPoints < 0){
            shredderHitPoints = 0;
        }
        console.log(playerName+ " counters with shuriken attack. Shuriken does " + shurikenDamage + " damage. Shredder has " + shredderHitPoints + " hit points left.");
        numOfShurikens--
    
    }
    while(numOfShurikens > 0 && shredderHitPoints > 0)
    
    if(shredderHitPoints > 0){
        console.log('Doh... tough day for Leonardo');
    }else{
        console.log('With the power of pizza...'+ playerName +' has overcome. ');
    }
    console.log("Number of Shurikens: "+numOfShurikens);
    console.log("Shuriken Damage: "+shurikenDamage);
    console.log("Shredder Hit Points: "+shredderHitPoints);
}


function playAgain(){
    var playAnotherGame = prompt("Would you like to play again? Y or N");
    playAnotherGame = playAnotherGame.toLowerCase();

    if(playAnotherGame == 'y'){
        newGame();
        
    }else if(playAnotherGame == 'n'){
        console.log('You are wise to carry on young warrior. You shall live to fight another day '+playerName);
    }else{
        console.log('Hmmm... I did not catch that.');
    }
}