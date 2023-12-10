const { Circle, Square, Triangle, Logo } = require("./shapes.js");

describe("circle render method", () => {
test("Circle render method should return the correct SVG string", () => {
  const circle = new Circle();
 circle.setShapeColor("blue");
  expect(circle.render()).toEqual(
    '<circle cx="100" cy="100" r="50" fill="blue" />'
  );
});
});


describe("square render method",()=> {
  it("should render square with specified color and dimension",()=>{
  const square = new Square();
  square.setShapeColor('red');
  expect(square.render()).toEqual(
  `<rect x="100" y="100" width="100" height="100" fill="red" />` );
});
});

describe("triangle render method",()=> {
  it("should render triangle with specified color and dimension",()=>{
  const triangle = new Triangle ();
  triangle.setShapeColor('blue');
  expect(triangle.render()).toEqual(
    `<polygon points="50, 150 150, 150 100, 50" fill="blue" />` );
});
});