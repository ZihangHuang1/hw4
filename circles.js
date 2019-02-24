function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  for (var i = 0; i < x.length; i = i + 10) {

    noFill();
    beginShape();
    vertex(x[i / 2], y[i + 3]);
    vertex(x[i * 2], y[i - 3]);
    vertex(x[i * 3], y[i / 4]);
    vertex(x[i + 3], y[i - 1]);
    endShape(CLOSE);
  }

  x = x.slice(-50); // keep the last 50 x values
  y = y.slice(-50); // keep the last 50 y values
}
