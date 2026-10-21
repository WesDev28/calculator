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

    return calculation;
}


function digitListener(){
    digits.forEach(button => {
    button.addEventListener('click', event => {
        if (evalStatus){ 
            screenDisplay.textContent = '';
            evalStatus = false;
            }
        screenDisplay.textContent += button.textContent;
        })
    })
}


function operatorListener(){
    operators.forEach(button => {
        button.addEventListener('click', event => {
            if(operator === null){
                firstOperand = Number(screenDisplay.textContent);
                operator = button.id;
                screenDisplay.textContent = '';
                screenDisplay.textContent += button.textContent;
                
            } else if (screenDisplay.textContent.length > 1){
                secondOperand = Number(screenDisplay.textContent.substring(1));
                screenDisplay.textContent = operate(firstOperand,secondOperand,operator);
                firstOperand = null;
                operator = null;
                secondOperand = null;
                
            }
            evalStatus = false;
        })
    })
}

function equalsListener(){
    equals.addEventListener('click', event => {
        if (operator === null) return;
        secondOperand = Number(screenDisplay.textContent.substring(1));
        screenDisplay.textContent = operate(firstOperand,secondOperand,operator);
        firstOperand = null;
        operator = null;
        secondOperand = null;
        evalStatus = true;

    })
}

function clearAll() {
    clear.addEventListener('click', event => {
        firstOperand = null;
        secondOperand = null;
        operator = null;
        screenDisplay.textContent = '';
    })
}



digitListener();
operatorListener();
equalsListener();
clearAll();
