// Example JSON data
const jsonData = `
{
    "name": "Max Mustermann",
    "age": 30,
    "isStudent": false,
    "hobbies": ["Reading", "Cycling", "Coding"],
    "address": {
        "street": "Musterstraße 123",
        "city": "Musterstadt",
        "zip": "12345"
    }
}`;

// Parse JSON string into a JavaScript object
const parsedData = JSON.parse(jsonData);

// Accessing parsed JSON data
console.log("Name:", parsedData.name);
console.log("Age:", parsedData.age);
console.log("Hobbies:", parsedData.hobbies.join(", "));
console.log("City:", parsedData.address.city);

// Modifying the object
parsedData.isStudent = true;
parsedData.hobbies.push("Gaming");

// Convert the JavaScript object back to a JSON string
const updatedJsonData = JSON.stringify(parsedData, null, 4);
console.log("Updated JSON Data:\n", updatedJsonData);
