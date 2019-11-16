let table = [];
let center = [];
let vec;
let d;
let w = 10;
let h = w;
let numCol, numRow;

function setup() {
  createCanvas(400, 300);
  numCol = floor(width / w);
  numRow = floor(height / h);
  for (let i = 0; i < numCol; i++) {
    table[i] = [];
    for (let j = 0; j < numRow; j++) {
      table[i][j] = createVector(i * w + w / 2, j * h + h / 2);
    }
  }

  for (let z = 0; z < 5; z++) {
   center[z] = createVector(random(w , width - w), random(h, height - h));
    // center[0] = createVector(100, 100);
    // center[1] = createVector(300, 200);
  }
  noLoop();
}

function draw() {
  background(250);
  stroke(220, 20, 60, 20);
  strokeWeight(.05);
  fill(220, 20, 60);
  for (let z = 0; z < center.length; z++) {
    ellipse(center[z].x, center[z].y, 4.5);

    // Grid
    for (let i = 0; i < numCol; i++) {
      for (let j = 0; j < numRow; j++) {
        ellipse(table[i][j].x, table[i][j].y, .5);
        d = dist(center[z].x, center[z].y, table[i][j].x, table[i][j].y);
        //Verbindungslinien

        line(w / 2, j * h + h / 2, (numCol - 1) * w + w / 2, j * h + h / 2);
        vec = p5.Vector.sub(table[i][j], center[z]);
        vec.setMag(w*2);
        if (d < w*5) {
          push();
          stroke(220, 20, 60);
          strokeWeight(.5);
          fill(220, 20, 60);
          translate(table[i][j].x, table[i][j].y);
          line(0, 0, vec.x, vec.y);
          rotate(vec.heading());
          let arrowSize = 3.5;
          translate(vec.mag() - arrowSize / 2, 0);
          triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize / 2, 0);
          pop();
        }
      }
    }
  }
}
