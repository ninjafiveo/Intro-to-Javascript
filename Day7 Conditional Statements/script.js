var x= 10;
var y = 7;

let Student1Grade = 4.0
let Student2Grade = 3.7

if(x<y){
  document.getElementById("booleans").innerHTML = "True"
} else if(y<x){
  document.getElementById("booleans").innerHTML = "False"
} else{
  document.getElementById("booleans").innerHTML = "They are the same number."
}


function Player(playerNumber, playerName, playerType, playerClass, playerStartingHealth, playerWeapon) {
  this.playerNumber = playerNumber;
  this.playerName = playerName;
  this.playerType= playerType;
  this.playerClass = playerClass;
  this.playerStartingHealth = playerStartingHealth;
  this.playerWeapon = playerWeapon;
}

let pTypes = ["Warrior", "Mage", "Shaman", "Rogue", "Priest", "Paladin"];
let pClasses = ["Human", "Orc", "Elf", "Tauran", "Gnome"];
let pWeapons = ["Staff", "Dager", "Sword", "Hammer", "Wand", "Bow & Arrow", "Blunderbuss"];

let player1 = new Player(1, "Ninjafiveo", pTypes[1], pClasses[0], 100, pWeapons[0]);
let player2 = new Player(2, "Hitogoroshi", "Rogue", "Orc", 125, "Katana");

document.getElementById("response").innerHTML =  player1.playerNumber+ " " +player1.playerClass + " " + player1.playerName + " " + player1.playerStartingHealth+ " " + player1.playerType + " " + player1.playerWeapon;


player1RemainingHealth = player1.playerStartingHealth - 20 ;


if(player1RemainingHealth >= player1.playerStartingHealth ){
  document.getElementById("response2").innerHTML = player1.playerName+" dodged the strike. "+ player1.playerName +" health is " + player1RemainingHealth;
} else{
  document.getElementById("response2").innerHTML = player1.playerName+" was hit. "+ player1.playerName +" health is " + player1RemainingHealth;
}

function start(){
  var lightOn = true;
	console.log("Light on? " + lightOn);
	lightOn = !lightOn;	
	console.log("Light on? " + lightOn);
	lightOn = !lightOn;
	lightOn = !lightOn;
	console.log("Light on? " + lightOn);
}
start();