// Strings in JavaScript are used to represent text. 
// They are created by enclosing characters in single quotes (' '), 
// double quotes (" "), or backticks (` `) for template literals.

// Example of string declaration
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let templateLiteralString = `Hello, World!`;

// String concatenation: You can concatenate strings using the + operator or template literals.
let firstName = "John";
let lastName = "Doe";

// Using + operator
let fullName1 = firstName + " " + lastName; // Output: "John Doe"

// Using template literals
let fullName2 = `${firstName} ${lastName}`; // Output: "John Doe"

// String properties and methods
let str = "Hello, JavaScript!";

// Length of the string
console.log(str.length); // Output: 18

// Convert to uppercase
console.log(str.toUpperCase()); // Output: "HELLO, JAVASCRIPT!"

// Convert to lowercase
console.log(str.toLowerCase()); // Output: "hello, javascript!"

// Accessing characters in a string
console.log(str[0]); // Output: "H"
console.log(str.charAt(0)); // Output: "H"

// String slicing
console.log(str.slice(0, 5)); // Output: "Hello"
console.log(str.substring(7, 17)); // Output: "JavaScript"

// String replacement
let newStr = str.replace("JavaScript", "World");
console.log(newStr); // Output: "Hello, World!"

// Loops in JavaScript
// For loop: Executes a block of code a specified number of times.
for (let i = 0; i < 5; i++) {
    console.log("For Loop Iteration:", i);
}

// While loop: Executes a block of code as long as a specified condition is true.
let j = 0;
while (j < 5) {
    console.log("While Loop Iteration:", j);
    j++; // Incrementing j to avoid an infinite loop
}
