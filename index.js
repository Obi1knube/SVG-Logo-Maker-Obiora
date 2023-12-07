

// function promptUser():
//   - prompt for logo text
//   - prompt for text color
//   - prompt for shape type
//   - prompt for shape color
//   - return user input

// function main():
//   - userInputs = promptUser()
//   - logo = new Logo(userInputs)
//   - logo.render()
//   - saveSVGFile(logo)
//   - printMessage("Generated logo.svg")

// function saveSVGFile(logo):
//   - create file "logo.svg"
//   - write logo.render() to file

// function printMessage(message):
//   - print message to command line

// main()


const inquirer = require("inquirer");
const { Circle, Square, Triangle, Logo } = require("./lib/shapes");

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Enter logo text (up to 3 characters): ",
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter text color: ",
      },
      {
        type: "list",
        name: "shape",
        message: "Select a shape ",
        choices: ["circle", "square", "triangle"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter shape color: ",
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
      let shape = answers.shape;
      switch (shape) {
        case "circle":
          return new Circle();
        case "triangle":
          return new Triangle();
        case "square":
          return new Square();
        default:
          console.log("Invalid shape type");
      }
      shape.setShapeColor(answers.shapeColor)
      const logo = new Logo()
      logo.setText(answers.textColor, answers.text)
      logo.render()
    });
}
promptUser();
