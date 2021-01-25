function Dog(){
    this.name= "Spot";
    this.color = "blue";
    this.numLegs= 4,
    //Add Method here named sayLegs
    //sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
    this.sayLegs = function() {return "This dog has " + this.numLegs + " legs.";}
  };
