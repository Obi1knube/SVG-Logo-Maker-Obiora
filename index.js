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
      let shape;
      switch (answers.shape) {
        case "circle":
          shape = new Circle();
          break;
        case "triangle":
          shape = new Triangle();
          break;
        case "square":
          shape = new Square();
          break;
        default:
          console.log("Invalid shape type");
      }
      shape.setShapeColor(answers.shapeColor);
      const logo = new Logo(shape, answers.text);
      logo.setText(answers.textColor, answers.text);
      const logoSvg = logo.render();
      console.log(logoSvg);
    });
}

promptUser();
