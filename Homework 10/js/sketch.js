let x = 40;
let y = 40;
let goLeft = false;
let goLeftForY = false;
function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(120,45,78);
    fill(255, 205, 0)
    circle(x,y,250,100,175);
    fill(12, 102, 5)
    rect(x,220,185,60,180);
    fill(12,12,12)
    triangle(y,225, 400, y,208, 200, 70, 300,150);
    point(200, 75);
    point(300, 75);
    line(y,200, 130, 300, 95);
  if(goLeft == false){
    x= x+3
    
  }
  if(goLeft==true){
    x=x-5;
  }
  if(x>400)
  {
    goLeft= true;
  }
  if(x<0)
 {
      goLeft= false;
  }
    if(goLeftForY == false){
    y= y+3
    
  }
  if(goLeftForY==true){
    y=y-5;
  }
  if(y>400)
  {
    goLeftForY= true;
  }
  if(y<0)
 {
      goLeftForY= false;
  }
}