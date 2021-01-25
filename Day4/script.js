let dog = {
    name: "Spot",
    numLegs: 4,
  //Add Method here named sayLegs
    //sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
console.log(dog.name);
console.log(dog.numLegs);
document.getElementById("response").innerHTML = "Dog info to console: " + dog.name +". Legs: "+dog.numLegs;
dog.sayLegs();
console.log(dog.sayLegs());