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

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

function setup()
{
  createCanvas (500, 500);
  for (var i = 0; i < 5; i++) {
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    shapeXs[i] = random(500);
    shapeYs[i] = random(500);
    diameters[i] = random(10,50);
    shapeXSpeeds[i] = shapeXSpeed;
    shapeYSpeeds[i] = shapeYSpeed;
  }

  createCharacter(100,350);
  createObstacles();
 for( var i = 0; i < 5; i++){
  shapeXs[i] += shapeXSpeeds[i];
  shapeYs[i] += shapeYSpeeds[i];
 
  if (shapeXs[i] > width) {
  shapeXs[i] = 0;
  }
  
  if (shapeXs[i] < 0) {
  shapeXs[i] = width;
  }
  
  if (shapeYs[i] > height) {
  shapeYs[i] = 0;
  }
  
  if (shapeYs[i] < 0) {
  shapeYs[i] = height;
  }
 }
}

function draw() {
  background(120,45,78);
  stroke(0);
  fill(0);

  createObstacles();

  // call create border thingy
  createBorders(10);

  textSize(20);
  text("! Exit !", width-70,height-60)

  drawCharacter();
  characterMovement();

  //Enemy
  fill(50, 50, 50);
  //circle(shapeX, shapeY, 10);

  for (var i = 0; i < shapeXs.length; i++) {
    circle(shapeXs[i], shapeYs[i], diameters[i]);
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1); 
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  }
  for( var i = 0; i < 5; i++){
    
  shapeXs[i] += shapeXSpeed;
  shapeYs[i] += shapeYSpeed;
  
  if(shapeXs[i] > width) {
    shapeXs[i] = 0;
  }
  if(shapeXs[i] < 0) {
    shapeXs[i] = width;
  }
  if(shapeYs[i] > height) {
    shapeYs[i] = 0;
  }
  if(shapeYs[i] < 0) {
    shapeYs[i] = height;
  }
  
  if(characterX > width && characterY > width-50) {
    fill(0);
    stroke(5);
    textSize(50);
    text("YOU WIN", width/2-50, height/2-50);
  }

  fill(200, 200, 200);
  circle(mouseShapeX, mouseShapeY, 25);
}

}

function characterMovement()
{

  if(keyIsDown(w))
  {
      characterY -= 3;
  }
  if(keyIsDown(s))
  {
      characterY += 3;
  }
  if(keyIsDown(a))
  {
      characterX -= 3;
  }
  if(keyIsDown(d))
  {
      characterX += 3;
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

// draws squares in random positions on the map
function createObstacles() {
  // set random positions and speeds for obstacles
  obstacle1X = Math.floor(Math.random() * (width-50)) + 25;
  obstacle1Y = Math.floor(Math.random() * (height-50)) + 25;
  obstacle1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  obstacle1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);

  obstacle2X = Math.floor(Math.random() * (width-50)) + 25;
  obstacle2Y = Math.floor(Math.random() * (height-50)) + 25;
  obstacle2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  obstacle2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);

  // draw obstacles
  fill(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
  rect(obstacle1X, obstacle1Y, 30, 50);
  rect(obstacle2X, obstacle2Y, 50, 30);
  rect(obstacle2X, obstacle2Y, 10, 70);
}

function updateObstacles() {
  // update obstacle positions
  obstacle1X += obstacle1XSpeed;
  obstacle1Y += obstacle1YSpeed;
  obstacle2X += obstacle2XSpeed;
  obstacle2Y += obstacle2YSpeed;

  // check if obstacles hit the walls and reverse direction if they do
  if (obstacle1X > width-50 || obstacle1X < 0) {
    obstacle1XSpeed = -obstacle1XSpeed;
  }
  if (obstacle1Y > height-50 || obstacle1Y < 0) {
    obstacle1YSpeed = -obstacle1YSpeed;
  }
  if (obstacle2X > width-50 || obstacle2X < 0) {
    obstacle2XSpeed = -obstacle2XSpeed;
  }
  if (obstacle2Y > height-50 || obstacle2Y < 0) {
    obstacle2YSpeed = -obstacle2YSpeed;
  }
}