var d;
var j;

function setup() {
  createCanvas(windowWidth, windowWidth);
  background(0,255,180);
}

function draw() {
  d = random(10,60)
  j = random(30,)
  fill(255,random(55,200));
  ellipse(mouseX,mouseY,d,d)
}

function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }
}
