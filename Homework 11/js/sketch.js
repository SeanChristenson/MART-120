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

function setup()
{
  createCanvas (500, 500);
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
}

function draw()
{
    background(120,45,78);
    stroke(0);
    fill(0);

    rect(0,0,width,10);

    rect(0,0,10,height);

    rect(0,height-10,width, 10);

    rect(width-10,0,10,height-50);

    textSize(20);
    text("! Exit !", width-70,height-60)

    fill(20,30,123);
    circle(characterX,characterY,25)

    if(keyisDown(w))
    {
        characterY -= 10;
    }
    if(keyisDown(s))
    {
        characterY += 10;
    }
    if(keyisDown(a))
    {
        characterX -= 10;
    }
    if(keyisDown(d))
    {
        characterX += 10;
    }

    //Enemy
    fill(10,145,10);

    circle(shapeX, shapeY, 10);

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    if(shapeX > width)
    {
      shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    if(characterX > width && characterY > width-50)
    {
      fill(0);
      stroke(5);
      textSize(50);
      text("(>'-')> YOU WIN <('-'<)", width/2-50, height/2-50);

   
    }

   fill(100,100,100);
      circle(mouseShapeX, mouseShapeY, 25);
    
}
function mouseClicked()
{
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}
