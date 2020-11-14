
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofObj,bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var roopObj1,roopObj2,roopObj3,roopObj4,roopObj5;
function preload()
{
	
}

function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roofObj = new Roof(400,100,300,40);

    bobObj1 = new Bob(300,350,50);
    bobObj2 = new Bob(350,350,50);
    bobObj3 = new Bob(400,350,50);
    bobObj4 = new Bob(450,350,50);
    bobObj5 = new Bob(500,350,50);
    
    roopObj1 = new Roop(bobObj1.body,roofObj.body,-50*2,0);
    roopObj2 = new Roop(bobObj2.body,roofObj.body,-25*2,0);
    roopObj3 = new Roop(bobObj3.body,roofObj.body,-0*2,0);
    roopObj4 = new Roop(bobObj4.body,roofObj.body,25*2,0);
    roopObj5 = new Roop(bobObj5.body,roofObj.body,50*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  
  roofObj.display();
  
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  
  roopObj1.display();
  roopObj2.display();
  roopObj3.display();
  roopObj4.display();
  roopObj5.display();

  keyPressed();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW)
  {Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-100,y:-100});}
}

