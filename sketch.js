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
	box = new Dustbin(750,200,90,10);
    box1 = new Dustbin(790,200,10,70);
	box2 = new Dustbin(695,200,10,70);

	ground=new Ground(400,height-200,width,10);

	paper = new Paper(50,200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box.display();
  box1.display();
  box2.display();
  ground.display();
  paper.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-4});
	}
}

