// Object with methods
const calculator = {
    // Method to add two numbers
    add: function (a, b) {
        return a + b;
    },
    // Method to subtract two numbers
    subtract: function (a, b) {
        return a - b;
    },
    // Method to multiply two numbers
    multiply: function (a, b) {
        return a * b;
    },
    // Method to divide two numbers
    divide: function (a, b) {
        if (b === 0) {
            return "Error: Division by zero!";
        }
        return a / b;
    }
};

// Using the methods
console.log("Addition:", calculator.add(10, 5));       // 15
console.log("Subtraction:", calculator.subtract(10, 5)); // 5
console.log("Multiplication:", calculator.multiply(10, 5)); // 50
console.log("Division:", calculator.divide(10, 5));     // 2
console.log("Division by Zero:", calculator.divide(10, 0)); // Error
