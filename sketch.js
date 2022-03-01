const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var botton1
var botton2
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  botton1= createImg('push.png')
  botton1.position(200,30)
  botton1.size(50,50)
  botton1.mouseClicked(horizontalforce)
  botton2= createImg('right.png')
  botton2.position(130,30)
  botton2.size(50,50)
  botton2.mouseClicked(horizontalforce)
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 var balloptions= {
  restitution: 1
 }
 ball= Bodies.circle (200,200,20,balloptions)
 World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}
function horizontalforce (){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});

}
function virticalforce () {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

