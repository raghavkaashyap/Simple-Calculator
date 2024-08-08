const display = document.getElementById("display");

//function to add an element to the display
function appendToDisplay(input){
    display.value += input;
}

//function to clear display
function clearDisplay(){
    display.value = "";
}


//function to calculate result
function calculate(){
    try{
        display.value = evaluateExpression(display.value);
    }
    catch(err){
        display.value = "Error.";
    }
    
}

//function to evaluate expression
function evaluateExpression(expression) {
    const operators = expression.match(/[+\-*/]/g);
    const numbers = expression.split(/[+\-*/]/).map(Number);

    if (!operators || !numbers || numbers.includes(NaN)) {
        throw new Error("Invalid Expression");
    }

    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const nextNumber = numbers[i + 1];
        
        switch (operator) {
            case '+':
                result += nextNumber;
                break;
            case '-':
                result -= nextNumber;
                break;
            case '*':
                result *= nextNumber;
                break;
            case '/':
                result /= nextNumber;
                break;
            default:
                throw new Error("Invalid Operator");
        }
    }

    return result;
}