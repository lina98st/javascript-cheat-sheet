// Select the button element
let button = document.querySelector("button");

// Add an event listener for the click event
button.addEventListener("click", function () {
    // Toggle the 'anzeigen' class on the button
    button.classList.toggle("anzeigen");

    // Log the current state of the button
    if (button.classList.contains("anzeigen")) {
        console.log("Dropdown is now visible.");
    } else {
        console.log("Dropdown is now hidden.");
    }
});
