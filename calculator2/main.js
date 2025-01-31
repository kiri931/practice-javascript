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
                    let formattedInput = currentInput
                        .replace(/sin\(/g, "Math.sin(")
                        .replace(/cos\(/g, "Math.cos(")
                        .replace(/tan\(/g, "Math.tan(")
                        .replace(/log\(/g, "Math.log10(")
                        .replace(/ln\(/g, "Math.log(")
                        .replace(/√/g, "Math.sqrt")
                        .replace(/x²/g, "**2")
                        .replace(/xʸ/g, "**");

                    currentInput = eval(formattedInput).toString();
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
