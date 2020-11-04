
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	groundobj = new Ground(400,450,800,50); 

	dustbinwall1 = new Bin(530,445,120,15); 

	dustbinwall2 = new Bin(485,395,15,100); 
	dustbinwall3 = new Bin(575,395,15,100); 

	paperobj = new Ball(100, 435, 20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  drawSprites();
 
  groundobj.display();
  dustbinwall1.display();
  paperobj.display();
}
function keyPressed() { 
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(paperobj.body, paperobj.body.position, {x: 20, y:-400});
	 }
		 }


