const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle, Logo } = require("./lib/shapes");
const { convertSvgToPng } = require('convert-svg-to-png');

// Function to generate the output file path
const outputFilePath = () => {
  const outputDirectory = "./lib/";
  const outputFileName = "image.png";
  return outputDirectory + outputFileName;
};

// Function to convert SVG to PNG
const convertSvgToPngFile = async () => {
  const inputFilePath = "./lib/shape.svg";
 // const outputFilePath = outputFilePath();

  // Your code for converting SVG to PNG goes here
  console.log(outputFilePath);
  (async () => {
    const inputFilePath = "./lib/shape.svg";
    const outputFilePath = await convertSvgToPng(inputFilePath);

    console.log(outputFilePath);
  })();
};

// Function to prompt the user for logo characteristics
const promptUser = () => {
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
      const shape = createShape(answers.shape);
      shape.setShapeColor(answers.shapeColor);

      const logo = new Logo(shape, answers.text);
      logo.setText(answers.textColor, answers.text);

      const logoSvg = logo.render();
      console.log(logoSvg);

      writeSvgToFile(logoSvg);
    });
};

// Function to create the appropriate shape object based on user input
const createShape = (shapeType) => {
  let shape;
  switch (shapeType) {
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
  return shape;
};

// Function to write the generated SVG logo to a file
const writeSvgToFile = (logoSvg) => {
  fs.writeFile("./lib/shape.svg", logoSvg, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("SVG file created successfully!");
      convertSvgToPngFile();
    }
  });
};

// Call the promptUser function to start the application
promptUser();

/*In this refactored version, I've separated the concerns into different functions:



outputFilePath: This function generates the output file path for the PNG file.



convertSvgToPng: This function handles the conversion of the SVG file to a PNG file. You can add your code for converting SVG to PNG in this function.



promptUser: This function prompts the user for logo characteristics using the inquirer package. It then creates the appropriate shape object based on the user's input, sets the shape color and text for the logo, renders the logo SVG, and writes it to a file.



createShape: This function creates the appropriate shape object based on the user's input for the shape type.



writeSvgToFile: This function writes the generated SVG logo to a file and calls the convertSvgToPng function.

*/
