
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustBin1,dustBin2,dustBin3;
var ground;
var paper;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2,699,width,10);
	
	dustBin1 = new DustBin(1120,680,150,20);
	dustBin2 = new DustBin(1040,650,20,80);	
	dustBin3 = new DustBin(1190,650,20,80);

	paper = new Paper(200,100,40)

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(0);
	
	Engine.update(engine);
	
	ground.display(); 
	dustBin1.display();
	dustBin2.display();
	dustBin3.display();
	paper.display();
	
	drawSprites(); 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}