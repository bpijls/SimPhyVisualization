class Line {
  constructor(grid){
    this.grid = grid;
    grid.geometry.push(this);

    this.s = createVector();
    this.r = createVector();
  }

  draw(){
    var s = p5.Vector.mult(this.s, this.grid.scale);
    var r = p5.Vector.mult(this.r, this.grid.scale);
    var p0 = p5.Vector.add(s, p5.Vector.mult(r, -1000));
    var p1 = p5.Vector.add(s, p5.Vector.mult(r, 1000));
    fill(255);
    stroke(255);
    line(p0.x, p0.y, p1.x, p1.y);
    ellipse(s.x, s.y, 10, 10);
    ellipse(r.x + s.x, s.y + r.y, 10, 10);    
  }
}

class Grid {

  constructor(){
    this.height = 20;
    this.width = 20;
    this.majorSpacing = 1;    
    this.minorSpacing = 0.5;
    this.scale = 25;

    this.matrix = new Matrix();
    this.matrix.setPosition(new p5.Vector(width/2, height/2));
    this.geometry = [];
  }

  draw(){
    push();
    this.matrix.apply();
    

    var w2 = this.width/2 * this.scale, 
      h2 = this.height/2 * this.scale,
      majorSpacing = this.majorSpacing * this.scale,
      minorSpacing = this.minorSpacing * this.scale;


    stroke(127);
    for (var x = -w2; x<w2+minorSpacing; x+= minorSpacing) line(x, -h2, x, h2);
    for (var y = -h2; y<h2+minorSpacing; y+= minorSpacing) line(-w2, y, w2, y);

    stroke(255);
    strokeWeight(3);
    line(0, -h2, 0, h2);
    line(-w2, 0, w2, 0);

    strokeWeight(1);

    for (var x = -w2; x<w2+majorSpacing; x+= majorSpacing) line(x, -h2, x, h2);    
    for (var y = -h2; y<h2+majorSpacing; y+= majorSpacing) line(-w2, y, w2, y);

    noStroke();
    fill(255);
    for (var x = -w2; x<w2+majorSpacing; x+= majorSpacing) text(x/this.scale, x, 0);    
    for (var y = -h2; y<h2+majorSpacing; y+= majorSpacing) text(y/this.scale, 0, y);
        
    this.geometry.forEach(function(g){
      g.draw();
    });

    pop();
  }
}

let myLine;
let myGrid;

function setup() {
  createCanvas(720, 400);
  
  myGrid = new Grid();
  myLine = new Line(myGrid);
}

function draw() {
  background(64);

  
  myLine.s.set(5, 5);
  myLine.r.set(mouseX, mouseY);
  myGrid.draw();

}
