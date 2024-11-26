// A simple JavaScript object
const person = {
    firstName: "Max",
    lastName: "Mustermann",
    age: 30,
    hobbies: ["Reading", "Sports", "Programming"],
    address: {
        street: "Musterstraße 123",
        city: "Musterstadt",
        zip: "12345"
    },
    // Method of the object
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Accessing properties
console.log("First Name:", person.firstName);
console.log("Last Name:", person.lastName);
console.log("Age:", person.age);
console.log("Hobbies:", person.hobbies.join(", "));
console.log("Address:", `${person.address.street}, ${person.address.city}, ${person.address.zip}`);

// Calling the method
console.log("Full Name:", person.getFullName());

// Adding a new property
person.email = "max.mustermann@example.com";
console.log("Email added:", person.email);

// Updating an existing property
person.age = 31;
console.log("Updated Age:", person.age);

// Iterating over the object properties
console.log("All properties of the object:");
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}:`, person[key]);
    }
}
