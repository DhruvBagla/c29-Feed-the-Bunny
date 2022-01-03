const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var watermellon;
var fruitLink;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(7,{x:245,y:30});
 
 /*var options={
  density:0.01
  }*/
watermellon = Bodies.circle(300,300,20);
Matter.Composite.add(rope.body,watermellon)
fruitLink= new Link(rope,watermellon)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  
  ellipse(watermellon.position.x,watermellon.position.y,30,30)
  Engine.update(engine);
  

 
   
}
