let students = [
    { name: "Kobchai", score: 85},
    { name: "Somjai", score: 40},
    { name: "Somsak", score: 75},
    { name: "Samak", score: 60},
    { name: "Pakdee", score: 90},
    { name: "Parkphu", score: 45},
];

function filterPassedStudents(minScore) {
    students.forEach(student => {
        if (student.score >= minScore) {
            console.log(`Student ${student.name} passed with score ${student.score}`);
        }
    });
}

filterPassedStudents(60);