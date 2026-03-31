let heroes = ["Batman", "Superman", "Spider-Man", "Iron Man"];

let marks = [85, 92, 78, 90];

let mixedArray = ["Hello", 42, true, null, { name: "Alice" }, [1, 2, 3]];

console.log("Heroes:", heroes);
console.log("Marks:", marks);
console.log("Mixed Array:", mixedArray);

// Accessing elements
console.log("First hero:", heroes[0]);
console.log("Second mark:", marks[1]);
console.log("Third element in mixed array:", mixedArray[2]);

console.log("Length of heroes array:", heroes.length);
console.log("Length of marks array:", marks.length);
console.log("Length of mixed array:", mixedArray.length);

// array in javascript are of type object
// In array, the object type can be seen as key value pair with key refering to 
// the index of the element in the array and value referring to the element itself
console.log("The type of heroesarray is " + typeof heroes);
console.log("The type of marks array is " + typeof marks);
console.log("The type of mixed array is " + typeof mixedArray);

// Strings in javascripts are immutable, which means that once a string is created, it cannot be changed.
// However, we can create a new string by concatenating two or more strings together.
let greeting = "Hello";
greeting[0] = "h"; // This will not change the original string
console.log("Greeting:", greeting); // Output: Hello

let newGreeting = greeting + " World!";
console.log("New Greeting:", newGreeting); // Output: Hello World!

// Loop over arrays
let myHeroes = ["Batman", "Superman", "Spider-Man"];
for (let i = 0; i < myHeroes.length; i++) {
    console.log("Using for Loop:Hero at index " + i + ": " + myHeroes[i]);
}

// Using forEach method
myHeroes.forEach(function(hero, index) {
    console.log("Using For Each: Hero at index " + index + ": " + hero);
});

// Using for...of loop
for (let hero of myHeroes) {
    console.log("Using for...of Loop: Hero: " + hero);
}

// Using for...in loop (not recommended for arrays, but can be used to iterate over indices)
for (let index in myHeroes) {
    console.log("Using for...in Loop: Hero at index " + index + ": " + myHeroes[index]);
}


// Find the average marks of students given 
// students = ["Alice", "Bob", "Charlie", "David"] 
// and marks = [85, 92, 78, 90]
let students = ["Alice", "Bob", "Charlie", "David"];
let studentMarks = [85, 92, 78, 90];

let totalMarks = 0;
for (let mark of studentMarks) {
    totalMarks += mark;
}

let averageMarks = totalMarks / studentMarks.length;
console.log("Average Marks:", averageMarks);    


// Array Methods

// push() - adds an element to the end of the array
heroes.push("Shaktiman");
console.log("After push:", heroes);

// pop() - removes the last element from the array
let removedHero = heroes.pop();
console.log("Removed Hero:", removedHero);
console.log("After pop:", heroes);

// unshift() - adds an element to the beginning of the array
heroes.unshift("Shaktiman");
console.log("After unshift:", heroes);

// shift() - removes the first element from the array
let removedFirstHero = heroes.shift();
console.log("Removed First Hero:", removedFirstHero);
console.log("After shift:", heroes);

// indexOf() - returns the index of the first occurrence of an element
let indexOfSpiderMan = heroes.indexOf("Spider-Man");
console.log("Index of Spider-Man:", indexOfSpiderMan); 

// includes() - checks if an element is present in the array
let hasBatman = heroes.includes("Batman");
console.log("Does the array include Batman?", hasBatman);

// slice() - returns a shallow copy of a portion of an array into a new array
let slicedHeroes = heroes.slice(1, 3);
console.log("Sliced Heroes (index 1 to 2):", slicedHeroes);

// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements
heroes.splice(1, 1, "Wonder Woman");   
console.log("After splice (replace Superman with Wonder Woman):", heroes);

// sort() - sorts the elements of an array in place and returns the sorted array
heroes.sort();
console.log("Sorted Heroes:", heroes);

// reverse() - reverses the order of the elements in an array in place
heroes.reverse();
console.log("Reversed Heroes:", heroes);

// join() - joins all elements of an array into a string
let heroesString = heroes.join(", ");
console.log("Heroes as a string:", heroesString);

// split() - splits a string into an array of substrings
let heroesArrayFromString = heroesString.split(", ");
console.log("Heroes array from string:", heroesArrayFromString);    

// concat() - merges two or more arrays into a new array
let moreHeroes = ["Flash", "Green Lantern"];
let allHeroes = heroes.concat(moreHeroes);
console.log("All Heroes:", allHeroes);

// reverse() - reverses the order of the elements in an array in place
allHeroes.reverse();
console.log("Reversed All Heroes:", allHeroes);

