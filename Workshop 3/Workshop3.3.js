let students = [
    { name: "Kobchai", grade: "A"},
    { name: "Mana", grade: "B"},
    { name: "Somsak", grade: "C"}
];

students.forEach((student, index) => {
    console.log(`Student ${index + 1}: ${student.name}, Grade: ${student.grade}`);
});

function showStudentCount() {
    console.log("Total students: " + students.length);
}
showStudentCount();