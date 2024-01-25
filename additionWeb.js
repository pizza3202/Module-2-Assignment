    console.log('This script is directly embedded into the page');
    //number 1:
    var userInputOne = Number(window.prompt('Please enter a number you would like to add: '));
    //number 2:
    var userInputTwo = Number(window.prompt('Please enter another number you would like to add: '));
    //to sum the 2:
    var addition = add(userInputOne,userInputTwo);

    var newParagraph = document.createElement('p');
    newParagraph.textContent = `Number1: ${userInputOne}, Number2: ${userInputTwo}, Addition Result: ${addition}`;
    var parent = document.getElementById('dynamic');
    if(parent){
        parent.appendChild(newParagraph);
    }else{
        console.error("Element not found");
    }

    function add(a,b){
        return a+b;
    }