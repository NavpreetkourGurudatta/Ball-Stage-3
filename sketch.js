const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg,bgIMG
var laserBeamIMG,laserBeam
var laserBeam2,l,o
 var ground,Goal,GoalImg
 var Ball,BallIMG
 var coin,coinIMG
 var Wall1,Wall2,Wall3,Wall4,WAll5,WAll6,Wall7,WAll8,Wall9
 var WAll11,Wall12,Wall13,Wall14,Wall10
 var box1,box2,box3,box4,box5,box6,box7,box8,box9
 var score = 0
function preload(){
    laserBeamIMG = loadImage('Laser Beam.png');
    BallIMG = loadImage('Ball.png');
    bgIMG = loadImage('bgImage.jpg');
    coinIMG = loadImage('Coins.png');
    GoalImg = loadImage('Goal.png');
}
function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(520,500);
  bg = createSprite(520,500);
  bg.addImage(bgIMG);
  bg.scale = 5.9
  bg.velocityX = -50;
 Goal = createSprite(450,480);
 Goal.addImage(GoalImg);
 Goal.scale = 0.6;
  laserBeam = createSprite(120,126,20,10);
  laserBeam.shapeColor = 'red';
  

  laserBeam2 = createSprite(190,126,20,10);
  laserBeam2.shapeColor = 'red';

  Wall1 = createSprite(260,126,20,10)
  Wall1.shapeColor = 'red';


Wall2=createSprite(330,126,20,10);
Wall2.shapeColor = 'red'


var Wall3=createSprite(400,126,20,10);
Wall3.shapeColor = 'red'


 Wall4=createSprite(470,126,20,10);
Wall4.shapeColor = 'red'


 Wall5=createSprite(540,126,20,10);
Wall5.shapeColor = 'red'


 Wall6=createSprite(50,126,20,10);
Wall6.shapeColor = 'red'

 Wall7=createSprite(340,400,20,10);
Wall7.shapeColor = 'red'


 Wall8=createSprite(270,400,20,10);
Wall8.shapeColor = 'red'

 Wall9=createSprite(200,400,20,10);
Wall9.shapeColor = 'red'


 Wall10=createSprite(130,400,20,10);
Wall10.shapeColor='red'


 Wall11=createSprite(60,400,20,10);
Wall11.shapeColor = 'red'

Wall12=createSprite(10,400,20,10);
Wall12.shapeColor = 'red'

 Wall13=createSprite(410,400,20,10);
Wall13.shapeColor = 'red'

 Wall14=createSprite(480,400,20,10);
Wall14.shapeColor = 'red'

box1=new Box(300,200)
box2 = new Box(370,200);
box3 = new Box(440,200);
box4 = new Box(160,200);
 box5 = new Box(230,200);
 box6 = new Box(500,200);
 box7 = new Box(90,200);
 box8 = new Box(20,200);
  ground = new Ground(1500,500,3000,20);

  Ball = createSprite(50,30);
  Ball.addImage(BallIMG);
  Ball.scale = 0.1

  coin = createSprite(250,25)
  coin.addImage(coinIMG);
  coin.scale = 0.1
   
  
  }

function draw() {
  Engine.update(engine);

  background(0);
  textSize(20);
  score = Math.round(random(frameCount/3))
  

  laserbeam()
  
  //ground.velocityY = 0
console.log(bg.x)
  if (bg.x < 0) {
    bg.x = bg.width/ 2;
   

  }
 
  //createEdgeSprites();
  //Ball.bounceOff(edges);
  //Ball.bounceOff(Wall1);
  //Ball.bounceOff(Wall2);
 // Ball.bounceOff(Wall3);
  //Ball.bounceOff(Wall4);
  //Ball.bounceOff(Wall5);
  //Ball.bounceOff(Wall6);
  //Ball.bounceOff(Wall7);
 // Ball.bounceOff(Wall8);
  //Ball.bounceOff(Wall9);
  //Ball.bounceOff(Wall10);
  //Ball.bounceOff(Wall11);
  //Ball.bounceOff(Wall12);
  //Ball.bounceOff(Wall13);
  //Ball.bounceOff(Wall14);
  //Ball.bounceOff(Wall15);
  if(keyDown(UP_ARROW)){
  Ball.velocityX=0;
  Ball.velocityY=-5;
  }
  if(keyDown(LEFT_ARROW)){
    Ball.velocityX=-4;
    Ball.velocityY=0;
  }
  if(keyDown(DOWN_ARROW)){
    Ball.velocityX=0;
    Ball.velocityY=5;
  }
  if(keyDown(RIGHT_ARROW)){
    Ball.velocityX=7;
    Ball.velocityY=0;
  }
 
  drawSprites();
  text('score:'+score,270,30)

  laserBeam.display();
  laserBeam2.display();
  ground.display();
  Ball.display();
  box1.display()
  box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
 //bg.display();
 coin.display()
  }
  function laserbeam() {
    if (frameCount % 20 === 0) {
      l = createSprite(1000, 300, 20, 10);
      l.shapeColor = 'red'
      l.velocityX = -5;
      var r = Math.round(random(1, 4));
  
      switch (r) {
        case 1:
          console.log('1 added');
                    break;
        case 2:
          console.log('2 added');
          
          break;
        
      }
    }
  }
  function laserBeam2() {
    if (frameCount % 2 === 0) {
      o = createSprite(100, 300, 20, 10);
      o.shapeColor = 'red'
      o.velocityX = -5;
      var r = Math.round(random(1, 4));
  
      switch (r) {
        case 1:
          console.log('1 added');
                    break;
        case 2:
          console.log('2 added');
          
          break;
        
      }
    }
  }
  
