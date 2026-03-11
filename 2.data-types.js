//Data types and Ecma standard

// Primitive Data Types

// 1. String - Text data
const name = "John Doe";
const message = 'Hello World';
const template = `Welcome ${name}`;

// 2. Number - Integer and Float
const age = 25;
const price = 19.99;
const negativeNum = -5;

// 3. BigInt - Large integers beyond Number limit
const bigNumber = 9007199254740991n;
const anotherBig = BigInt(123456789012345);

// 4. Boolean - True or False
const isActive = true;
const isDeleted = false;

// 5. Undefined - Variable declared but no value assigned
let undefinedVar;

// 6. Null - Intentional absence of value
const emptyValue = null;

// 7. Symbol - Unique identifier
const id = Symbol('id');
const uniqueKey = Symbol.for('key');

// Non-Primitive Data Types (Objects)

// 8. Object - Key-value pairs
const user = {
    name: "Alice",
    age: 30,
    active: true
};

// 9. Array - Ordered collection
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "text", true, null];

// 10. Function - Reusable code block
function greet() {
    return "Hello";
}
const arrowFunc = () => "Hi";

// 11. Date - Date and time
const now = new Date();

// 12. RegExp - Regular expression pattern
const pattern = /[a-z]/i;