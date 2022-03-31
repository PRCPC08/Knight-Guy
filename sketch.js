var knight, run, jump, hurt
var bg1,bg2;

//music ->bg, coolect coin, articats,banana,jump,hurt
var score = 0
var hp = 100



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

  invisiblePadsGroup = createGroup()
  bananasGroup = createGroup()
  coinsGroup = createGroup()
  padsGroup= createGroup()
  thornPadGroup=createGroup()
}

function draw() {
  background(bg2);  
  drawSprites();
  textSize(30)
  fill("black")
  text("Score = "+score, 50,20)
  text("HP = "+hp, 50,55)
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
  if(knight.isTouching(bananasGroup)){
    score+=1
    for(var i = 0; i<bananasGroup.length;i++){
    bananasGroup.get(i).destroy();
    hp+=10
    console.log("HP = "+hp)
    }
  }
  if(knight.x>width-11){
    knight.x=width-11
  }
  //if knight is touching pad, then Knight should jump on pad
  if(knight.isTouching(padsGroup)){ 
    //for(var i = 0; i<padsGroup.length;i++){
      knight.x = padsGroup
      knight.collide(invisiblePadsGroup)
    //}
  }


  //add code here
  for (var i=0;i<thornPadGroup.length;i++){
    if(thornPadGroup.get(i).isTouching(knight)){
      hp-=10
      console.log("HP = "+hp)
    }
  }
  
  if(knight.isTouching(coinsGroup)){
    score+=8
    console.log("score = "+score)
  }
  
  
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
    banana.lifetime = 500;    
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
    coins.lifetime = 550;
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
    var invisiblePad = createSprite(pads.x,pads.y-50,pads.width*8,10)
    pads.lifetime=500
    pads.velocityX=-4
    invisiblePad.velocityX=pads.velocityX
    invisiblePad.lifetime=pads.lifetime
    pads.scale=0.3
    pads.debug=true
    
    switch(r){
      case 1 : pads.addImage(Pad1)
      padsGroup.add(pads)
      break;
      case 2 : pads.addImage(Pad2)
      thornPadGroup.add(pads)
      break;   
    }
    invisiblePadsGroup.add(invisiblePad)
  }
}







//music ->bg, coolect coin, articats,banana,jump,hurt
// write a code to increase coins if knight touches coins
//var hp =100
//if knight touches the spike pad hp should decrease hp-=10.