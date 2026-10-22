let firstOperand = null;
let operator = null;
let secondOperand = null;

let evalStatus = false;

const screenDisplay = document.querySelector('#screen');
const digits = document.querySelectorAll('#digits button');
const operators = document.querySelectorAll('#operators button');
const equals = document.querySelector('#equalsButton');
const clear = document.querySelector('#clearButton');


function add(a,b){return a+b;}

function subtract(a,b){return a-b;}

function multiply(a,b){return a*b;}

function divide(a,b){return a/b;}


function operate(a,b,operator){
    let calculation =
            operator === 'add' ? add(a,b):
            operator === 'subtract' ? subtract(a,b):
            operator === 'multiply' ? multiply(a,b):
            operator === 'divide' ? divide(a,b):
            'false input'

    return Math.round(calculation * 1e8) / 1e8;
}


function handleDigit(event){
    if (evalStatus){ 
        screenDisplay.textContent = '';
        evalStatus = false;
        }
    clearHighlight();
    screenDisplay.textContent += event.target.textContent;
}


function handleOperator(event){
    if(operator === null){
        firstOperand = Number(screenDisplay.textContent);
        operator = event.currentTarget.id;
        screenDisplay.textContent = '';
        screenDisplay.textContent += event.currentTarget.textContent;
        event.currentTarget.classList.add("highlightButton")

    } else if (screenDisplay.textContent.length > 1){
        secondOperand = Number(screenDisplay.textContent.substring(1));
        screenDisplay.textContent = operate(firstOperand,secondOperand,operator);
        clearVars();
    }
    evalStatus = false;
}


function handleEquals(){
    if (operator === null) return;

    secondOperand = Number(screenDisplay.textContent.substring(1));
    screenDisplay.textContent = operate(firstOperand,secondOperand,operator);
    clearVars();
    evalStatus = true;
}


function handleClear() {
    clearHighlight();
    clearVars();
    screenDisplay.textContent = '';
}


function clearVars(){
    firstOperand = null;
    secondOperand = null;
    operator = null;
}


function clearHighlight(){
    operators.forEach(button => button.classList.remove('highlightButton'))
}


digits.forEach(button => button.addEventListener('click',handleDigit));
operators.forEach(button => button.addEventListener('click',handleOperator));
equals.addEventListener("click",handleEquals);
clear.addEventListener("click", handleClear);



