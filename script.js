let operator = '';
let previousValue = '';
let currrentValue = '';

    const add = (num1, num2) => num1 + num2;
    const subtract = (num1, num2) => num1 - num2;
    const multiply = (num1, num2) => num1 * num2;
    const divide = (num1, num2) => num1 / num2;

document.addEventListener("DOMContentLoaded", () => {
    const clear = document.getElementById("clear");
    const equal = document.getElementById("equal");
    const decimal = document.getElementById("point");

    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous-screen");
    let currentScreen = document.querySelector(".current-screen");

    numbers.forEach((number) => {
        number.addEventListener("click", (e) => {
            handleNumber(e.target.textContent)
            currentScreen.textContent = currrentValue
        })
    })

    operators.forEach((op) => {
        op.addEventListener("click", (e) => {
            handleOperator(e.target.textContent)
            previousScreen.textContent = previousValue + " " + operator;
            currentScreen.textContent = ''

        })
    })
    clear.addEventListener("click", () => {
       previousValue = "";
       currrentValue = "";
       operator = "";
       previousScreen.textContent = previousValue;
       currentScreen.textContent = currrentValue;
    })
    equal.onclick = () => {
        calculate()
        previousScreen.textContent = "";
        currentScreen.textContent = previousValue;
        currrentValue = '';
        previousValue = '';
    }
    
})

const handleNumber = (num) => {
    if(currrentValue.length <= 5){
        currrentValue += num 
    }
    
}

const handleOperator = (op) => {
    operator = op;
    previousValue = currrentValue
    currrentValue = '' 
}

const calculate = () => {
    previousValue = Number(previousValue);
    currrentValue = Number(currrentValue);

    switch(operator){
        case "+":
            previousValue += currrentValue
            break;
        case "-":
            previousValue -= currrentValue
            break;
        case "x":
            previousValue *= currrentValue
            break
        case "/":
            previousValue /= currrentValue
    }
    previousValue = roundNumber(previousValue)
    previousValue = previousValue.toString();
    currrentValue = currrentValue.toString();
}

const roundNumber = (number) => {
   return Math.round(number * 1000) / 1000;
}
 



