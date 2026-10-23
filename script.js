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


function add(a,b){return a+b;}

function subtract(a,b){return a-b;}

function multiply(a,b){return a*b;}

function divide(a,b){return a/b;}


function operate(a,b,operation){
    a = Number(a);
    b = Number(b);

    if (operation === 'divide' && b === 0){
        console.log("check")
        return 'aha nope'
    }
    
    let calculation =
            operation === 'add' ? add(a,b):
            operation === 'subtract' ? subtract(a,b):
            operation === 'multiply' ? multiply(a,b):
            operation === 'divide' ? divide(a,b):
            'false input'

    return Math.round(calculation * 1e8) / 1e8;
}

function renderMe(){
    screenDisplay.textContent = firstOperand + operatorSymbol + secondOperand;
}


function handleDigit(event){
    if (evalStatus){ 
        screenDisplay.textContent = '';
        evalStatus = false;
        }

    if (!operator){ 
        clearHighlight();
        firstOperand += event.currentTarget.textContent;
        renderMe();
        }

    else if (operator) {
        clearHighlight();
        secondOperand += event.currentTarget.textContent;
        renderMe();
    }    
}


function handleOperator(event){
    if (evalStatus) {
        screenDisplay.textContent = '';
        evalSatus = false;
    }

    if(!operator){
        firstOperand = Number(screenDisplay.textContent);
        operator = event.currentTarget.id;
        operatorSymbol = event.currentTarget.textContent;
        event.currentTarget.classList.add("highlightButton")
        renderMe()

    } else if (operator){

        screenDisplay.textContent = operate(firstOperand,secondOperand,operator);
        clearVars();
        evalStatus = true;
        return;
    }

    evalStatus = false;
}


function handleEquals(){
    if (!operator) return;

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
    firstOperand = "";
    secondOperand = "";
    operator = "";
    operatorSymbol = "";
}


function clearHighlight(){
    operators.forEach(button => button.classList.remove('highlightButton'))
}


digits.forEach(button => button.addEventListener('click',handleDigit));
operators.forEach(button => button.addEventListener('click',handleOperator));
equals.addEventListener("click", handleEquals);
clear.addEventListener("click", handleClear);



