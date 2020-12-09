/// Notes #12/9/2020
/// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
/// https://www.w3schools.com/jsref/dom_obj_document.asp


document.getElementById("pageTitle").innerHTML = "Welcome to Ninja Coding 101";
// numbOne = document.getElementById("numberOne").value;

function theAnswer(){
    let numbOne = parseFloat(document.getElementById("numberOne").value);
    let numbTwo = parseFloat(document.getElementById("numberTwo").value);
    // alert(numbOne + numbTwo)
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


