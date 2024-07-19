// Activity 1: For Loop

// Task 1: 
console.log("Task 1 \n");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("\n");

// Task 2: 
console.log("Task 2 \n");
for (let i = 1; i <= 10; i++) {
    console.log("5 X", i, "=", 5 * i);
}
console.log("\n");

// Activity 2: While Loop

// Task 3: 
console.log("Task 3 \n");
let n = 10;
let sum = 0;
while (n > 0) {
    sum += n;
    n--;
}
console.log("The sum is:", sum);
console.log("\n");

// Task 4: 
console.log("Task 4 \n");
let num = 10;
while (num > 0) {
    console.log(num);
    num--;
}
console.log("\n");

// Activity 3: Do...While Loop

// Task 5: 
console.log("Task 5 \n");
let i = 1;
do {
    console.log(i++);
} while (i <= 5);
console.log("\n");

// Task 6: 
console.log("Task 6 \n");
let fact = 5;
let a = 1;
let res = 1;
do {
    res *= a;
    a++;
} while (a <= fact);
console.log(res);
console.log("\n");

// Activity 4: Nested Loops

// Task 7: 
console.log("Task 7 \n");
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log("");
}
console.log("\n");

// Summary
console.log("Summary:\n");
console.log("- Activity 1: For Loop");
console.log("  - Task 1: Prints numbers from 1 to 10.");
console.log("  - Task 2: Prints the multiplication table of 5 up to 10.");
console.log("\n- Activity 2: While Loop");
console.log("  - Task 3: Calculates the sum of numbers from 1 to 10.");
console.log("  - Task 4: Prints numbers from 10 to 1.");
console.log("\n- Activity 3: Do...While Loop");
console.log("  - Task 5: Prints numbers from 1 to 5.");
console.log("  - Task 6: Calculates the factorial of 5.");
console.log("\n- Activity 4: Nested Loops");
console.log("  - Task 7: Prints a pattern of asterisks forming a right-angled triangle.");
console.log("\nCode by Nitik");
