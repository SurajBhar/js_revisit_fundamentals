// Strings in JavaScript are used to represent text. 
// They are created by enclosing characters in single quotes (' '), 
// double quotes (" "), or backticks (` `) for template literals.

// Example of string declaration
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let templateLiteralString = `Hello, World!`;

// String concatenation: You can concatenate strings using the + operator or template literals.
let firstName = "Suraj";
let lastName = "Bhardwaj";

// Using + operator
let fullName1 = firstName + " " + lastName; // Output: "Suraj Bhardwaj"

// Using template literals
let fullName2 = `${firstName} ${lastName}`; // Output: "Suraj Bhardwaj"

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


// Template literals: They allow for embedded expressions and multi-line strings.
// String interpolation using template literals
// You can embed variables and expressions inside a template literal using ${}.
let age = 30;
let greeting = `Hello, my name is ${firstName} and I am ${age} years old.`;
console.log(greeting); // Output: "Hello, my name is Suraj Bhardwaj and I am 30 years old."  

// Escape Characters: You can use backslashes to escape special characters in strings.
let quote = "She said, \"Hello!\"";
console.log(quote); // Output: She said, "Hello!"

// Multi-line strings using template literals
let multiLineString = `This is a multi-line string.
It can span multiple lines without needing escape characters.`;
console.log(multiLineString);
// String comparison: You can compare strings using the === operator.
let str1 = "Hello";
let str2 = "Hello";
let str3 = "hello";

console.log(str1 === str2); // Output: true (case-sensitive)
console.log(str1 === str3); // Output: false (case-sensitive)


console.log("Suraj \n Bhardwaj"); // Output: Suraj
                                      //         Bhardwaj

console.log("Suraj \t Bhardwaj"); // Output: Suraj     Bhardwaj

console.log("Suraj \\ Bhardwaj"); // Output: Suraj \ Bhardwaj

console.log("Suraj \"Bhardwaj\""); // Output: Suraj "Bhardwaj"

console.log('Suraj \'Bhardwaj\''); // Output: Suraj 'Bhardwaj'

console.log(`Suraj \`Bhardwaj\``); // Output: Suraj `Bhardwaj`  

let escapeString = "Suraj\nBhardwaj";
console.log(escapeString.length); // Output: 14 (includes the newline character, newline character is counted as one character)

// String Methods
// String methods are built-in functions that allow you to perform various operations on strings.
let sampleString = "Hello, World!";

// indexOf: Returns the index of the first occurrence of a specified value in a string.
console.log(sampleString.indexOf("World")); // Output: 7

// includes: Determines whether a string contains a specified value.
console.log(sampleString.includes("Hello")); // Output: true

// startsWith: Determines whether a string starts with a specified value.
console.log(sampleString.startsWith("Hello")); // Output: true

// endsWith: Determines whether a string ends with a specified value.
console.log(sampleString.endsWith("!")); // Output: true

// split: Splits a string into an array of substrings based on a specified separator.
let words = sampleString.split(", ");
console.log(words); // Output: ["Hello", "World!"]

// trim: Removes whitespace from both ends of a string.
let spacedString = "   Hello, World!   ";
console.log(spacedString.trim()); // Output: "Hello, World!"

// repeat: Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
console.log("Hello".repeat(3)); // Output: "HelloHelloHello"

// toUpperCase: Converts a string to uppercase letters.
console.log(sampleString.toUpperCase()); // Output: "HELLO, WORLD!" 

// toLowerCase: Converts a string to lowercase letters.
console.log(sampleString.toLowerCase()); // Output: "hello, world!" 

// Strings are immutable in JavaScript, which means that once a string is created, 
// it cannot be changed.
// When you perform operations on a string, a new string is created instead 
// of modifying the original string.
let originalString = "Hello";
let modifiedString = originalString + " World";

console.log(originalString); // Output: "Hello" (original string remains unchanged)
console.log(modifiedString); // Output: "Hello World" (a new string is created) 

