//Topic 4: Inheritance
class Animal{
    constructor(name) {
        this.name= name;

    }
    // Method defining animal behaviour 
    makeSound() {
        console.log("This animal makes noise");
    }
}
// child class dog that inherits from animal
class Dog extends Animal{
    constructor(name) {
        super(name) // calls the parent class constructor and initializes properties from animal 

    }
    //Overriding the makesound() method
    makeSound(){
        console.log(this.name+ " is barking ");
    }
}
// Creating an obj of animal class
const animal1= new Animal ("Unknown Animal");
const dog1= new Dog("Tison");
animal1.makeSound();
dog1.makeSound();

//Inheritance: It is a method that allows one class(child) to use the properties of another class(parent).
// extends : This keyword allows the child class to access methods and properties of the parent.
// super():  It is used inside the child class constructor. It calls the parent class constructor.