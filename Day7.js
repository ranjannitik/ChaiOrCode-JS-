// Activity 1: Object Creation and Access
console.log("Activity 1: Object Creation and Access");

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
console.log("Task 1:");
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log("Task 2:");
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);

// Activity 2: Object Methods
console.log("Activity 2: Object Methods");

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
console.log("Task 3:");
book.getDetails = function() {
    return `${this.title} by ${this.author}`;
};
console.log(book.getDetails());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
console.log("Task 4:");
book.updateYear = function(newYear) {
    this.year = newYear;
};
book.updateYear(1965);
console.log(book);

// Activity 3: Nested Objects
console.log("Activity 3: Nested Objects");

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
console.log("Task 5:");
let library = {
    name: "City Library",
    books: [
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        book
    ]
};
console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("Task 6:");
console.log(`Library Name: ${library.name}`);
library.books.forEach(b => console.log(`Title: ${b.title}`));

// Activity 4: The this Keyword
console.log("Activity 4: The this Keyword");

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
console.log("Task 7:");
book.getTitleAndYear = function() {
    return `${this.title} (${this.year})`;
};
console.log(book.getTitleAndYear());

// Activity 5: Object Iteration
console.log("Activity 5: Object Iteration");

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
console.log("Task 8:");
for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log("Task 9:");
console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));

// Bullet points summary of activities
console.log("\nBullet Points Summary:");
console.log("• Objects can be created with properties and methods.");
console.log("• Properties can be accessed and modified using dot notation or bracket notation.");
console.log("• Methods are functions defined within an object and can use the 'this' keyword to refer to the object.");
console.log("• Nested objects allow for complex data structures.");
console.log("• The 'for...in' loop can be used to iterate over object properties.");
console.log("• Object.keys and Object.values methods provide arrays of an object's keys and values.");
console.log("Code By Nitik")
