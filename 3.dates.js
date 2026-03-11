//Dates
//Date is object in JavaScript that represents a single moment in time. It provides various methods to work with dates and times, such as getting the current date, formatting dates, and performing date calculations.

let myDate = new Date(); // Current date and time
console.log(myDate); // Output: Current date and time
console.log(myDate.toLocaleDateString()); // Output: Current date in local format
console.log(myDate.toDateString()); // Output: Current date in a human-readable format
console.log(myDate.getFullYear());
console.log(myDate.getMonth() + 1); // Months are zero-indexed
console.log(myDate.getDate());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());


let myTimeStamp = Date.now(); // Current timestamp in milliseconds
console.log(myTimeStamp); // Output: Current timestamp in milliseconds