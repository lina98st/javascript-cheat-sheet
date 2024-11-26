// This script generates a greeting based on the current hour of the day.

// Get the current date and hour
let date = new Date();
let hour = date.getHours();

// Variable to store the greeting
let greeting;

// Uncomment the next line to test with a specific hour
// hour = 3;

// Determine the greeting based on the hour
if (hour > 4 && hour < 12) {
    greeting = "Good morning";
} else if (hour >= 12 && hour < 15) {
    greeting = "Good afternoon";
} else {
    greeting = "Good day";
}

// Log the greeting to the console
console.log(greeting);
