//these variables save the different elements of the calculator
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");
//listens for when button is clicked
button.addEventListener("click", doMath);
//This function performs the major pieces of the calculator
function doMath() {
    //This if statement allows you to use addition
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    //This if statement allows you to use subtraction
     if  (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
    //This if statement allows you to use multiplication
    if  (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
    //This if statement allows you to use division
    if  (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
    //This if statement allows you to  apply an exponent to a variable
   if  (dropdown.value == "^"){
       answer=Math.pow(parseInt(input1.value), parseInt(input2.value));
        display.innerHTML = answer;
    }
    //This if statement allows you to ind the square root of a number
    if  (dropdown.value == "√"){
        answer = Math.sqrt(parseInt(input1.value));
        display.innerHTML = answer;
    }
}
