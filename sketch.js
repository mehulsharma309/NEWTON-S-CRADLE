
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5, roofObj, ropeObj1, ropeObj2, ropeObj3, ropeObj4, ropeObj5;

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

roofObj=new roof(width/2, height/2, width/7, 20)
bobDiameter=40
startbobpositionX=width/2
startbobpositionY=height/4+500
bobObj1=new bob(startbobpositionX-bobDiameter*2,startbobpositionY,bobDiameter)
bobObj2=new bob(startbobpositionX-bobDiameter,startbobpositionY,bobDiameter)
bobObj3=new bob(startbobpositionX,startbobpositionY,bobDiameter)
bobObj4=new bob(startbobpositionX+bobDiameter,startbobpositionY,bobDiameter)
bobObj5=new bob(startbobpositionX+bobDiameter*2,startbobpositionY,bobDiameter)
var render=Render.create(
	{
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	}
)
	ropeObj1=new rope(bobObj1.body,roofObj.body,-bobDiameter*2,0)
	ropeObj2=new rope(bobObj2.body,roofObj.body,-bobDiameter*1,0)
	ropeObj3=new rope(bobObj3.body,roofObj.body,0,0)
	ropeObj4=new rope(bobObj4.body,roofObj.body,bobDiameter*1,0)
	ropeObj5=new rope(bobObj5.body,roofObj.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObj.display();

  ropeObj1.display();
  ropeObj2.display();
  ropeObj3.display();
  ropeObj4.display();
  ropeObj5.display();

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObj1.body, bobObj1.body.position, {x:-50, y:-45})
	}
}



