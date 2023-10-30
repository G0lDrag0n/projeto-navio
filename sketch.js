var sea
var navio
var mar
var naviomov

function preload(){
mar = loadImage("sea.png")
naviomov = loadAnimation("ship-1.png", "ship-2.png", 
                        "ship-3.png", "ship-4.png")
}


function setup(){
 createCanvas(400,400);

 sea = createSprite(0, 0, 400, 400)
 sea.addImage(mar)
 sea.scale = 0.5
 sea.velocityX = -3

 navio = createSprite(200, 250, 160, 50)
 navio.addAnimation("naviomov",naviomov)
 navio.scale= 0.3
}

function draw() {
  background("blue");
  drawSprites();
 
  if(sea.x < 0){
    sea.x = sea.width/4;
  }
}
