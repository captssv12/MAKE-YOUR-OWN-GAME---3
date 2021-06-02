var bg,bgImg;
var mario, marioRunning,marioJumping;
var coinG, coinImg;
var birdG, birdImg;
var pipeG, pipeImg;

function preload(){
  bgImg=loadImage("bg.png");
  marioRunning=loadAnimation("mario_walking1.png","mario_walking2.png","mario_walking3.png");
  coinImg=loadImage("coin.png");
  birdImg=loadAnimation("bird1.png","bird2.png","bird3.png");
  pipeImg=loadImage("pipe.png");
}

function setup() {
  createCanvas(700,400);
bg=createSprite(200,200,100,100)
bg.addImage(bgImg)
bg.scale=1.9
bg.velocityX=-2

 invisibleGround = createSprite(220,340,1300,10);
 invisibleGround.visible = false;

 mario = createSprite(100,320,20,50);
 mario.addAnimation("running", marioRunning);
 mario.scale = 0.5;

 coinG=new Group ();
birdG=new Group();
pipeG=new Group();
}

function draw(){

  background("blue");
  drawSprites();

mario.collide(invisibleGround);

spawnBird();
spawnCoin();
spawnPipe();


  if (bg.x < 270){
    bg.x = bg.width/1;
  }

  if(keyDown("space") && mario.y >= 139) {
    mario.velocityY = -12;
  }

  mario.velocityY = mario.velocityY + 0.8
}
function spawnCoin() {
  //write code here to spawn the clouds
  if (frameCount % 70 === 0) {
    var coin = createSprite(600,100,40,10);
    coin.y = Math.round(random(150,200));
    coin.addImage(coinImg);
    coin.scale = 0.2;
    coin.velocityX = -3;
    
     //assign lifetime to the variable
    coin.lifetime = 250;
    
    //adjust the depth
    coin.depth = mario.depth;
    mario.depth = mario.depth + 1;
    
    //adding cloud to the group
   coinG.add(coin);
    }
}

function spawnBird() {
  if (frameCount % 110 === 0) {
    var bird = createSprite(600,100,40,10);
    bird.y = Math.round(random(100,200));
    bird.addAnimation("flying",birdImg);
    bird.scale = 0.2;
   bird.velocityX = -3;
    
     //assign lifetime to the variable
   bird.lifetime = 250;
    
    //adding cloud to the group
   birdG.add(bird);
    }
}

function spawnPipe() {
  //write code here to spawn the clouds
  if (frameCount % 170 === 0) {
    var pipe = createSprite(700,315,40,10);
    pipe.addImage(pipeImg);
    pipe.scale=0.2
    pipe.velocityX = -3;
    
     //assign lifetime to the variable
    pipe.lifetime = 250;

    //add each cloud to the group
    pipeG.add(pipe);
  }
  
}