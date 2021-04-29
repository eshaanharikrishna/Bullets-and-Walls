var bullets,wall,speed,weight ,thickness
 function setup() {
  createCanvas(1200,400);
  bullets= createSprite(50, 200, 50, 50);
  
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  wall= createSprite(1000,200,thickness,height/2)
  //car.shapeColor="white"
  //wall.shapeColor="grey"
  bullets.velocityX=speed
}

function draw() {

  background(0);  
  hasCollided(bullets,wall);
  
  drawSprites();
}
function hasCollided(bullets,wall){
  if(wall.x-bullets.x<(bullets.width+wall.width)/2){
    bullets.velocityX=0
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness
    if(damage>10){
      bullets.shapeColor="red"
      
    }
    //else if(deformation>100&&deformation<180){
      //bullets.shapeColor="yellow"
    //}
    else{
      bullets.shapeColor="green"
    }
  }
}