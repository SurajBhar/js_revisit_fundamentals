/*
Javascript is a versatile language that can be used for both front-end and back-end development. 
It is widely used for creating interactive web pages and applications. 
With the rise of frameworks like React, Angular, and 
Vue.js, JavaScript has become even more powerful and popular among developers.  
JavaScript is also used for server-side development with Node.js, 
allowing developers to build scalable and efficient applications. 
It has a large and active community, which means there are plenty of resources and 
libraries available for developers to use. Overall, JavaScript is an essential language 
for anyone interested in web development and programming in general.
*/

/* Javascript is a dynamically typed language, 
which means that you don't have to declare the type of a variable when you create it. 
The type of a variable is determined at runtime based on the value assigned to it. 
This allows for greater flexibility in coding, but it can also lead to unexpected behavior 
if you're not careful. For example, if you assign a string value to a variable and then 
later assign a number value to the same variable, it can cause issues in your code. 
It's important to keep track of the types of variables you're using 
and to be mindful of how they are being used in your code.
*/

/* Ecmascript is a standardized version of JavaScript that was created to ensure that all JavaScript implementations are consistent and compatible with each other. 
It was developed by the European Computer Manufacturers Association (ECMA) and is 
maintained by the ECMA International organization.
The first version of Ecmascript was released in 1997, and since then, there have been several updates and revisions to the language. 
The latest version of Ecmascript is ES2021, which was released in June 2021. 
Ecmascript includes features such as classes, modules, arrow functions, and template literals, among others. 
It has become the standard for JavaScript development and is widely used by developers around the world.
*/

/* 
Documentation and resources for JavaScript can be found on the 
official Mozilla Developer Network (MDN) website:
https://developer.mozilla.org/en-US/ 

We can also look for HTML and CSS resources on the MDN website:
HTML: https://developer.mozilla.org/en-US/docs/Web/HTML
CSS: https://developer.mozilla.org/en-US/docs/Web/CSS

For learning JavaScript, there are many online platforms and tutorials available, such as:
- freeCodeCamp: https://www.freecodecamp.org/
- Codecademy: https://www.codecademy.com/learn/introduction-to-javascript
- W3Schools: https://www.w3schools.com/js/
- Eloquent JavaScript (book): https://eloquentjavascript.net/
*/


console.log("Hello, World! This is Suraj Bhardwaj Reporting from another side of the world!");
console.log("I am learning JavaScript and it's really fun!");

// This is a single-line comment in JavaScript

/*
This is a multi-line comment in JavaScript
You can write multiple lines of comments here
*/

// Variables in JavaScript
let name = "Suraj Bhardwaj"; // This variable can be reassigned, block scope variable
const age = 25; // This variable cannot be reassigned
var city = "New York"; // This variable can be reassigned and has function/global scope

const PI = 3.14; // This is a constant variable that cannot be reassigned
console.log("The value of PI is:", PI);

let a; // This will create a variable 'a' with the value undefined
console.log("The value of 'a' is:", a);

{
    let b = 3; // This variable 'b' is only accessible within this block
    console.log("The value of 'b' is:", b);
}

x_null = null; // This will create a global variable 'x' with the value null
y= undefined; // This will create a global variable 'y' with the value undefined

isFollowing = true; // This will create a global variable 'isFollowing' with the value true

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("X:", x_null);
console.log("Y:", y);
console.log("Is Following:", isFollowing);
console.log("Y:", y);

// Functions in JavaScript
function greet() {
    console.log("Hello, " + name + "! Welcome to JavaScript programming.");
}

greet();

function speak(name) {
    console.log("Hello, " + name + "! How are you doing today?");
}

speak("Suraj Bhardwaj");

// Data Types in JavaScript
// Primitives: String, Number, Boolean, Null, Undefined, Symbol
let stringData = "This is a string"; // String data type
let numberData = 42; // Number data type
let booleanData = true; // Boolean data type
let nullData = null; // Null data type
let undefinedData; // Undefined data type
let symbolData = Symbol("This is a symbol"); // Symbol data type
let bigIntData = 9007199254740991n; // BigInt data type


console.log("String Data:", stringData);
console.log("Number Data:", numberData);
console.log("Boolean Data:", booleanData);
console.log("Null Data:", nullData);
console.log("Undefined Data:", undefinedData);
console.log("Symbol Data:", symbolData);
console.log("BigInt Data:", bigIntData);

// Non-primitive data types: Object, Array, Function
let objectData = { name: "Suraj", age: 25 }; // Object data type
let arrayData = [1, 2, 3, 4, 5]; // Array data type
function functionData() { // Function data type
    console.log("This is a function");
}

console.log("Object Data:", objectData);
console.log("Array Data:", arrayData);
functionData();

