document.getElementById("pageTitle").innerHTML = "Mr. Sekol Coding Calculator";

function mathAddition(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo = parseFloat(document.getElementById("numberTwo").value);
    document.getElementById("correctAnswer").innerHTML = "The Correct Answer Is: " + parseFloat(numbOne + numbTwo);
};

function mathSubtraction(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo = parseFloat(document.getElementById("numberTwo").value);
    // alert(numbOne + numbTwo)
    document.getElementById("correctAnswer").innerHTML = "The Correct Answer Is: " + parseFloat(numbOne - numbTwo);
};

function mathMultiply(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo = parseFloat(document.getElementById("numberTwo").value);
    // alert(numbOne + numbTwo)
    document.getElementById("correctAnswer").innerHTML = "The Correct Answer Is: " + parseFloat(numbOne * numbTwo);
};

function mathDivision(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo = parseFloat(document.getElementById("numberTwo").value);
    // alert(numbOne + numbTwo)
    document.getElementById("correctAnswer").innerHTML = "The Correct Answer Is: " + parseFloat(numbOne / numbTwo);
};


// alert(numbOne + numbTwo)
// document.getElementById("correctAnswer").innerHTML = "The Correct Answer Is: " + parseFloat(numbOne + numbTwo);