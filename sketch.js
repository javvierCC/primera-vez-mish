var d;
function setup() {
  createCanvas(windowWidth, windowWidth).position(0,0).style('z-index','-1');
  background(0,255,180);
}

function draw() {
  d = random(10,60)
  
//cambiar configuración de color
  colorMode(HSB,360,100,100)
  
  fill(random(0,360),100,100);
  ellipse(mouseX,mouseY,d,d);
}

function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }
}
