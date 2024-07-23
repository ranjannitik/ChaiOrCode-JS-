// Activity 1: Template Literals
console.log("Activity 1: Template Literals");

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
console.log("Task 1:");
const name = "Nitik";
const age = 20;
console.log(`My name is ${name} and I am ${age} years old.`);

// Task 2: Create a multi-line string using template literals and log it to the console.
console.log("Task 2:");
const multiLineString = `This is a multi-line string.
It spans multiple lines.
Each new line is preserved.`;
console.log(multiLineString);

// Activity 2: Destructuring
console.log("Activity 2: Destructuring");

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
console.log("Task 3:");
const numbers = [10, 20, 30, 40];
const [first, second] = numbers;
console.log(`First: ${first}, Second: ${second}`);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
console.log("Task 4:");
const book = { title: "1984", author: "George Orwell", year: 1949 };
const { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`);

// Activity 3: Spread and Rest Operators
console.log("Activity 3: Spread and Rest Operators");

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
console.log("Task 5:");
const existingArray = [1, 2, 3];
const newArray = [...existingArray, 4, 5, 6];
console.log("New Array:", newArray);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
console.log("Task 6:");
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum of 1, 2, 3: ${sum(1, 2, 3)}`);
console.log(`Sum of 10, 20, 30, 40: ${sum(10, 20, 30, 40)}`);

// Activity 4: Default Parameters
console.log("Activity 4: Default Parameters");

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
console.log("Task 7:");
const multiply = (a, b = 1) => a * b;
console.log(`Product of 5 and 2: ${multiply(5, 2)}`);
console.log(`Product of 5 and default value: ${multiply(5)}`);

// Activity 5: Enhanced Object Literals
console.log("Activity 5: Enhanced Object Literals");

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
console.log("Task 8:");
const enhancedObject = {
    name,
    age,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
console.log(enhancedObject);
console.log(enhancedObject.greet());

// Task 9: Create an object with computed property names based on variables and log the object to the console.
console.log("Task 9:");
const propName = "dynamicProp";
const computedObject = {
    [propName]: "This is a computed property"
};
console.log(computedObject);

// Bullet points summary of activities
console.log("\nBullet Points Summary:");
console.log("• Template literals allow embedding variables and expressions in strings using backticks.");
console.log("• Array and object destructuring enable extracting values from arrays and objects into variables.");
console.log("• The spread operator allows expanding elements of an iterable (e.g., array) into a new array or object.");
console.log("• The rest operator allows gathering an indefinite number of arguments into an array.");
console.log("• Default parameters provide default values for function parameters if no value is provided.");
console.log("• Enhanced object literals offer shorthand syntax for defining object properties and methods.");
console.log("• Computed property names allow defining object properties with dynamic names.");
console.log("Code By Nitik")