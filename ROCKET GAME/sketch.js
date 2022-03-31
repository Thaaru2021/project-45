var asteroid,aImg;
var rocket,rocketImg;

function preload(){
  aImg = loadImage("asteroid.png");
  rocketImg = loadImage ("strrocket.png")

}


function setup() {
  createCanvas(1500,800);
  //creating rocket 
  rocket = createSprite(750,600);
  rocket.addImage(rocketImg);

  //creating asteroid
  asteroid = createSprite(200,200,10,10);
  asteroid.addImage(aImg);
  asteroid.scale = 0.25;
  //asteroid.height = 50;
}

function draw() {
  background(1500,800);  
  background("cyan")
  
  //rocket.x = mouse.x;
    
  if(keyDown("LEFT_ARROW")){
    rocket.addImage(rocketImg);
    rocket.x = rocket.x - 30;
  }
    
  if(keyDown("RIGHT_ARROW")){
    rocket.addImage(rocketImg);
    rocket.x = rocket.x + 30;
  }
    

  drawSprites();
}