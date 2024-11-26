// This file demonstrates how to use the spread operator in JavaScript

// Initial object representing form data
const formData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
};

// Copy the object and add a new property
const updatedFormData = {
    ...formData, // Copy all properties from formData
    consent: true, // Add a new property
};

console.log("Original formData:", formData);
console.log("Updated formData with consent:", updatedFormData);

// Modifying a copied object does not affect the original
updatedFormData.email = "updated.email@example.com";
console.log("Modified updatedFormData:", updatedFormData);
console.log("Original formData remains unchanged:", formData);

// Merging two objects using the spread operator
const additionalData = {
    phone: "123-456-7890",
    address: "123 Main St",
};

const mergedData = {
    ...formData,
    ...additionalData, // Combine properties from additionalData
};

console.log("Merged data:", mergedData);
