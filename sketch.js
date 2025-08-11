var d;

function setup() {
  createCanvas(windowWidth, windowWidth);
  background(0,255,180);
}

function draw() {
  d = random(10,60)
  fill(255,random(55,200));
  ellipse(mouseX,mouseY,d,d)
}