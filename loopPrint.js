function printNumbers(n)
{
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i); // Collect numbers from 1 to n
    }
    console.log(result.join(" ")); // Print numbers from 1 to n separated by spaces
}

// Read input from stdin
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let n = parseInt(input[0]);

printNumbers(n);