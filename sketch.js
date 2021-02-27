function setup() {
  createCanvas(800,400);
  m = createSprite(400, 200, 50, 50);
  f = createSprite(200, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  m.x = World.mouseX;
  m.y = World.mouseY;
  //if ((m.x - f.x === f.width / 2 + m.width / 2)) {
  if ((m.x - f.x < f.width / 2 + m.width / 2) && 
  (f.x - m.x < f.width / 2 + m.width / 2) && 
  (m.y - f.y < f.height / 2 + m.height / 2) && 
  (f.y - m.y < f.height / 2 + m.height / 2)) {
    m.shapeColor = "red";
    f.shapeColor = "blue";
  } else {
    m.shapeColor = "orange";
    f.shapeColor = "green";
  }
  drawSprites();
}