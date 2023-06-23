// this is my parent class
class Shapes {

    // constructor is where we pass in params
    constructor(color) {
      this.color = color;
    }
// setcolor method will change it's color 
    setColor(color) {
      this.color=color;
    }
  }
//   'new' creates a new instance of class/constructor func. and allows the constructor to initialize the object's properties. 
  const test = new Shapes()


  module.exports=Shapes