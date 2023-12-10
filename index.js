const inquirer = require("inquirer");
const fs = require("pn/fs");
const { Circle, Square, Triangle, Logo } = require("./lib/shapes.js");
const svg2png = require("svg2png");

function promptUser() {
  // Use inquirer to prompt the user to introduce characteristics of the SVG logo
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

      // Write the generated SVG logo to a file
      fs.writeFile("./lib/logo.svg", logoSvg, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("SVG file created successfully!");

          // Read the contents of the SVG file into a buffer
          fs.readFile("./lib/logo.svg", (err, data) => {
            if (err) {
              console.error(err);
            } else {
              // Convert SVG to PNG using the sourceBuffer
              svg2png(data, { width: 300, height: 200 })
                .then((buffer) => fs.writeFile("./lib/logo.png", buffer))
                .catch((e) => console.error(e));
            }
          });

          // // Convert SVG to PNG
          // fs.readFile("./lib/logo.svg");
          // svg2png(sourceBuffer, { width: 300, height: 200 })
          //   .then((buffer) => fs.writeFile("./lib/logo.png", buffer))
          //   .catch((e) => console.error(e));
        }
      });
    });
}

promptUser();
