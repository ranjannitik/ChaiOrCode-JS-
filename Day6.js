// Activity 1: Array Creation and Access
console.log("Activity 1: Array Creation and Access");

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let numbers = [1, 2, 3, 4, 5];
console.log('Task 1: Array of numbers:', numbers);

// Task 2: Access the first and last elements of the array and log them to the console.
console.log('Task 2: First element:', numbers[0]);
console.log('Task 2: Last element:', numbers[numbers.length - 1]);

// Activity 2: Array Methods (Basic)
console.log("\nActivity 2: Array Methods (Basic)");

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numbers.push(6);
console.log('Task 3: Array after push:', numbers);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
numbers.pop();
console.log('Task 4: Array after pop:', numbers);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
numbers.shift();
console.log('Task 5: Array after shift:', numbers);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
numbers.unshift(1);
console.log('Task 6: Array after unshift:', numbers);

// Activity 3: Array Methods (Intermediate)
console.log("\nActivity 3: Array Methods (Intermediate)");

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let doubledNumbers = numbers.map(num => num * 2);
console.log('Task 7: Doubled numbers:', doubledNumbers);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Task 8: Even numbers:', evenNumbers);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Task 9: Sum of numbers:', sum);

// Activity 4: Array Iteration
console.log("\nActivity 4: Array Iteration");

// Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log('Task 10: Array elements using for loop:');
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log('Task 11: Array elements using forEach:');
numbers.forEach(num => console.log(num));

// Activity 5: Multi-dimensional Arrays
console.log("\nActivity 5: Multi-dimensional Arrays");

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Task 12: Two-dimensional array (matrix):', matrix);

// Task 13: Access and log a specific element from the two-dimensional array.
console.log('Task 13: Element at [1][2]:', matrix[1][2]);

// Summary
console.log("\nSummary:");
console.log("- Activity 1: Array Creation and Access was started and completed.");
console.log("  - Created and logged an array from 1 to 5.");
console.log("  - Accessed and logged the first and last elements of the array.");
console.log("- Activity 2: Array Methods (Basic) was started and completed.");
console.log("  - Used push, pop, shift, and unshift methods and logged the updated arrays.");
console.log("- Activity 3: Array Methods (Intermediate) was started and completed.");
console.log("  - Used map, filter, and reduce methods and logged the results.");
console.log("- Activity 4: Array Iteration was started and completed.");
console.log("  - Iterated over the array using a for loop and forEach method, logging each element.");
console.log("- Activity 5: Multi-dimensional Arrays was started and completed.");
console.log("  - Created a two-dimensional array (matrix) and accessed a specific element, logging the results.");
console.log("By Nitik")