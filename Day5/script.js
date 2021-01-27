//#region Individual Objects
// Creating objects by themselves... Slow and painful. 
let animal1 = {
  type: "Dog",
  name: "Spot",
  numLegs: 4,
//Add Method here named sayLegs
  //sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
  sayLegs: function() {return "This "+ animal1.type+ " has " + this.numLegs + " legs.";}
};

let animal2 = {
  type: "Bird",
  name: "Tweety",
  numLegs: 2,
//Add Method here named sayLegs
  //sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
  sayLegs: function() {return "This "+ animal1.type+ " has " + this.numLegs + " legs.";}
};

let animal3 = {
  type: "Fish",
  name: "McGilly Gully",
  numLegs: 0,
//Add Method here named sayLegs
  //sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
  sayLegs: function() {return "This "+ animal1.type+ " has " + this.numLegs + " legs.";}
};
console.log(animal1.sayLegs());
console.log(animal2.sayLegs());
console.log(animal3.sayLegs());
//#endregion

//#region Creating a Constructor
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

let hound = new Dog();
console.log("The hound's name is: "+hound.name)
// Still too limited

//#endregion

//#region Proper Usage
function MyAnimal(aType, aName, aColor, aAge, aNumLegs){
  this.aType = aType;
  this.aName = aName;
  this.aColor = aColor;
  this.aAge = aAge;
  this.aNumLegs = aNumLegs;
  updateAge = function(){
    ++this.aAge;
    return this.aAge;
  };
}

let sekolsPet = new MyAnimal("dog", "Mozzy", "white", 1, 4)
let millersPet = new MyAnimal("bird", "Tweety", "yellow", 20, 2)
let smithsPet = new MyAnimal("fish", "Blub Blub", "rainbow", 4, 0)

console.log("Sekol's pet's name is "+sekolsPet.aName+". "+sekolsPet.aName+" is "+sekolsPet.aAge+" years old.");
console.log("Miller's pet's name is "+millersPet.aName+". "+millersPet.aName+" is "+millersPet.aAge+" years old.");
console.log("Smith's pet's name is "+smithsPet.aName+". "+smithsPet.aName+" is "+smithsPet.aAge+" years old.");



function Horse(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Horse("Mr. Ed", "Blue");

console.log(hound);
console.log(terrier);


function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(12);
myHouse instanceof House;
// myHousess instanceof House; //This will come back as not defined in the console.
console.log(myHouse instanceof House)
console.log(notMyHouse instanceof House) // Will return an error in the console.


//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-own-properties