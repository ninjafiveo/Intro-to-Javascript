let playerCharacter = {
    type: "Black Knight",
    numLegs: 2,
    numArms: 2,
    quote: function(){ return "Tis but a scratch."}
};

console.log(playerCharacter.numArms);
console.log(playerCharacter.numLegs);
console.log(playerCharacter.type);

playerCharacter.numArms = playerCharacter.numArms - 1;
console.log("You have "+ playerCharacter.numArms+" arms. " + playerCharacter.quote());

playerCharacter.numArms = playerCharacter.numArms - 1;
console.log("You have "+ playerCharacter.numArms+" arms. " + playerCharacter.quote());

playerCharacter.numLegs = playerCharacter.numLegs - 1;
console.log("You have "+ playerCharacter.numLegs+" legs. " + playerCharacter.quote());

playerCharacter.numLegs = playerCharacter.numLegs - 1;
console.log("You have "+ playerCharacter.numLegs+" legs. " + playerCharacter.quote());



document.getElementById('demo').innerHTML = playerCharacter.type;