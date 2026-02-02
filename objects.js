//Topic 1: Objects in JavaScript
//simple object
let person={
    name: "Nirjala",
    age: 19,
    city:"Kathmandu",
    greet: function() {
        console.log("Hi, my name is "+ this.name);
    }
};
//Access using dot notation
console.log(person.name);
//Access using bracket notation
console.log(person["age"]);
//Update existing property
person.city="Lalitpur";
//Add new property dynamically
person.sem= "third";
//call 
person.greet();

//Object: An object is a collection of related datas stored in one variable.  It is a way to store the datas in key-value pair. 
// Why objects are useful in real world applications?
//=> Objects help keep data organized.
//=> They make the code easier to understand, read and manage. 
