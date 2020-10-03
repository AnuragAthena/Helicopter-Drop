var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bottom, side1, side2;
var obstacle;
var world, engine;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6   

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true, density:1.0});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 bottom = new Container(400, 650, 200, 20)    
	 side1 = new Container(305, 600, 10, 80)
	 side2 = new Container(495, 600, 10, 80)
	//  obstacle = new Container(400, 350, 200, 10);
	 
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
//   text("X: "+mouseX+" , Y: "+mouseY, mouseX, mouseY);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 keyPressed()
//  helicopterSprite.x=mouseX;
// packageSprite.x=helicopterSprite.x;
// obstacle.x=helicopterSprite.x;
 bottom.display()
 side1.display()
 side2.display()
//  obstacle.display();
drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
  Matter.Body.setStatic(packageBody, false);     
  }
}



