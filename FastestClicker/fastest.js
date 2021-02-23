var countDownDate = new Date("Jul 25, 2022").getTime();
console.log(countDownDate);
playerScore = 0
console.log("The player Score is: "+playerScore);

var masterTime;
var highScore = 0;

//#region TIMER COUNTDOWN
function startTimerFunction(){
    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        // console.log(total);
        const seconds = Math.floor((total / 1000) % 60);
        console.log(seconds);
        masterTime = seconds;

        return {
          total,
          seconds
        };
      }
      function initializeClock(id, endtime) {
        const clock = document.getElementById(id);
        const secondsSpan = clock.querySelector('.seconds');
      
        function updateClock() {
          const t = getTimeRemaining(endtime);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
      
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }
        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
      }
      
    const deadline = new Date(Date.parse(new Date()) + 15000);
      initializeClock('countdownClock', deadline);
      return{
          masterTime
      };
};
//#endregion

//#region playerScore Increment
      function scoreFunction(){
            if(masterTime < 15 && masterTime > 0){
                ++playerScore;
                document.getElementById("playerClicks").innerHTML = playerScore;
                console.log(playerScore)
            }
            if(masterTime <= 0){
                if(playerScore > 0){
                    playerFinalScore = playerScore;
                };
                if(playerFinalScore > highScore){
                    highScore = playerFinalScore;
                    document.getElementById("highScore").innerHTML = highScore;

                };
                alert("Your Score is " + playerFinalScore+". To play again, click the Start Timer Button.");   
            }
            if(masterTime <=0){
                playerScore = 0;
            }
    };

    
//#endregion

//#region Sleep
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

// console.log("Hello");
// sleep(3000);
// console.log("World!");
// sleep(3000);
// console.log("World!");


//#endregion





//#region OLD LAB
// startTimerFunction();
// scoreFunction();

// This program introduces the ! (not) 
// operator, which lets you take the
// opposite of a boolean value. Here
// we simulate a light switch.
function start(){
	var lightOn = true;
	console.log("Light on? " + lightOn);
	lightOn = !lightOn;	
	console.log("Light on? " + lightOn);
	lightOn = !lightOn;
	console.log("Light on? " + lightOn);

    if(lightOn == false){
        response = "The light switch is not on."
    } else{
        response = "Wow it's Bright! The light switch is on."
    }
    document.getElementById("lightSwitch").innerHTML = "Is the light switch on? " + response;
}
// start();
//#endregion