let students = [{ name: "Alice", marks: 58 },

{ name: "Bob", marks: 85 },

{ name: "Charlie", marks: 92 },

{ name: "David", marks: 45 }]

let processStudents = (studentsArr) => {
    let filteredArr = studentsArr.filter(({marks}) => marks > 60 );
    let sortedArr = filteredArr.sort((a,b)=> b.marks-a.marks);
    let passedStudents = sortedArr.map(({name}) => name);
    return passedStudents;
}

console.log(processStudents(students));