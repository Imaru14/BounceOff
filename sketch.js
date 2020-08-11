var r1
var r2
var gameob1
var gameob2

function setup() {
  createCanvas(1200,800);
  r1=createSprite(400, 200, 50, 50);
  r1.shapeColor="red";
  r2=createSprite(400, 600, 50, 50);
  r2.shapeColor="red";
  r1.velocityY=5;
  r2.velocityY=-5;
  gameob1=createSprite(700, 450, 50, 50);
  gameob2= createSprite(300, 450, 50, 50);
  gameob1.velocityX=-5;
  gameob2.velocityX=5;
}

function draw() {
  background("black");
  

  bounceoff(r1,r2);
  bounceoff(gameob1, gameob2);
  drawSprites();
}






