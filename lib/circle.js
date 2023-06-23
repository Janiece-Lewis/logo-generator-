const Shapes = require('./shapes')

class Circle extends Shapes {
    constructor(color) {
      super(color); // call the super class constructor and pass in the name parameter
    }
  
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  module.exports= Circle