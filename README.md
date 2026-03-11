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
