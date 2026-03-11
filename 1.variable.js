var name = "John"; //Can be changed
const age = 30; //Not changable
let school = "Nzs"; //Can be changed
city = "New York"; //Without var, const, or let, it becomes a global variable. Not recommended to use.

let acounCity;


console.table({ name, age, school, city, acounCity });

/* Output:
┌───────────┬────────────┐
│ (index)   │ Values     │
├───────────┼────────────┤
│ name      │ 'John'     │
│ age       │ 30         │
│ school    │ 'Nzs'      │
│ city      │ 'New York' │
│ acounCity │ undefined  │
└───────────┴────────────┘
*/

// Why undefined? Because we declared the variable but did not assign it a value.