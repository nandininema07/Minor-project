let display = document.getElementById("display");

// clear the display
function clearDisplay() {
    display.value = ""; // Clear the display value
}

//append a value to the display
function append(value) {
    display.value += value; // Append the input value to the current display value
}

//perform the square of the current number
function square() {
    if (display.value) {
        let result = parseFloat(display.value); // Convert display value to a float
        display.value = result * result; // Set display value to the square of the result
    } else {
        display.value = "0"; // If display is empty, set it to "0"
    }
}

// calculate the result of the expression
function calculate() {
    try {
        let result = eval(display.value); // Evaluate the mathematical expression
        display.value = result; // Set display value to the result
    } catch (e) {
        display.value = "Error"; // If there's an error, set display to "Error"
    }
}
