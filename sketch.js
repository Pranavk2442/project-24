const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone;
var rubber;

var engine, world;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,700,800,40);

	hammer=new Hammer(300,100,PI);
	stone = new Stone(400,400,50,50,PI/4);
	rubber=new Rubber(200,300,30);
	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
	Engine.update(engine);
  
hammer.display();
ground.display();
stone.display();
rubber.display();
  drawSprites();
 
}




