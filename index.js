const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle, Logo } = require("./lib/shapes");
const svg2png = require("svg2png");

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

      fs.writeFile("./lib/shape.svg", logoSvg, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("SVG file created successfully!");
          convertSvgToPng("./lib/shape.svg", "./lib/shape.png").then(
            (outputFilePath) => {
              console.log(outputFilePath);
            }
          );
        }
      });
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

function convertSvgToPng(inputFilePath, outputFilePath) {
  return new Promise((resolve, reject) => {
    const input = fs.createReadStream(inputFilePath);
    const output = fs.createWriteStream(outputFilePath);

    input.pipe(svg2png()).pipe(output);

    output.on("finish", () => {
      resolve(outputFilePath);
    });

    output.on("error", (err) => {
      reject(err);
    });
  });
}

promptUser();