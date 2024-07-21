// Activity 1: Function Declaration
console.log("Activity 1: Function Declaration");

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
console.log("Task 1:");
function isEvenOrOdd(number) {
    if(number%2==0)console.log(`${number} is Even Number`)
    else console.log(`${number} is Odd no`)
}
isEvenOrOdd(7);
isEvenOrOdd(8);

// Task 2: Write a function to calculate the square of a number and return the result.
console.log("Task 2:");
function square(number) {
    return number * number;
}
console.log(`Square of 4: ${square(4)}`);
console.log(`Square of 5: ${square(5)}`);

// Activity 2: Function Expression
console.log("Activity 2: Function Expression");

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
console.log("Task 3:");
const findMax = function(a, b) {
    return a > b ? a : b;
};
console.log(`Max of 3 and 7: ${findMax(3, 7)}`);
console.log(`Max of 9 and 2: ${findMax(9, 2)}`);

// Task 4: Write a function expression to concatenate two strings and return the result.
console.log("Task 4:");
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};
console.log(`Concatenation of 'Hello' and ' World': ${concatenateStrings('Hello', ' World')}`);

// Activity 3: Arrow Functions
console.log("Activity 3: Arrow Functions");

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
console.log("Task 5:");
const sum = (a, b) => a + b;
console.log(`Sum of 3 and 7: ${sum(3, 7)}`);
console.log(`Sum of 9 and 2: ${sum(9, 2)}`);

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
console.log("Task 6:");
const containsChar = (str, char) => str.includes(char);
console.log(`Does 'Hello' contain 'e'? ${containsChar('Hello', 'e')}`);
console.log(`Does 'World' contain 'a'? ${containsChar('World', 'a')}`);

// Activity 4: Function Parameters and Default Values
console.log("Activity 4: Function Parameters and Default Values");

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
console.log("Task 7:");
function multiply(a, b = 1) {
    return a * b;
}
console.log(`Product of 4 and 5: ${multiply(4, 5)}`);
console.log(`Product of 4 and default value: ${multiply(4)}`);

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
console.log("Task 8:");
function greet(name, age = 18) {
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet('Nitik', 20));
console.log(greet('Ranjna'));

// Activity 5: Higher-Order Functions
console.log("Activity 5: Higher-Order Functions");

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
console.log("Task 9:");
function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
repeatFunction(() => console.log("Hello!"), 3);  //op hello is a fn send as parameter

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
console.log("Task 10:");
function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}
const double = x => x * 2;
const increment = x => x + 1;
console.log(`Apply functions double and increment to 5: ${applyFunctions(double, increment, 5)}`);

// Bullet points summary of activities
console.log("\nBullet Points Summary:");
console.log("• Function declarations allow defining named functions.");
console.log("• Function expressions allow defining functions as part of an expression.");
console.log("• Arrow functions provide a shorter syntax for function expressions.");
console.log("• Functions can have default parameter values.");
console.log("• Higher-order functions can take other functions as arguments and/or return functions.");
console.log("code by Nitik")