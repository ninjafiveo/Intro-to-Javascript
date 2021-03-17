// var x = 10;
// var y = 8;

// if(x < y){
//     document.getElementById("booleans").innerHTML = "True";
//     alert(x + " is greater than "+y)
// } else {
//     document.getElementById("booleans").innerHTML = "False";
//     alert(x + " is less than "+y)
// }

// let teacher = "Captain Awesome"
// let student1Grade = 3.0;
// if(student1Grade > 3.5 || teacher == "Captain Awesome"){
//     document.getElementById("booleans").innerHTML = " Student Gets 3 slices of pizza."
// } else if ( student1Grade >= 3.0 ){
//     document.getElementById("booleans").innerHTML = " Student Gets 2 slices of pizza."
// } else if(student1Grade > 2.0){
//     document.getElementById("booleans").innerHTML = " Student Gets 1 slices of pizza."
// } else{
//     document.getElementById("booleans").innerHTML = " Student Gets 0 slices of pizza."
// }

function Player(playerNumber, playerName, playerType, playerClass, playerStartingHealth, playerWeapon){
    this.playerNumber = playerNumber;
    this.playerName = playerName;
    this.playerType = playerType;
    this.playerClass = playerClass;
    this.playerStartingHealth = playerStartingHealth;
    this.playerWeapon = playerWeapon;
}

let pTypes = ["Warrior", "Mage", "Shaman", "Rogue", "Priest", "Paladin"];
let pClasses = ["Human", "Orc", "Elf", "Tauren", "Gnome"];
let pWeapons = ["Staff", "Dagger", "Sword", "Hammer", "Wand", "Bow & Arrow", "Blunderbuss"];

let player1 = new Player(1, "Ninjafiveo", pTypes[1], pClasses[3],100, pWeapons[0]);
let player2 = new Player(2, "Hitogoroshi", pTypes[3], pClasses[4],125, pWeapons[1]);

document.getElementById("response").innerHTML = player1.playerNumber +" "+player1.playerName +" "+player1.playerType +" "+player1.playerClass +" "+player1.playerStartingHealth +" "+player1.playerWeapon ;

player1RemainingHealth = player1.playerStartingHealth -0;

if(player1RemainingHealth >= player1.playerStartingHealth){
    document.getElementById("response1").innerHTML = player1.playerName +" dodged the strike! "+player1.playerName + " health is still at: " + player1RemainingHealth;
} else{
    document.getElementById("response1").innerHTML = player1.playerName +" took a vital blow. Ouch! "+player1.playerName + " health has been reduced to: " + player1RemainingHealth;
}























