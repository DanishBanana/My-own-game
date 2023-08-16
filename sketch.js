var bg,bgImg;
var mole, hammer, moleImg, hammerImg;


function preload(){
  
  moleImg = loadImage("assets/no_mole_dirt.png")
  hammerImg = loadImage("assets/hammer.png")

  bgImg = loadImage("assets/background.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(500,300,1200,600)
bg.addImage(bgImg)
bg.scale = 0.7

  

//creating the player sprite
hammer = createSprite(600,300, 50, 50);
 hammer.addImage(hammerImg)
   hammer.scale = 0.3
   hammer.debug = true
   hammer.setCollider("rectangle",-130,0,300,300)

mole = createSprite(200,300, 50, 50);
mole.addImage(moleImg)
 mole.scale = 0.2
 mole.debug = true
 mole.setCollider("rectangle",0,0,500,300)


}

function draw() {
  background(0); 
 



  //moving the player up and down and making the game mobile compatible using touches

drawSprites();

}
