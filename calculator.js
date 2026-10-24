let firstOperand = "";
let operator = "";
let operatorSymbol = "";
let secondOperand = "";

let evalStatus = false;

const screenDisplay = document.querySelector('#screen');
const digits = document.querySelectorAll('#digits button');
const operators = document.querySelectorAll('#operators button');
const equals = document.querySelector('#equalsButton');
const clear = document.querySelector('#clearButton');
const backspace = document.querySelector('#backspaceButton');


function add(a,b){return a+b;}

function subtract(a,b){return a-b;}

function multiply(a,b){return a*b;}

function divide(a,b){return a/b;}


function operate(a,b,operation){
    a = Number(a);
    b = Number(b);

    if (operation === 'divide' && b === 0){
        return null;
    }
    
    let calculation =
            operation === 'add' ? add(a,b):
            operation === 'subtract' ? subtract(a,b):
            operation === 'multiply' ? multiply(a,b):
            operation === 'divide' ? divide(a,b):
            'false input'

    return Math.round(calculation * 1e8) / 1e8;
}

function renderDisplay(){
    screenDisplay.textContent = firstOperand + operatorSymbol + secondOperand;
}


function handleDigit(event){
    if (evalStatus){ 
        clearVars();
        evalStatus = false;
        }

    if (!operator){ 
        clearHighlight();
        firstOperand += event.currentTarget.textContent;
        renderDisplay();
        }

    else if (operator) {
        clearHighlight();
        secondOperand += event.currentTarget.textContent;
        renderDisplay();
    }    
}


function handleOperator(event){
    
    if (!firstOperand) return;
    if (operator && !secondOperand) return;
    evalStatus = false;

    if (operator && secondOperand) {

        const result = operate(firstOperand, secondOperand, operator);

        if (result === null){
            showError();
            return;
        }
        firstOperand = String(result);
        operator = event.currentTarget.id;
        operatorSymbol = event.currentTarget.textContent;
        event.currentTarget.classList.add('highlightButton');
        secondOperand = "";
        renderDisplay();
        return;
    }
    
    operator = event.currentTarget.id;
    operatorSymbol = event.currentTarget.textContent;
    clearHighlight();
    event.currentTarget.classList.add('highlightButton');
    renderDisplay();
}


function handleEquals(){
    if (!operator || !secondOperand) return;

    const result = operate(firstOperand, secondOperand, operator);

    if (result === null){
        showError();
        return;
    }

    firstOperand = String(result)
    operator = "";
    operatorSymbol = "";
    secondOperand = "";
    renderDisplay()
    evalStatus = true;
}


function handleClear() {
    clearHighlight();
    clearVars();
    renderDisplay();
}


function clearVars(){
    firstOperand = "";
    secondOperand = "";
    operator = "";
    operatorSymbol = "";
}


function clearHighlight(){
    operators.forEach(button => button.classList.remove('highlightButton'))
}


function showError() {
    clearVars();
    clearHighlight();
    screenDisplay.textContent = 'aha nope';
    evalStatus = true;
}


function handleBackspace () {
    evalStatus = false;
    if (secondOperand){
        secondOperand = secondOperand.slice(0,-1);
        renderDisplay();
    } else if (operatorSymbol) {
        operatorSymbol = "";
        operator = "";
        clearHighlight();
        renderDisplay();
    }else if (firstOperand) {
        firstOperand = firstOperand.slice(0,-1);
        renderDisplay();
    }  
}


digits.forEach(button => button.addEventListener('click',handleDigit));
operators.forEach(button => button.addEventListener('click',handleOperator));
equals.addEventListener("click", handleEquals);
clear.addEventListener("click", handleClear);
backspace.addEventListener("click", handleBackspace);




