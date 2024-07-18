// Activity 1: If-Else Statements

// Task 1
console.log("Task 1 \n");
let no = 0;
if (no > 0) console.log("Positive");
else if (no < 0) console.log("Negative");
else console.log("Zero");
console.log("\n");

// Task 2
console.log("Task 2 \n");
let age = 20;
if (age >= 18) console.log("Eligible for vote");
else console.log("Not Eligible");
console.log("\n");


// Activity 2: Nested If-Else Statements

// Task 3
console.log("Task 3 \n");
let a = 4;
let b = 3;
let c = 1;
let largest;
// Compare a with b and c
if (a > b) {
    if (a > c) {
        largest = a;
    } else {
        largest = c;
    }
} else {
    // Compare b with c
    if (b > c) {
        largest = b;
    } else {
        largest = c;
    }
}
console.log("largest : ", largest);
console.log("\n");


// Activity 3: Switch Case

// Task 4
console.log("Task 4 \n");
let num = 5;
let dayName;
switch (num) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number";
}
console.log(" dayName : ", dayName, "\n");

// Task 5
console.log("Task 5 \n");
let grade;
let score = 85;
switch (true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    case (score >= 50):
        grade = 'E';
        break;
    default:
        grade = 'F';
}
console.log(" Grade : ", grade, "\n");


// Activity 4: Conditional (Ternary) Operator

// Task 6
console.log("Task 6 \n");
let n = 10;
let ans = n % 2 === 0 ? "Even" : "Odd";
console.log("Result: ", ans, "\n");


// Activity 5: Combining Conditions

// Task 7
console.log("Task 7 \n");
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

// Test the function
let years = [2000, 1900, 2024, 2023];
years.forEach(year => {
    console.log(`Year: ${year}, is leap year: ${isLeapYear(year)}`);
});


// Summary Notes
console.log("\nSummary Notes:");
console.log("- Task 1: Check if a number is positive, negative, or zero.");
console.log("- Task 2: Check if a person is eligible to vote based on age.");
console.log("- Task 3: Find the largest of three numbers using nested if-else.");
console.log("- Task 4: Use a switch case to convert a number to a day of the week.");
console.log("- Task 5: Assign a grade based on a score using a switch case.");
console.log("- Task 6: Determine if a number is even or odd using the ternary operator.");
console.log("- Task 7: Check if a year is a leap year using if-else conditions.");

console.log("\nCode By Nitik");
