//first input box
var num1 = document.getElementById("num1");
//second input box
var num2 = document.getElementById("num2");
//drop down selector of operations
var operations = document.getElementById("operations");
//the botton that allows you to solve it
var calculate = document.getElementById("calculate");
//the answer that will appear
var display = document.getElementById("display");


//the calculate button will do this function after the user clicked the button
calculate.addEventListener("click", function(){
    
    //.value is what is being displayed by the user
    //"." can be interpreted as "of that"
    //the "+" makes it so it is a number and not a string forced together
    
    //new variable for user's input one
    var number1 = +num1.value;
    //new variable for user's input two
    var number2 = +num2.value;
    //new variable for the user's input of operation
    var op = operations.value;
    
    
    //if selector is blank error message appears
    if (op === ""){
        alert("please input an operation");
    }
    //if selctor is plus it will add each number
    else if (op === "+"){
        display.innerHTML = number1 + number2;
    }
    //if selctor is minus it will subtract each number
    else if (op === "-"){
        display.innerHTML = number1 - number2;
    }
    //if selctor is times is will multiply each number
    else if (op === "*"){
        display.innerHTML = number2 * number2;
    }
    //if selctor is divison is will divide each number
    else if (op === "/"){
        display.innerHTML = number1 / number2;
    }
    
    
});