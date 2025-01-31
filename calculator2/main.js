document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");

    let currentInput = "";
    let operatorUsed = false;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");

            if (value === "C") {
                currentInput = "";
                operatorUsed = false;
            } else if (value === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                    operatorUsed = false;
                } catch {
                    currentInput = "エラー";
                }
            } else {
                if (["+", "-", "*", "/"].includes(value)) {
                    if (operatorUsed) return;
                    operatorUsed = true;
                } else {
                    operatorUsed = false;
                }
                currentInput += value;
            }

            display.value = currentInput;
        });
    });
});
