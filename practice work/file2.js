//importing constants from file1.js
import { name, age } from "./file1.js";

console.log("Name:", name);
console.log("Age:", age);


//importing arrays from file1.js
import { numbers, colors } from './file1.js'; 
console.log(numbers); 
console.log(colors);
console.log(numbers[2]); // Accessing an element by index 
console.log(colors[1]); 


/*import myFun from './file1.js';
import myFun from './file1.js';
 myFun();*/

/*// Import variable
import myVar from "./file1.js";
myVar(); // Call the function to execute it*/

/* Import variable
import myStudent from './file1.js';
console.log(myStudent);

// Option 1: Access property directly
console.log(myStudent.id);
console.log(myStudent["name"]);

// Rename named export using "as"
import { score as points } from './file1.js';
console.log("Point" , points);*/

// Import Named Export
import { Names } from "./file1.js";
// Destructuring the array
const [Name1,,,Name4] = Names;
console.log("Names of Students:", Name1, Name4);
// OR
console.log("Names of Studnets "+ Name1 + Name4);
// OR
console.log("Names of Studnets "+ Name1 + " " +Name4);
// Import Default Export
import cities from "./file1.js";
// Destructuring the array
const [city1,,,city4] = cities;
console.log("Cities:", city1, city4); 

