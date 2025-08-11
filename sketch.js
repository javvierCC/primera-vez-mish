var d;
function setup() {
  createCanvas(windowWidth, windowWidth);
  background(0,255,180);
}

//cambiar configuración de color
colorMode(HSB,360,100,100)

function draw() {
  d = random(10,60)
  fill(random(0,360),100,100);
  ellipse(mouseX,mouseY,d,d);
}

function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }
}
