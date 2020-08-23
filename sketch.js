var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(400,500,width,10);

	paper = new Paper(100,100,20,20);
	box = new Dustbin(595,200,15,100);
	box2 = new Dustbin(650,300,100,15);
	box3 = new Dustbin(705,200,15,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
 

 
  paper.display();
  box.display();
  box2.display();
  box3.display();
  ground.display();
  drawSprites();
 
}
keyPressed();
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.04,y:-0.07});
	}
}

