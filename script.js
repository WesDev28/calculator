let numberOne = null;
let operator = null;
let numberTwo = null;

const screenDisplay = document.querySelector('#screen');
const digits = document.querySelectorAll('#digits button');
const operators = document.querySelectorAll('#operators button');
const clear = document.querySelector('#clearButton');

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,operator){
    return  operator === 'add' ? add(a,b):
            operator === 'subtract' ? subtract(a,b):
            operator === 'multiply' ? multiply(a,b):
            operator === 'divide' ? divide(a,b):
            'false input'
}


function digitListener(){
    digits.forEach(button => {
    button.addEventListener('click', event => {
        screenDisplay.textContent += button.textContent;
         })
    })
}


function operatorListener(){
    operators.forEach(button => {
        button.addEventListener('click', event => {
            screenDisplay.textContent += button.textContent;
        })
    })
}


function clearAll() {
    clear.addEventListener('click', event => {
        numberOne = null;
        numberTwo = null;
        operator = null;
        screenDisplay.textContent ='';
        
    })
}




if (numberOne === null){
    digitListener();
    }