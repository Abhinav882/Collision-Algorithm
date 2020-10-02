var  FixedRect,MovingRect
function setup() {
  createCanvas(1200,800);
  
 FixedRect =  createSprite(600, 400, 50, 80);
 MovingRect =  createSprite(400, 200, 80, 30);
 FixedRect.shapeColor ="green";
 MovingRect.shapeColor ="green";
}

function draw() {
  background(0) ;
  MovingRect.y =World.mouseY
  MovingRect.x =World.mouseX
  if(FixedRect.x-MovingRect.x< FixedRect.width/2+MovingRect.width/2
    && MovingRect.x-FixedRect.x< FixedRect.width/2+MovingRect.width/2
    && FixedRect.y-MovingRect.y< FixedRect.height/2+MovingRect.height/2
    && MovingRect.y-FixedRect.y< FixedRect.height/2+MovingRect.height/2){
    FixedRect.shapeColor ="red";
 MovingRect.shapeColor ="red";
  }
  else{
    FixedRect.shapeColor ="green";
 MovingRect.shapeColor ="green";
  }
  drawSprites();
}