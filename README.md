# JS-learning
Learning Js in depth.....


Variable declaration in JS:
    var name = "John"; //Can be changed
    const age = 30; //Not changable
    let school = "Nzs"; //Can be changed
    city = "New York"; //Without var, const, or let, it becomes a global variable. Not recommended to use.

    Difference between var, const, and let:
        var: Function-scoped, can be re-declared and updated.
        const: Block-scoped, cannot be re-declared or updated.
        let: Block-scoped, can be updated but not re-declared.
    Example:
        var name = "John";
        name = "Doe"; // Allowed

        const age = 30;
        age = 31; // Error: Assignment to constant variable.

        let school = "Nzs";
        school = "ABC"; // Allowed

        let city = "New York";
        city = "Los Angeles"; // Allowed

    Var vs Let:
        var is function-scoped, while let is block-scoped. This means that variables declared with var are accessible throughout the entire function, while variables declared with let are only accessible within the block they are defined in.

Data types in JS:
    Primitive data types: string, number, boolean, null, undefined, symbol. Defination of each:
        string: A sequence of characters enclosed in quotes. Example: "Hello, World!"
        number: Represents both integer and floating-point numbers. Example: 42, 3.14
        boolean: Represents a logical value that can be either true or false. Example: true, false
        null: Represents the intentional absence of any object value. Example: null
        undefined: Represents an uninitialized variable or a variable that has been declared but not assigned a value. Example: undefined
        symbol: Represents a unique identifier. Example: Symbol("id")

    Non-primitive data types: object, array, function. Defination of each:
        object: A collection of key-value pairs. Example: { name: "John", age: 30 }
        array: An ordered list of values. Example: [1, 2, 3]
        function: A block of code designed to perform a particular task. Example: function greet() { console.log("Hello!"); }

    Example:
        let name = "John"; // string
        let age = 30; // number
        let isStudent = true; // boolean
        let address = null; // null
        let phoneNumber; // undefined
        let id = Symbol("id"); // symbol

        let person = { name: "John", age: 30 }; // object
        let numbers = [1, 2, 3]; // array
        function greet() { console.log("Hello!"); } // function

Dates and Times:
    In JavaScript, you can work with dates and times using the built-in Date object. The Date object provides various methods to create, manipulate, and format dates and times.

    Creating a Date object:
        You can create a Date object using the new Date() constructor. It can be initialized with different parameters, such as a date string, a timestamp, or individual date components (year, month, day, etc.).
        Example:
            let currentDate = new Date(); // Current date and time
            let specificDate = new Date("2022-01-01"); // Specific date
            let timestampDate = new Date(1640995200000); // Date from timestamp
            let componentsDate = new Date(2022, 0, 1); // January 1, 2022 (month is zero-based)

    Manipulating Dates:
        The Date object provides various methods to manipulate dates, such as getting and setting individual components (year, month, day, etc.), adding or subtracting time, and comparing dates.
        Example:
            let date = new Date();
            date.setFullYear(2023); // Set the year to 2023
            date.setMonth(11); // Set the month to December (month is zero-based)
            date.setDate(25); // Set the day to 25

    Formatting Dates:
        You can format dates using methods like toLocaleDateString(), toISOString(), or by manually constructing a formatted string.
        Example:
            let date = new Date();
            console.log(date.toLocaleDateString()); // Output: "MM/DD/YYYY"
            console.log(date.toISOString()); // Output: "YYYY-MM-DDTHH:mm:ss.sssZ"
    Date Arithmetic:
        You can perform arithmetic operations on dates by using the getTime() method to get the timestamp and then adding or subtracting milliseconds.
        Example:
            let date1 = new Date("2022-01-01");
            let date2 = new Date("2022-01-10");
            let differenceInTime = date2.getTime() - date1.getTime(); // Difference in milliseconds
            let differenceInDays = differenceInTime / (1000 * 3600 * 24); // Convert to days
            console.log(differenceInDays); // Output: 9
    Time Zones:
        The Date object in JavaScript is based on the local time zone of the environment. You can work with time zones using libraries like Moment.js or the built-in Intl.DateTimeFormat object for formatting dates in specific time zones.
        Example:
            let date = new Date();
            let options = { timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit" };
            console.log(date.toLocaleDateString("en-US", options)); // Output: "MM/DD/YYYY" in New York time zone
    Conclusion:
        The Date object in JavaScript provides a powerful way to work with dates and times. You can create, manipulate, format, and perform arithmetic operations on dates using the various methods available. For more advanced date handling, consider using libraries like Moment.js or date-fns.

Arrays:
    Arrays in JavaScript are used to store multiple values in a single variable. They are ordered collections of elements that can be of any data type, including other arrays and objects.

    Creating Arrays:
        You can create arrays using array literals or the Array constructor.
        Example:
            // Array Literals
            const fruits = ["Apple", "Banana", "Cherry"];
            console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

            // Array Constructor
            const numbers = new Array(1, 2, 3, 4, 5);
            console.log(numbers); // Output: [1, 2, 3, 4, 5]