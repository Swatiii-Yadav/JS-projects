// Assignment
// create five students objects
// in each object detail method must be there
//properties------------
// chemistry mark
//phy mark
//math marks
//bio marks
//  create seperate method for each student as performance()

//? that will calculate the average marks and based on that utilize the grade function from window object
//? grade function will return the grade based on avg marks if avg marks is 90 --A grade and son on
//! one property is there in each object called as grade
//? from performance function you must assign the grade to the gradeproperty
//? printdetails method is there that will print and grade of the student

const gradeScale = {
    A: 90,
    B: 80,
    C: 70,
}

function getGrades(avgMarks) {
    if (avgMarks >= gradeScale.A) 
        return "A";
    if (avgMarks >= gradeScale.B)
         return "B";
    if (avgMarks >= gradeScale.C)
         return "C";
}


let students = [ {
        name: 'Swati',
        chemistry: 85,
        physics: 90,
        maths: 88,
        biology: 92, 
        grade: "",
        performance: function() {
            let avgMarks = (this.chemistry+this.physics+this.maths+this.biology) / 4;
            this.grade = getGrades(avgMarks);
        },
        printDetails: function() {
            console.log(`Student: ${this.name}, Grade: ${this.grade}`);
        },
    },{
        name: 'Yadav',
        chemistry: 78,
        physics: 74,
        maths: 80,
        biology: 79, 
        grade: "",
        performance: function() {
            let avgMarks = (this.chemistry + this.physics + this.maths + this.biology) / 4;
            this.grade = getGrades(avgMarks);
        },
        printDetails: function() {
            console.log(`Student: ${this.name}, Grade: ${this.grade}`);
        },
    },
    {
        name: 'Mahima',
        chemistry: 91,
        physics: 95,
        maths: 89,
        biology: 93, 
        grade: "",
        performance: function() {
            let avgMarks = (this.chemistry + this.physics + this.maths + this.biology) / 4;
            this.grade = getGrades(avgMarks);
        },
        printDetails: function() {
            console.log(`Student: ${this.name}, Grade: ${this.grade}`);
        },
    },
    {
        name: 'Akshay',
        chemistry: 60,
        physics: 95,
        maths: 70,
        biology: 88, 
        grade: "",
        performance: function() {
            let avgMarks = (this.chemistry + this.physics + this.maths + this.biology) / 4;
            this.grade = getGrade(avgMarks);
        },
        printDetails: function() {
            console.log(`Student: ${this.name}, Grade: ${this.grade}`);
        },
    },
    {
        name: 'Anchal',
        chemistry: 82,
        physics: 85,
        maths: 80,
        biology: 84, 
        grade: "",
        performance: function() {
            let avgMarks = (this.chemistry + this.physics + this.maths + this.biology) / 4;
            this.grade = getGrade(avgMarks);
        },
        printDetails: function() {
            console.log(`Student: ${this.name}, Grade: ${this.grade}`);
        }
    }
];

students.forEach(student => {
    student.performance();
    student.printDetails();
});