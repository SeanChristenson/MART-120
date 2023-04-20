var characterX = 100;
var characterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeX = 40;
var shapeY = 40;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX;
var mouseShapeY;
var obstacle1X, obstacle1Y, obstacle2X, obstacle2Y;

function setup()
{
  createCanvas (500, 500);
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  createCharacter(200,350);
}

function draw() {
  background(120,45,78);
  stroke(0);
  fill(0);

  // call create border thingy
  createBorders(10);

  textSize(20);
  text("! Exit !", width-70,height-60)

  drawCharacter();
  characterMovement();

  //Enemy
  fill(10,145,10);
  circle(shapeX, shapeY, 10);

  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);

  shapeX += shapeXSpeed;
  shapeY += shapeYSpeed;

  if(shapeX > width) {
    shapeX = 0;
  }
  if(shapeX < 0) {
    shapeX = width;
  }
  if(shapeY > height) {
    shapeY = 0;
  }
  if(shapeY < 0) {
    shapeY = height;
  }

  if(characterX > width && characterY > width-50) {
    fill(0);
    stroke(5);
    textSize(50);
    text("YOU WIN", width/2-50, height/2-50);
  }

  fill(100,100,100);
  circle(mouseShapeX, mouseShapeY, 25);

  // call create obstacles
  createObstacles();
}

function characterMovement()
{

  if(keyIsDown(w))
  {
      characterY -= 10;
  }
  if(keyIsDown(s))
  {
      characterY += 10;
  }
  if(keyIsDown(a))
  {
      characterX -= 10;
  }
  if(keyIsDown(d))
  {
      characterX += 10;
      console.log(characterX)
  }

}

function createCharacter(x,y)
{
  characterX = x;
  characterY = y;
  console.log(characterX)
  
}

function drawCharacter()
{
  fill(20,30,123);
  circle(characterX,characterY,25)
}

function createBorders(thickness)
{
  rect(0,0,width,thickness);

    rect(0,0,thickness,height);

    rect(0,height-thickness,width, thickness);

    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}

function createObstacles() {
  // set random positions for obstacles
  obstacle1X = Math.floor(Math.random() * (width-50)) + 25;
  obstacle1Y = Math.floor(Math.random() * (height-50)) + 25;
  obstacle2X = Math.floor(Math.random() * (width-50)) + 25;
  obstacle2Y = Math.floor(Math.random() * (height-50)) + 25;

  // draw obstacles
  fill(255, 0, 0);
  rect(obstacle1X, obstacle1Y, 50, 50);
  rect(obstacle2X, obstacle2Y, 50, 50);}