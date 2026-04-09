//This is a grade calculator to evaluate their grading.
let studentName = "Bharath";   // Assigned value to the variable
let englishScore = 75;   // Marks secured in English subject
let mathScore = 88;      // Marks secured in Math subject
let physicsScore = 91;    // Marks secured in Physics subject
let totalSubjects = 3;    // total number of subjects for which mark's received
let total = englishScore + mathScore + physicsScore; // total of All 3 subjects
let average = Number((total/totalSubjects).toFixed(2)); // Average of the total secured
let finalScore = average; // final scored assigned with the average

const gradeA = 90;        // grade A starts at 90
const gradeB = 80;        // grade B starts at 80
const gradeC = 70;        // grade C starts at 70
const gradeD = 60;        // grade D starts at 60
const gradeF = 0;         // grade F means student has scored below 60 

console.log(total);
console.log(average);
console.log(finalScore);
