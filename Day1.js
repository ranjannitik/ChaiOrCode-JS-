//Activity 1   Variable Declaration

//Task 1
console.log("Task 1")
var One = 98;
console.log(One);

console.log("\n");

//Task 2
console.log("Task 2")
let name = "Nitik";
console.log(name);

console.log("\n");

//Activity 2   Constant Declaration

//Task 3
console.log("Task 3")
const isTrue = true;
console.log(isTrue);

console.log("\n");

//Activity 3   Data Types

//Task 4
console.log("Task 4")
var Name = "Nitik";
var Age = 21;
var Graduate = false;
var arr = [1, 2, 3, 4, 5]; // object (arrays are considered objects in JavaScript)
var obj = {
  enroll: "0103222",
  class: 15,
};

console.log(typeof Name);
console.log(typeof Age);
console.log(typeof Graduate);
console.log(typeof arr);
console.log(typeof obj);

console.log("\n");

//Activity 4 Reassign Variables

//Task 5
console.log("Task 5")
let CodeBy = "Nitik";
console.log(CodeBy);
CodeBy = "Kittu";
console.log(CodeBy);

console.log("\n");

//Activity 5  Understanding const

//Task 6
console.log("Task 6")
const check = 89;
console.log(check);
try {
  check = 12;
  console.log(check);
} catch (e) {
  console.log("TypeError: Assignment to constant variable.");
}

console.log("\n");

console.log("DAY 1 COMPLETE");

console.log("\n\nFeeling happy!");

console.log("\nSummary of Learning Points:");
console.log("- Variable Declaration: Use var, let, and const to declare variables.");
console.log("- Constant Declaration: const is used for variables that should not be reassigned.");
console.log("- Data Types: Understand different data types like string, number, boolean, array, and object.");
console.log("- Reassign Variables: Demonstrate reassigning values to let variables.");
console.log("- Understanding const: Show that const variables cannot be reassigned.");

console.log("\nBy Nitik Ranjan");
