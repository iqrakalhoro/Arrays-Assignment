// Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
// Step 1
type Student = {
    name: string;
    grades: number[];
};

// Step 2
let students: Student[] = [
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

let calculateAverageGrade = (grades: number[]): number => {
    let total: number = 0;
    grades.forEach ((val) => {
        total += val
     })
    return total / grades.length;
}

//Step 4

for(let i = 0; i < students.length; i++){
    let studentAverage: number = calculateAverageGrade(students[i].grades)
    console.log(`Students name: ${students[i].name}`);
    console.log(`Students average: ${Math.round(studentAverage)}\n`);}