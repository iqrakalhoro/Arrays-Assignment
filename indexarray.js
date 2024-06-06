"use strict";
// Step 2
let employees = [
    {
        name: "Ali Hamza",
        hoursWorked: 8,
        hourlyRate: 100,
        salary: 40000
    },
    {
        name: "Bilal",
        hoursWorked: 20,
        hourlyRate: 200,
        salary: 20000
    },
    {
        name: "Umair",
        hoursWorked: 12,
        hourlyRate: 300,
        salary: 36000
    }
];
// Step 3
function calculateSalary(employees) {
    // Apply a 10% bonus if the employee worked 20 hours or more
    if (employees.hoursWorked >= 20) {
        employees.salary += (employees.salary / 100) * 10;
    }
    ;
}
// Step 4
employees.forEach(employees => {
    calculateSalary(employees);
    console.log(`Name: ${employees.name}, Salary: Rs ${employees.salary}`);
});
