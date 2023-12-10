
class Shape {
  constructor() {
    this.shapeColor = "";
  }
  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="50, 150 150, 150 100, 50" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" />`;
  }
}

class Logo {
  constructor(shape, text) {
    this.text = text;
    this.shape = shape;
  }
  setText(textColor, textMessage) {
    this.text = `<text x="150" y="125" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${textMessage}</text>`;
  }
  render() {
    const shapeSvg = this.shape.render();
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeSvg}${this.text}</svg>`;
  }
}

module.exports = { Circle, Square, Triangle, Logo };