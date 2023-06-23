

const generateMarkdown = require('./lib/generateMarkdown');
const Circle = require('./lib/circle')
const Square = require('./lib/square')
const Triangle = require('./lib/triangle')
const fs = require('fs')
const inquirer = require('inquirer')





const questions = [
  {
    type: 'input',
    message: 'What text do you want on your logo? Please stay within 3 characters',
    name: 'text',
    validate: (input) => {
      if (input.length < 3 || input.length > 3) {
        return 'choice must be 3 characters'
      }
      return true
    }
  },
  {
    type: 'list',
    message: 'What text color do you want?',
    choices: ['red', 'orange', 'yellow', 'green', 'blue', 'black', 'white'],
    name: 'textColor',
  },
  {
    type: 'list',
    message: 'What shape do you want your logo?',
    choices: ['circle', 'square', 'triangle'],
    name: 'shape',
  },
  {
    type: 'list',
    message: 'What color do you want your shape?',
    choices: ['red', 'orange', 'yellow', 'green', 'blue', 'black', 'white'],
    name: 'shapeColor',
  },
]





function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created logo!')
  );

}


function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    console.log("init - ", answers)
    // const logoDesign = generateMarkdown(answers)
    // console.log(logoDesign)
    writeToFile('./examples/logo.svg', generateMarkdown({ ...answers }))

  })
}

init();