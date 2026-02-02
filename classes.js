class Student{
    constructor (name, rollNumber, grade) {
        this.name= name;
        this.rollNumber= rollNumber;
        this.grade= grade;
    }
    getStudentInfo() {
        console.log( this.name + " | Roll: " + this.rollNumber + " | Grade: " + this.grade);
    }
    // Static method
    static schoolName() {
        console.log("Harvard Int'l School");
    }
}
// Create student objects using class 
const s1= new Student ("Nirajan", 1, "A");
const s2= new Student (" Nirjala", 2, "B+");
s1.getStudentInfo();
s2.getStudentInfo();
// Call static method using class name 
Student.schoolName();

// Uses of static method 
//=> They are used for work that is related to the class, not to a specific object. They store common information or perform actions. 
