// Function to calculate sum
function sum(a, b) {
    return a + b;
}

// Read input from stdin
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let a = parseInt(input[0]);
let b = parseInt(input[1]);

// Output the result
console.log(sum(a, b));