var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dImage = loadImage("images/1S.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	dustbin = createSprite(650,435,100,80);
	dustbin.addImage("dustbin",dImage);
    dustbin.scale = 0.37;
	//Create the Bodies Here.
	
	ground = new Ground(400,500,width,10);

	paper = new Paper(100,100,44,44);
	box = new Dustbin(611,435,15,100);
//	box2 = new Dustbin(650,300,100,15);
	box3 = new Dustbin(691,435,15,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 

 
  paper.display();
  box.display();
 // box2.display();
  box3.display();
  ground.display();
  drawSprites();
 
}
keyPressed();
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.2,y:-0.3});
	}
}

