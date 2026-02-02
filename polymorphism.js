//Topic 6: Polymorphism
class Shape {
    calculateArea() {
        console.log("Area is not defined");
    }
}
class Rectangle extends Shape {
    constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
}
 calculateArea() {
    console.log ("Rectangle Area:",this.length * this.width );
 }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() { 
    console.log (" Circle Area: ",3.14 * this.radius * this.radius );
  }
}
// Polymorphism
let shapes= [
    new Rectangle(7, 8),
    new Circle(7)
];
shapes.forEach(shape => {
  console.log(shape.calculateArea());
});

// Polymorphism means same method name but different behaviour based on the object.
//Method overriding works when a child class defines a method with the same name as parent class method. 
