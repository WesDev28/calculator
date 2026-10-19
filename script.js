const numberOne = 0;
const operator = "+";
const numberTwo = 0;


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
    return  operator === '+' ? add(a,b):
            operator === '-' ? subtract(a,b):
            operator === '*' ? multiply(a,b):
            operator === '/' ? divide(a,b):
            'false input'
}


const digits = document.querySelector("#digits");

digits.addEventListener("click",button => {
    console.log(button.target.id);

})


