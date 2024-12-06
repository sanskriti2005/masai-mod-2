const employeeDetails = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
]

// Filter the employees who have completed more than 5 tasks.
let filteredDetails = employeeDetails.filter((ele,i) => ele.tasksCompleted > 5);
console.log(filteredDetails);

// Map the filtered employees to a new array (of objects) that contains only the employee's name and their performance level. 
let ratingDetails = filteredDetails.map((ele,i) => ({
    name: ele.name,
    performance: ele.rating > 4.5 ? "Excellent" : ele.rating < 4.5 && ele.rating > 3 ? "Good" :"Needs Improvement"
}));
console.log(ratingDetails);

// Sort the final array of employees in descending order based on their performance level, prioritizing "Excellent", then "Good", and finally "Needs Improvement".

