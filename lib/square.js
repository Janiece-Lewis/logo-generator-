const Shapes = require('./shapes')

class Square extends Shapes {
    constructor(color) {
      super(color); // call the super class constructor and pass in the name parameter
    }
  
    render() {
      return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;

    }
  }
  
  module.exports= Square