// Type Checking in JavaScript
console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of city:", typeof city);
console.log("Type of x_null:", typeof x_null);
console.log("Type of y:", typeof y);
console.log("Type of isFollowing:", typeof isFollowing);
console.log("Type of stringData:", typeof stringData);
console.log("Type of numberData:", typeof numberData);
console.log("Type of booleanData:", typeof booleanData);
console.log("Type of nullData:", typeof nullData); // This will return 'object' due to a historical bug in JavaScript
console.log("Type of undefinedData:", typeof undefinedData);
console.log("Type of objectData:", typeof objectData);
console.log("Type of arrayData:", typeof arrayData); // This will return 'object' because arrays are a type of object in JavaScript
console.log("Type of functionData:", typeof functionData);

// JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
let jsonData = {
    "name": "Suraj Bhardwaj",
    "age": 25,
    "city": "New York"
};

console.log("JSON Data:", jsonData);

const jsonString = JSON.stringify(jsonData); // Convert JavaScript object to JSON string
console.log("JSON String:", jsonString);

const parsedData = JSON.parse(jsonString); // Convert JSON string back to JavaScript object
console.log("Parsed Data:", parsedData);

const studentData = {
    "name": "Suraj Bhardwaj",
    "age": 25,
    "subjects": ["Math", "Science", "History"],
    "isEnrolled": true
};

console.log("Student Data:", studentData);
console.log("Student Name:", studentData.name);
console.log("Student Age:", studentData.age);
console.log("Student Subjects:", studentData.subjects);
console.log("Is Student Enrolled?", studentData.isEnrolled);    
console.log("First Subject:", studentData.subjects[0]);
console.log(" Student Name:", studentData["name"]);

// In Object Data Type, we can perform various operations such as updating properties, adding new properties, and deleting properties.
// Irrespective of the fact that we are using const to declare the studentData object, we can still modify its properties because const only prevents reassignment of the variable itself, not the modification of the object it references.
studentData["age"] = 26; // Update age
console.log("Updated Student Age:", studentData.age);

studentData.grade = "A"; // Add new property
console.log("Student Grade:", studentData.grade);

delete studentData.isEnrolled; // Delete property
console.log("Is Student Enrolled?", studentData.isEnrolled); // This will return undefined since the property has been deleted

console.log("Final Student Data:", studentData);

// Operators in JavaScript
console.log(123 + 456); // This will perform addition and return 579
console.log("Hello, " + "World!"); // This will concatenate the two strings and return "Hello, World!"
console.log("Suraj" + 25); // This will concatenate the string and the number, converting the number to a string, and return "Suraj25"

// Arithmetic Operators
console.log(10 + 5); // Addition, returns 15
console.log(10 - 5); // Subtraction, returns 5
console.log(10 * 5); // Multiplication, returns 50
console.log(10 / 5); // Division, returns 2
console.log(10 % 3); // Modulus, returns 1 (remainder of division)
console.log(10 ** 2); // Exponentiation, returns 100 (10 raised to the power of 2)

// Assignment Operators
let x = 10; // Assignment operator, assigns the value 10 to variable x
x += 5; // Addition assignment operator, equivalent to x = x + 5, now x is 15
x -= 3; // Subtraction assignment operator, equivalent to x = x - 3, now x is 12
x *= 2; // Multiplication assignment operator, equivalent to x = x * 2, now x is 24
x /= 4; // Division assignment operator, equivalent to x = x / 4, now x is 6
x %= 4; // Modulus assignment operator, equivalent to x = x % 4, now x is 2
x **= 3; // Exponentiation assignment operator, equivalent to x = x ** 3, now x is 8

console.log("Final value of x:", x);

// Comparison Operators
console.log(10 == "10"); // Equality operator, returns true (loose equality, type coercion occurs)
console.log(10 === "10"); // Strict equality operator, returns false (no type coercion, different types)
console.log(10 != "10"); // Inequality operator, returns false (loose inequality, type coercion occurs)
console.log(10 !== "10"); // Strict inequality operator, returns true (no type coercion, different types)
console.log(10 > 5); // Greater than operator, returns true
console.log(10 < 5); // Less than operator, returns false
console.log(10 >= 5); // Greater than or equal to operator, returns true
console.log(10 <= 5); // Less than or equal to operator, returns false

// Logical Operators
let a1 = true;
let b = false;

console.log(a1 && b); // Logical AND operator, returns false (both operands must be true)
console.log(a1 || b); // Logical OR operator, returns true (at least one operand must be true)
console.log(!a1); // Logical NOT operator, returns false (negates the value of a1)
console.log(!b); // Logical NOT operator, returns true (negates the value of b) 

// Unary Operators
let num = 5;
console.log(-num); // Unary negation operator, returns -5
console.log(+num); // Unary plus operator, returns 5 (no change to the value)
num++; // Postfix increment operator, increments num by 1, now num is 6
console.log("Postfix Increment:", num); // This will print 6
++num; // Prefix increment operator, increments num by 1, now num is 7
console.log("Prefix Increment:", num); // This will print 7
num--; // Postfix decrement operator, decrements num by 1, now num is 6
console.log("Postfix Decrement:", num); // This will print 6
--num; // Prefix decrement operator, decrements num by 1, now num is 5
console.log("Prefix Decrement:", num); // This will print 5 

let num_1 = 10;
let num_2 = 20;

