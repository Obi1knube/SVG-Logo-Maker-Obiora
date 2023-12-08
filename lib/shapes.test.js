const { Circle, Square, Triangle, Logo } = require('./lib/shapes.js');


test('Circle render method should return the correct SVG string', () => {
    const circle = new Circle();
    circle.setShapeColor('blue');
    expect(circle.render()).toEqual('<circle cx="100" cy="100" r="50" fill="blue" />');
  });

