class Shape {
  constructor() {
    this.shapeColor = "";
  }

  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    // Placeholder render method for the Shape class
    return "";
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="100" cy="100" r="50" fill="${this.shapeColor}" />`;
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
    this.text = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${textMessage}</text>`;
  }

  render() {
    const shapeSvg = this.shape.render();
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeSvg}${this.text}</svg>`;
  }
}

module.exports = { Circle, Square, Triangle, Logo };