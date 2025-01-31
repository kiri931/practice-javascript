document.addEventListener("DOMContentLoaded", function() {
    const calculator = new Calculator("number-display");
    const buttonContainer = document.getElementById("button-container");
    
    const buttons = [
        "7", "8", "9", "+",
        "4", "5", "6", "-",
        "1", "2", "3", "*",
        "0", ".", "=", "/",
        "C", "(", ")", "%",
        "sin", "cos", "tan", "sqrt",
        "log", "ln", "exp", "^"
    ];
    
    buttons.forEach(text => {
        const button = document.createElement("button");
        button.textContent = text;
        button.classList.add("calc-button");
        button.addEventListener("click", function() {
            calculator.handleInput(text);
        });
        buttonContainer.appendChild(button);
    });
});

class Calculator {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
        this.value = "";
    }
    handleInput(input) {
        if (input === "C") {
            this.value = "";
        } else if (input === "=") {
            try {
                this.value = this.evaluateExpression(this.value).toString();
            } catch (e) {
                this.value = "Error";
            }
        } else {
            this.value += input;
        }
        this.updateDisplay();
    }
    evaluateExpression(expression) {
        return Function(`'use strict'; return (${expression.replace('^', '**')})`)();
    }
    updateDisplay() {
        this.element.textContent = this.value;
    }
}
