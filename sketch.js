var roadImg, road, chickenImg, chicken
var r1,r2,r3,r4,r5,r6,r7,r8
var gr1,gr2,gr3,gr4,gr5,gr6,gr7,gr8,gr9,gr10,gr11,gr12
var b,b1,b2,b3,b4,b5;
function preload() {
roadImg = loadImage("images/road.jpg")

}

function setup() {
  createCanvas(800,650);

  // creating roads
  //r1= createSprite(400, 534, 800, 50);
  //r1.shapeColor= "#483F3A";
  //r1. addImage(roadImg)
  //r1.scale= 2
  
  /*r2= createSprite(400, 486, 800, 50); 
  r2.shapeColor= "#483F3A"
  //r2. addImage(roadImg)

 // r2.scale= 2

  r3= createSprite(400, 400, 800, 50);
  r3.shapeColor="#493C37"
  //r3. addImage(roadImg)
  //r3.scale= 2

  r4= createSprite(400, 262, 800, 50);
  r4.shapeColor="#493C37"

  r5= createSprite(400, 212, 800, 50);
  r5.shapeColor="#493C37"*/


  // creating grass
  gr1= createSprite(400, 627, 800, 45);
  gr1.shapeColor= "#1c4a19";
 // gr1. addImage(roadImg)
  //gr1.scale= 2
  gr2= createSprite(400, 582, 800, 45);
  gr2.shapeColor= "#20a142";

  gr3= createSprite(400, 440, 800, 45);
  gr3.shapeColor= "#20a142";

  gr4= createSprite(400, 353, 800, 45); 
  gr4.shapeColor= "#1c4a19";

  gr5= createSprite(400, 310, 800, 45); 
  gr5.shapeColor= "#20a142";

  gr6= createSprite(400, 175, 800, 45); 
  //gr6.shapeColor= "#1c4a19";

  //gr7= createSprite(400, 250, 800, 45); 
  //gr7.shapeColor= "#20a142";

  chicken = createSprite(420, 200, 20, 20);
}

function draw() {

  background("#493C37");  
  
  if(keyDown(UP_ARROW)){
    chicken.y= chicken.y-5
  }
  if(keyDown(DOWN_ARROW)){
    chicken.y= chicken.y+5
  }
  if(keyDown(LEFT_ARROW)){
    chicken.x= chicken.x-5
  }
  if(keyDown(RIGHT_ARROW)){
    chicken.x= chicken.x+5
  }
righttraffic(215,2,80);
lefttraffic(260,-2,100);
righttraffic(535,2,120);
righttraffic(483,3,100);
lefttraffic(395,-4,70);



//camera.x=chicken.x
//camera.y=chicken.y
divider(100)
  drawSprites();
}

function divider(ypos){
  for(var i=0; i<=800;i+=40){
    stroke("white")
    strokeWeight(4)
    line(i,ypos,i+10,ypos)
  
  }
}
function righttraffic(ypos,speed,fc){
  if(frameCount% fc===0){
  var vehicles= createSprite(0, ypos, 40, 20)
  vehicles.shapeColor="red";
  vehicles.velocityX=speed;
  }
}
function lefttraffic(ypos,speed,fc){
  if(frameCount% fc===0){
  var vehicles= createSprite(800, ypos, 40, 20)
  vehicles.shapeColor="red";
  vehicles.velocityX=speed;
  }
}
//round(random(70,100))

