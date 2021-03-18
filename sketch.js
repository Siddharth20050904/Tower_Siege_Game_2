const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1;
var base1;
var slingShot;
var rock;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1200,600);
  block1 = new Block(1060,380,40,50);
  block2 = new Block(880,380,40,50);
  block3 = new Block(940,380,40,50);
  block4 = new Block(1000,380,40,50);
  block5 = new Block(1120,380,40,50);
  block6 = new Block(910,300,40,50);
  block7 = new Block(970,300,40,50);
  block8 = new Block(1030,300,40,50);
  block9 = new Block(1090,300,40,50);
  block10 = new Block(940,250,40,50);
  block11 = new Block(1000,250,40,50);
  block12 = new Block(1060,250,40,50);
  block13 = new Block(970,200,40,50);
  block14 = new Block(1030,200,40,50);
  block15 = new Block(1000,150,40,50);
  
  base1 = new Base(1000,400,300,20);

  rock = new Rock(200,300,40);

  slingShot = new SlingShot(rock.body,{x:400,y:300});

  Engine.run(engine);
}

function draw() {
  background(255);  
  Engine.update(engine);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  base1.display();
  rock.display();
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingShot.attach(rock.body);
  }
}