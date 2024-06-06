"use strict";
// Step 2
let students = [
    {
        name: "ALi Hamza",
        grades: [1, 2, 3, 4]
    },
    {
        name: "Bilal",
        grades: [2, 3, 4, 5]
    },
    {
        name: "Aleem",
        grades: [5, 6, 7, 8]
    },
];
// Step 3
let calculateAverageGrade = (grades) => {
    let total = 0;
    grades.forEach((val) => {
        total += val;
    });
    return total / grades.length;
};
//Step 4
for (let i = 0; i < students.length; i++) {
    let studentAverage = calculateAverageGrade(students[i].grades);
    console.log(`Students name: ${students[i].name}`);
    console.log(`Students average: ${Math.round(studentAverage)}\n`);
}
