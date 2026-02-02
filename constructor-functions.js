//Topic 2: Constructor Functions
// Constructor function for creating Car objects
function Car(brand, model, year) {
    this.brand= brand;
    this.model= model;
    this.year= year;
    this.getDetails= function() { // Adding method to the object 
        console.log(
            this.brand+" " + this.model+"("+ this.year +")"
        );
    };

}
// Creating multiple instances
const car1= new Car ("Toyota", "Fortuner", 2021);
const Car2= new Car("Tata", "Nexon", 2021);
// Print
car1.getDetails();
Car2.getDetails();

//What is a constructor function?
//=> It is a special function used to create objects. It usually starts with capital letter. 
// Why is the new keyword required?
// => It is required to create a new empty object, connect the object to the constructor's prototype and return the new obj automatically. 