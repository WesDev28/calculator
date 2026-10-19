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
            if (numberOne === null && numberTwo ===null){
                numberOne = Number(screenDisplay.textContent);
                screenDisplay.textContent = button.textContent;
                operator = event.target.id;
                return;
            }
            else if (numberOne !== null && numberTwo === null){
                numberTwo = Number(screenDisplay.textContent.substring(1)); 
                return;            
            }

            else if (numberOne !== null && numberTwo !== null & operator !== null){
                let solution = operate(numberOne,numberTwo,operator);
                screenDisplay.textContent = solution;
            }
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


digitListener();
operatorListener();
clearAll();
