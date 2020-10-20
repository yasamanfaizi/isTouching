function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(600, 200, 30, 80);
}

function draw() {
  background("gray");  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if (abs(fixedrect.x-movingrect.x)<fixedrect.width/2+movingrect.width/2 &&
  abs(fixedrect.y-movingrect.y)<fixedrect.height/2+movingrect.height/2){
    fixedrect.shapeColor = "blue";
    movingrect.shapeColor = "blue";
  }else {
    fixedrect.shapeColor = "lightblue";
    movingrect.shapeColor = "lightblue";
  }
  drawSprites();
}