var knight, run, jump, hurt
var bg1,bg2;

//music ->bg, coolect coin, articats,banana,jump,hurt

function preload(){
  run= loadAnimation("Assets/PC/run1.png","Assets/PC/run2.png","Assets/PC/run3.png","Assets/PC/run4.png","Assets/PC/run5.png","Assets/PC/run6.png","Assets/PC/run7.png","Assets/PC/run8.png")
  jump= loadAnimation("Assets/PC/jump1.png","Assets/PC/jump2.png","Assets/PC/jump3.png","Assets/PC/jump4.png")
  hurt= loadAnimation("Assets/PC/run2.png")
  bg1 = loadImage("Assets/BG/game_background_1.png")
  bg2 = loadImage("Assets/BG/game_background_4.png")
  coin = loadImage("Assets/NPC/Coin_01.png")
  fBonus  = loadImage("Assets/NPC/Flight_Bonus_01.png")
  HPBonus = loadImage("Assets/NPC/HP_Bonus_01.png")
  Jbonus = loadImage("Assets/NPC/Flight_Bonus_01.png")
  Pad1= loadImage("Assets/NPC/Pad_02_1.png")
  Pad2=loadImage("Assets/NPC/Pad_02_2.png")
  coconut=loadImage("Assets/NPC/Prop_1.png")
  bananaImage=loadImage("Assets/NPC/Prop_2.png")
  pinecorn=loadImage("Assets/NPC/Prop_3.png")
  log=loadImage("Assets/NPC/Prop_4.png")
  jewel=loadImage("Assets/NPC/Prop_7.png")
  brick=loadImage("Assets/NPC/Prop_8.png")
  

}



function setup() {
  createCanvas(displayWidth-100,displayHeight-100);
  
  knight =createSprite(400, 200, 50, 50);
  knight.addAnimation("running",run)
  knight.scale= 2
  knight.debug=true
  knight.setCollider("circle",-25,25,25)

  //make ground
  ground = createSprite(width/2,height-50, width, 20)

  bananasGroup = createGroup()
  coinsGroup = createGroup()
  padsGroup= createGroup()
}

function draw() {
  background(bg2);  
  drawSprites();
  //write code to make the knight jum and collide with ground and add gravity to knight
  knight.collide(ground)
  if(keyDown("space")){
    knight.velocityY=-10
  } 
  knight.velocityY+=0.5
  //add code to make story screen rules screen play screen 
  spawnbananas()
  spawnCoins()
  spawnPads()

//if knight is touching banana, score should increse by 1

}

//function to spawn bananas

function spawnbananas() {
  //write code here to spawn the bananas
  if (frameCount % 60 === 0) {
    var banana = createSprite(width,120,40,10);
    banana.y = Math.round(random(height-400,height-300));
    banana.addImage(bananaImage);
    banana.scale = 0.25;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
  //  banana.depth = trex.depth;
  //  trex.depth = trex.depth + 1;
    
    //add each banana to the group
    bananasGroup.add(banana);
  }
  
}

//function to spawn coins

function spawnCoins() {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var coins = createSprite(width,120,40,10);
    coins.y = Math.round(random(height-400,height-300));
    coins.addImage(coin);
    coins.scale = 0.2;
    coins.velocityX = -3;
    
     //assign lifetime to the variable
    coins.lifetime = 200;
    
    //adjust the depth
   // coins.depth = trex.depth;
   // trex.depth = trex.depth + 1;
    
    //add each coins to the group
    coinsGroup.add(coins);
  }
  
}

//function to spawn pads

function spawnPads(){

  if(frameCount % 80 ===0){

    var r = Math.round(random(1,2))
    var pads = createSprite(width,120,40,10);
    pads.y = Math.round(random(height-400,height-200));
    switch(r){
      case 1 : pads.addImage(Pad1)
      break
      case 2 : pads.addImage(Pad2)
      break
      
    }
    pads.lifetime=300
    pads.velocityX=-4
    pads.scale=0.3
    padsGroup.add(pads)


  }

}