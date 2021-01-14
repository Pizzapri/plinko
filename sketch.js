const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var particles=[];
var plinkos=[];
var divisions=[];

function setup() {
  createCanvas(400,500);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,492,395,10);
  
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var k=15;k<=width-15;k=k+50){
    plinkos.push(new Plinko(k,175))
  }
  for(var l=40;l=width;l=l+50){
    plinkos.push(new Plinko(l,275))
  }
  for(var m=15;m<=width-15;m=m+50){
    plinkos.push(new Plinko(m,375))
  }
  Engine.run(engine);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  
  ground.display();

  drawSprites();
}