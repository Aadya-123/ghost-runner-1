var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  //spookySound = loadSound("spooky.wav");
}

function setup(){
createCanvas(600,600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  
 
}


function draw(){
  background(0);
  
if(gameState==="play"){
  
if(tower.y > 400){
      tower.y = 300
    }
spawnDoor();
if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3;
    }
    
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 3;
    }
if(keyDown("up_arrow")){
      ghost.y = ghost.y - 3;
    }
    
    if(keyDown("down_arrow")){
      ghost.y = ghost.y + 3;
    }
  
  if(climbersGroup.isTouching(ghost)){
ghost.destroy();
    gameState="end";
  }
  drawSprites();
}
  if(gameState==="end"){
    
     fill("gold");
    textFont("ALGERIAN");
    textSize(50);
    text("Game Over",250,height/2);
  

  }

}
  
function spawnDoor(){
if (frameCount % 160 === 0) {
  
    door=createSprite(Math.round(random(50,width-50)),0,50,50);
    door.addImage("door",doorImg);
    door.velocityY=2;
   
  
   var climber = createSprite(door.x,door.y+50,20,10);
   climber.addImage(climberImg);
  climber.velocityY=2
  
 ghost.depth= door.depth+1
  ghost.depth=climber.depth+1
  door.x = climber.x;
 
  doorsGroup.add(door);
 climbersGroup.add(climber);
  
  door.lifetime = 300;
    climber.lifetime = 300
  
}
}
  
  