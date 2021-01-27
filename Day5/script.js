function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line

let hound = new Dog();

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