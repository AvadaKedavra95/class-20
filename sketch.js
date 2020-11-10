var movingRect;
var fixedRect
var rect3,rect4





function setup() {
  createCanvas(800,400);
  movingRect=createSprite(550, 200, 80, 40);
  fixedRect=createSprite(250,200,80,40);
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
  movingRect.velocityX=-4;
  fixedRect.velocityX=4;
  rect3=createSprite(400,50,40,80);
  rect4=createSprite(400,350,40,80);
  rect3.velocityY=4;
  rect4.velocityY=-4;
}

function draw() {
  background(0);  
 // movingRect.x=mouseX;
  //movingRect.y=mouseY;


  if(fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 && 
    movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
      movingRect.shapeColor="white";
      fixedRect.shapeColor="white";
      movingRect.velocityX*=(-1);
      fixedRect.velocityX*=(-1);
      rect3.velocityY*=(-1);
      rect4.velocityY*=(-1);
      rect3.shapeColor="white";
      rect4.shapeColor="white";
    }

    else{
      movingRect.shapeColor="blue";
      fixedRect.shapeColor="blue";
      rect3.shapeColor="blue";
      rect4.shapeColor="blue";
    }

    

  drawSprites();
}