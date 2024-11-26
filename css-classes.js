// Select the first paragraph element
let paragraph = document.querySelector("p");

// 1. Add the class 'besonders'
paragraph.className = "besonders";
console.log("Class set to 'besonders'. Current classes:", paragraph.className);

// 2. Remove the class 'besonders' and add 'anders'
paragraph.classList.remove("besonders");
paragraph.classList.add("anders");
console.log("Class changed to 'anders'. Current classes:", paragraph.className);

// 3. Toggle the class 'unsichtbar' (make the paragraph hidden)
paragraph.classList.toggle("unsichtbar");
console.log("Toggled 'unsichtbar'. Current classes:", paragraph.className);

// 4. Toggle the class 'unsichtbar' again (make the paragraph visible)
paragraph.classList.toggle("unsichtbar");
console.log("Toggled 'unsichtbar' again. Current classes:", paragraph.className);
