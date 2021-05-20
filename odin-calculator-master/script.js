let decimalEnabled = true;
let lastButtonWasOperator = false;
let equalsPressed = false;

const runningDisplay = document.getElementById('runningdisplay');
let runningDisplayString = '0';
const result = document.getElementById('result');
let resultString = '0';

let buttonClick = evt => {
    if (evt.target.value) {
        updateResult(evt.target.value);
        lastButtonWasOperator = false;
    } else {
        switch (evt.target.id) {
            case 'clear':
                clear('all');
                lastButtonWasOperator = false;
                break;
            case 'delete':
                del();
                lastButtonWasOperator = false;
                break;
            case 'decimalpoint':
                updateResult('.');
                this.removeEventListener('click', buttonClick);
                decimalEnabled = false;
                lastButtonWasOperator = false;
                break;
            case 'equals':
                lastButtonWasOperator = false;
                updateRunningDisplay(evt.target.id);
                updateResult(evaluateEquation(convertEquationStringToArray(runningDisplayString)));
                equalsPressed = true;
                break;
            case 'divide':
            case 'multiply':
            case 'minus':
            case 'plus':    
                updateRunningDisplay(evt.target.id);
                lastButtonWasOperator = true;
                break;
        }
    }
}

let keyPress = e => {
    if (e.key === "Enter") e.preventDefault();
    if (!isNaN(e.key)) {
        updateResult(e.key);
        lastButtonWasOperator = false;
    } else {
        switch (e.key) {
            case 'Escape':
                clear('all');
                lastButtonWasOperator = false;
                break;
            case 'Backspace':
                del();
                lastButtonWasOperator = false;
                break;
            case '.':
                if (decimalEnabled === true) {
                    updateResult('.');
                    this.removeEventListener('click', buttonClick);
                    decimalEnabled = false;
                    lastButtonWasOperator = false;
                }
                break;
            case '=':
            case 'Enter':
                lastButtonWasOperator = false;
                updateRunningDisplay('equals');
                updateResult(evaluateEquation(convertEquationStringToArray(runningDisplayString)));
                equalsPressed = true;
                break;
            case '/':
            case '*':
            case '-':
            case '+':
                const operators = {'/': 'divide', '*': 'multiply', '-': 'minus', '+': 'plus'};
                updateRunningDisplay(operators[e.key]);
                lastButtonWasOperator = true;
                break;
        }
    }

}

let enableDecimal = () => {
    if (decimalEnabled === false) {
        const decimalButton = document.getElementById('decimalpoint');
        decimalButton.addEventListener('click', buttonClick);
        decimalEnabled = true;
    }
}

let updateResult = chars => {
    if (equalsPressed === true) {
        clear('all');
        equalsPressed = false;
    }
    if (chars === 'Infinity' || chars === 'NaN') {
        resultString = 'Divide by 0 error!';
        result.textContent = resultString;
        return;
    }
    if (resultString === '0') {
        if (chars === '.') {
            resultString = '0' + chars;
        } else {
            resultString = chars;
        }
    } else {
        resultString += chars;
    }
    result.textContent = resultString;
}

let updateRunningDisplay = operation => {
    operators = {'divide': '÷', 'multiply': '×', 'plus': '+', 'minus': '-', 'equals': '='};
    if (equalsPressed === true) {
        let errorOrScientificNotation = false;
        if (resultString.match(/e/g)) errorOrScientificNotation = true;

        if (errorOrScientificNotation === true) {
            clear('all');
            equalsPressed = false;
            return;
        } else {
            clear('runningDisplay'); 
            equalsPressed = false;
        }
    }
    if(lastButtonWasOperator) {
        runningDisplayString = runningDisplayString.slice(0,-1) + operators[operation];
        runningDisplay.textContent = runningDisplayString;
        return;
    }
    if (resultString.slice(-1) === '.') resultString = resultString.slice(0, -1);
    if (runningDisplayString === '0') {
        runningDisplayString = resultString + operators[operation];
    } else {
        runningDisplayString += resultString + operators[operation];
    }
    runningDisplay.textContent = runningDisplayString;
    clear('result');
}

let clear = scope => {
    if (scope === 'all') {
        runningDisplayString = '0';
        resultString = '0';
        runningDisplay.textContent = runningDisplayString;
        result.textContent = resultString;
        enableDecimal();
    } else if (scope === "result") {
        resultString = '0';
        result.textContent = resultString
        enableDecimal();
    } else if (scope === "runningDisplay") {
        runningDisplayString ='0';
        runningDisplay.textContent = runningDisplayString;
    }
}

let del = () => {
    if (resultString !== '0') {
        if (resultString[resultString.length -1] === '.') enableDecimal();
        let newResultString = (resultString.slice(0, -1));
        if(newResultString.length === 0) newResultString = '0';
        resultString = '0';
        updateResult(newResultString);
    }
}

let convertEquationStringToArray = equation => {
    let equationArray = [];
    let num = '';
    for (let x = 0; x < equation.length - 1; x ++) {
        if (!isNaN(equation[x]) || equation[x] === '.') {
            num += equation[x];
        } else {
            equationArray.push(Number(num));
            equationArray.push(equation[x]);
            num = '';
        }
    }
    equationArray.push(Number(num));
    return equationArray;
}

let evaluateEquation = equation => {
    for (let x = 0; x < equation.length; x++) {
        if (equation[x] === '÷' || equation[x] === '×') {
            equation.splice(x-1, 3, (operate(equation[x-1], equation[x+1], equation[x])));
            x -= 1;
        }
    }
    for (let x = 0; x < equation.length; x++) {
        if (equation[x] === '+' || equation[x] === '-') {
            equation.splice(x-1, 3, (operate(equation[x-1], equation[x+1], equation[x])));
            x -= 1;
        }
    }
    return(equation[0].toString());
}

let operate = (num1, num2, operator) => {
    switch (operator) {
        case '÷':
            return divide(num1, num2);
            break;
        case '×':
            return multiply(num1, num2);
            break;
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1,num2);
            break;
    }
}

const divide = (a, b) => a/b;
const multiply = (a, b) => a*b;
const add = (a, b) => a+b;
const subtract = (a, b) => a-b;

const buttons = document.querySelectorAll('button');
for (let x=0; x < buttons.length; x ++) {
    buttons[x].addEventListener('click', buttonClick);
}
window.addEventListener('keydown', keyPress);
