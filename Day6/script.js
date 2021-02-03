var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("response").innerHTML = cars[0];

cars[0] = "Chevy"
document.getElementById("response").innerHTML = cars[0];

document.getElementById("response2").innerHTML = cars;

var person = {
  firstName: "Bob",
  lastName: "The Builder",
  age: 40,
}

// document.getElementById("objects").innerHTML = person.firstName;
// or
document.getElementById("objects").innerHTML = person["firstName"];