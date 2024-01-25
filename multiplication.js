console.log('This script is directly embedded into the page');
//number 1:
var userInputOne = Number(window.prompt('Please enter a number you would like to multiply: '));
//number 2:
var userInputTwo = Number(window.prompt('Please enter another number you would like to multiply: '));
//to sum the 2:
var mul = multiply(userInputOne,userInputTwo);

var newParagraph = document.createElement('p');
newParagraph.textContent = `Number1: ${userInputOne}, Number2: ${userInputTwo}, Multiplication Result: ${mul}`;
var parent = document.getElementById('dynamic');
if(parent){
    parent.appendChild(newParagraph);
}else{
    console.error("Element not found");
}

function multiply(a,b){
    return a*b;
}