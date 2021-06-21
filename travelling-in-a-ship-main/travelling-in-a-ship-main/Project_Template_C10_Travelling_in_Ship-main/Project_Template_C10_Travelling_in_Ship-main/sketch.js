var ship, ship_moving
var ship_moving1, ship_moving2, ship_moving3, ship_moving4
var sea, sea_img

function preload(){

  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea_moving=loadAnimation("sea.png");
  
}

function setup(){
 createCanvas(400,400);

 sea = createSprite(50,50);
 sea.addAnimation("moving",sea_moving);
 sea.velocityX=-1
 sea.x = width/2;;

  ship = createSprite(200,250);
  ship.addAnimation("moving",ship_moving);
  ship.scale=0.3
}



function draw() {
  background("blue");
 
  if(sea.x <0 ){
    sea.x = width/2;
   
}
  drawSprites();
}
