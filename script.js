function sum(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    let result = num1 + num2;
    if(result > 100000000000){
        return result.toExponential(5);
    }
    else{
        return result;
    }
}

function subtract(num1, num2){
    let result = num1 - num2;
    if(result > 100000000000){
        return result.toExponential(5);
    }
    else{
        return result;
    }
}

function divide(num1, num2){
    let result = num1 / num2;
    return result.toFixed(5);
}

function multiply(num1, num2){
    let result = num1 * num2;
    if(result > 100000000000){
        return result.toExponential(5);
    }
    else{
        return result;
    }
}

function operate (num1, operater, num2){
    switch(operater){
        case "+": return sum(num1, num2); break;
        case "-": return subtract(num1, num2); break;
        case "/": return divide(num1, num2); break;
        case "*": return multiply(num1, num2); break;
    }
}

const display = document.querySelector(".display");
const numButtons = document.querySelectorAll(".number");
const clear = document.querySelector(".auto-clear");
const backspace = document.querySelector(".del");
const operators = document.querySelectorAll(".operator");
const listOfOperations = ["+", "-", "/", "*"];
const equals = document.querySelector(".equals");
const signChanger = document.querySelector(".sign-change");

let firstNumber;
let operation;
let secondNumber;

numButtons.forEach(button => {
    button.addEventListener("click", event =>{
        let buttonClicked = event.target;

        if(display.textContent.length >= 12){
            return;
        }

        if(display.textContent.split('').includes('.') && buttonClicked.textContent === '.'){
            return;
        }

        if(display.textContent === "0" || listOfOperations.includes(display.textContent)){
            display.textContent = buttonClicked.textContent;
        }
        else{
            display.textContent += buttonClicked.textContent;
        }
    });
});

clear.addEventListener("click", () => {
    display.textContent = "0";
});

backspace.addEventListener("click", () => {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = "0";
    }
});

operators.forEach(operator => {
    operator.addEventListener("click", event => {
        const operatorClicked = event.target;
        if(listOfOperations.includes(display.textContent)){
            return;
        }
        firstNumber = display.textContent;
        display.textContent = operatorClicked.textContent;
        operation = operatorClicked.textContent;
    });
});

equals.addEventListener("click", () => {
    secondNumber = display.textContent;
    let result = operate(firstNumber, operation, secondNumber);
    display.textContent = result;
});

signChanger.addEventListener("click", () => {
    if(display.textContent.startsWith("-")){
        if(display.textContent === "-"){
            display.textContent = "0";
        }
        else{
            display.textContent = display.textContent.substring(1);
        }
    }
    else if(display.textContent === "0"){
        display.textContent = "-0";
    }
    else{
        display.textContent = "-" + display.textContent;
    }
});
