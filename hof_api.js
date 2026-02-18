let response = [
  { id: 1, name: "Alice", active: true,  salary: 5000 },
  { id: 2, name: "Bob",   active: false, salary: 4000 },
  { id: 3, name: "Charlie", active: true, salary: 6000 }
];

// Use map
let names = response.map(user => user.name);

console.log(names);
// ["Alice", "Bob", "Charlie"]

// Use Filter
let activeUsers = response.filter(user => user.active).map(user => user.name);

console.log(activeUsers);
// [ 'Alice', 'Charlie' ] 

// Use Reduce
let totalSalary = response.reduce(
  (sum, user) => sum + user.salary,
  0
);

console.log(totalSalary);
// 15000

// use forEach
response.forEach(user => {
  console.log(`User: ${user.name}, Salary: ${user.salary}`);
});
