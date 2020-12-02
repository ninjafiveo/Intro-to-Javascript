let a;
a = 5;
let b = 10;
answer = b+a;
console.log(answer)
// document.writeln(a+b)

let td = 6;
let fg= 1;
let safety = 2;
let extraPoint = 2;

var score = 0;

// Keyboard shortcut to duplicate rows: Shift + Alt + Down Arrow
score = score + td;
score += safety;
score += safety;
score += safety;
score += safety;
score += safety;
score += safety;
score += safety;
score += safety;
score += safety;

// To do multiline select: Shift + Ctrl + Alt + up or down arrow key.
// Or another option is to press and hold the scroll key on your mouse. 



document.getElementById("theAnswer").innerHTML = score;

var myString = 'I* doesn\'t l*o*ok like it\'s walking weather.'
document.getElementById("paragraph").innerHTML = myString.split("*");