
const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');


function generateMarkdown(data) {
  let shape
  if (data.shape === 'circle') {
    shape = new Circle()
  }
  else if (data.shape === 'square') {
    shape = new Square()
  }
  else if (data.shape === 'triangle') {
    shape = new Triangle()
  }

  shape.setColor(data.shapeColor)
  console.log("-- ", shape)
  return `
  <svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">
${shape.render()}


<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg>

`
    ;
}

module.exports = generateMarkdown;
