# 10 Object-oriented Programming: SVG Logo Maker

## Your Task

Your task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and passes all of the tests. You’ll need to submit a link to the video **and** add it to the README of your project.

> **Note**: There is no starter code for this assignment.
### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Mock-Up

The following image shows a mock-up of the generated SVG given the following input entered by the user: `SVG` for the text, `white` for the text color, `circle` from the list of shapes, and `green` for the shape color. Note that this is just an image of the output SVG and not the SVG file itself:

![Image showing a green circle with white text that reads "SVG.".](./lib/10-oop-homework-demo.png)

## Additional Requirements

This Challenge combines many of the skills covered so far. In addition to the User Story and Acceptance Criteria, we’ve provided some guidelines to help you get started.

Because this Challenge requires a video submission, refer to the [Full-Stack Blog video submission guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for guidance on creating and sharing a video.

Your application should use [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting input from the user. The application will be invoked by using the following command:

```bash
node index.js
```

It is recommended that you start with a directory structure that looks like the following example:

```md
.  
├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
    └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions           
```

> **Important**: Make sure that you remove `dist` from the `.gitignore` file so that Git will track this folder and include it when you push up to your application's repository.
The application must include `Triangle`, `Circle`, and `Square` classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the `Triangle`, `Circle`, and `Square` classes in a parent `Shape` class and use inheritance to reuse the code in the child classes.

Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.

The following example test should pass:

```js
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
```

You may need to add additional files in the `lib` folder for handling user input, writing to a file, etc. Writing tests for these additional files is **optional**.

## Helpful SVG Resources

* [Example SVG](https://static.fullstack-bootcamp.com/fullstack-ground/module-10/circle.svg)

* [Scalable Vector Graphics (SVG)](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)

* [SVG tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)

* [Basic SVG shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)

* [Text in SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts)

* [SVG VS Code extension](https://marketplace.visualstudio.com/items?itemName=jock.svg)


## Review

You are required to submit the following for review:

* A walkthrough video that demonstrates the functionality of the application and passing tests.

* At least one sample SVG file generated using your application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

## PseudoCode  with separation of concern

class Shape:
  - type
  - color

class Circle extends Shape:
  - render()

class Triangle extends Shape:
  - render()

class Square extends Shape:
  - render()

class Logo:
  - text
  - textColor
  - shape
  - shapeColor
  - render()

function promptUser():
  - prompt for logo text
  - prompt for text color
  - prompt for shape type
  - prompt for shape color
  - return user input

function main():
  - userInputs = promptUser()
  - logo = new Logo(userInputs)
  - logo.render()
  - saveSVGFile(logo)
  - printMessage("Generated logo.svg")

function saveSVGFile(logo):
  - create file "logo.svg"
  - write logo.render() to file

function printMessage(message):
  - print message to command line

main()

This algorithm separates the concerns by using separate classes for shapes and the logo. It also follows object-oriente d programming principles by using inheritance to reuse code and creating separate classes for each shape type.

## Results
Here is a link to the walkthrough video : https://drive.google.com/file/d/1pXBVvzvX16WmDZ3CmcXXEYhIxEPdeCaW/view
Here is a link to the code: https://github.com/Obi1knube/SVG-Logo-Maker-Obiora


