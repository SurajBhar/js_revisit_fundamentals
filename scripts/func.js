// Functions in javascript

// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Using the functions
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(add(5, 3)); // Output: 8
console.log(multiply(4, 7)); // Output: 28

// Function with default parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

console.log(power(5)); // Output: 25 (5 raised to the power of 2)
console.log(power(5, 3)); // Output: 125 (5 raised to the power of 3)

// Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// Function with callback
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample data";
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log("Received data:", data); // Output after 1 second: Received data: Sample data
}); 