console.log("num_1:", num_1, "num_2:", num_2);
console.log("num_1++:", num_1++); // This will print 10 and then increment num_1 to 11
console.log("num_1 after num_1++:", num_1); // This will print 11
console.log("++num_2:", ++num_2); // This will increment num_2 to 21 and then print 21
console.log("num_2 after ++num_2:", num_2); // This will print 21

// Conditional (Ternary) Operator   
let age_1 = 18;
let isAdult = (age_1 >= 18) ? "Yes, is an adult." : "No, is not an adult.";
console.log("Is the person an adult?", isAdult);

let score = 85;
let grade = (score >= 90) ? "A" :
            (score >= 80) ? "B" :
            (score >= 70) ? "C" :
            (score >= 60) ? "D" : "F";
console.log("Grade:", grade);   

// Conditional statements in JavaScript
let time = 14;

if (time < 12) {
    console.log("Good morning!");
} else if (time < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

let day = "Monday";

// switch statement in JavaScript
// The switch statement evaluates an expression and executes the 
// corresponding case block based on the value of the expression.
switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    case "Thursday":
        console.log("Today is Thursday.");
        break;
    case "Friday":
        console.log("Today is Friday.");
        break;
    case "Saturday":
        console.log("Today is Saturday.");
        break;
    case "Sunday":
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Invalid day.");
}

// Odd or even number check using if-else statement
let number = 7;

if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}  

// Website mode check using if-elseif-else statement
let hour = 20;

if (hour < 12) {
    console.log("Good morning! The website is in light mode.");
} else if (hour < 18) {
    console.log("Good afternoon! The website is in light mode.");
} else {
    console.log("Good evening! The website is in dark mode.");
}

// Ternary operator for odd or even number check
// condition ? expression_if_true : expression_if_false
// The ternary operator is a concise way to write an if-else statement.
// In this example, we check if the number is even or odd and assign 
// the result to the variable 'result'.
let num_check = 10;
let result = (num_check % 2 === 0) ? "Even" : "Odd";
console.log(num_check + " is an " + result + " number.");   

// Alert, Prompt, and Confirm in JavaScript
// Alert: Displays a message to the user in a dialog box with an OK button.
alert("Welcome to JavaScript programming!");

// Prompt: Displays a dialog box that prompts the user for input and returns the input as a string.
let userName = prompt("Please enter your name:");
console.log("Hello, " + userName + "!");

// Confirm: Displays a dialog box with a message and OK/Cancel buttons, returning true if OK is clicked and false if Cancel is clicked.
let isConfirmed = confirm("Do you want to proceed?");
if (isConfirmed) {
    console.log("You chose to proceed.");
} else {
    console.log("You chose to cancel.");
}

// Loops in JavaScript
// For loop: Executes a block of code a specified number of times.
// Syntax: for (initialization; condition; increment) { // code to be executed }
for (let i = 0; i < 5; i++) {
    console.log("For Loop Iteration:", i);
}

// While loop: Executes a block of code as long as a specified condition is true.
// Syntax: while (condition) { // code to be executed }
let j = 0;
while (j < 5) {
    console.log("While Loop Iteration:", j);
    j++;
}

// Do-while loop: Executes a block of code at least once, 
// and then continues to execute as long as a specified condition is true.
// Syntax: do { // code to be executed } while (condition);
let k = 0;
do {
    console.log("Do-While Loop Iteration:", k);
    k++;
} while (k < 5);

// Printing "Suraj Bhardwaj" 5 times using a for loop
for (let i = 0; i < 5; i++) {
    console.log("Suraj Bhardwaj");
}

// Print S using * and for loop
let size = 5; // Size of the letter S
for (let i = 0; i < size; i++) {
    if (i === 0 || i === Math.floor(size / 2) || i === size - 1) {
        console.log("*".repeat(size)); // Print a full line of *
    } else if (i < Math.floor(size / 2)) {
        console.log("*"); // Print * at the beginning of the line
    } else {
        console.log(" ".repeat(size - 1) + "*"); // Print * at the end of the line
    }
}

// Infinite loop : Do not run this code as it will cause your browser to crash
// while (true) {
//     console.log("This is an infinite loop!");
// }

// INfinite loop using for loop
// for (;;) {
//     console.log("This is an infinite loop!");
// }

// for-of loop: Used to iterate over iterable objects like arrays, strings, etc.
// Helps us in looping through the elements of an array or characters of 
// a string without needing to manage the index variable.
// Syntax: for (variable of iterable) { // code to be executed }
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

let myName = "Suraj Bhardwaj";
for (let char of myName) {
    console.log("Character:", char);
}

// for-in loop: Used to iterate over the properties of an object.
// Helps us in looping through the keys of an object and accessing their
// corresponding values.
// Syntax: for (variable in object) { // code to be executed }
let person = { name: "Suraj", age: 25, city: "New York" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}

let car = { make: "Toyota", model: "Camry", year: 2020 };
for (let property in car) {
    console.log("Key: " + property + ", Value: " + car[property]);
}

