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
start();