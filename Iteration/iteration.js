//#region Iteration Code
var text = "";
var i = 0;

function looperino(){
    while(i < 10){
        text += "<br>The number is " +i;
        i++;
        console.log(text);
    }
    document.getElementById("demo").innerHTML =text;
}

function clearField(){
    document.getElementById("demo").innerHTML = "";
}
//#endregion

//#region Guess My Number
let totalGuesses = 0;
document.getElementById("submitBtn").disabled = true;

//Hint This Will need to go into a function
randomNumber = Math.floor(Math.random() * 10)+1;
console.log(randomNumber);

function startFunction(){
    document.getElementById("submitBtn").disabled = false;
}

function myFunction(){
    var x, text;
    x = document.getElementById("numb").value;

    if(x<1 || x>10){
        text = "Hold your horses cowboy... you need to enter a numbe between 1 & 10."
        document.getElementById("response").innerHTML = text;
    }else if(x==randomNumber){
        text = "Yee haw... you hit the bullseye pilgrim."
        document.getElementById("response").innerHTML = text;

    }else{
        text = "Sorry buckaroo... you missed.";
        document.getElementById("response").innerHTML = text;
    }
}

//#region 
