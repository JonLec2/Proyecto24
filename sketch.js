const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1;
var hierro1;
var hule;
var hule2;
var hule3, hule4, hule5, hule6;
var stone2;
var hierro2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
hule=new Rubber(600,10,100)
hule2=new Rubber(850,10, 40)
hule3=new Rubber(210,200, 10)
hule4=new Rubber(400,10,70)
hule5=new Rubber(200,100,15)
  stone1= new stone(900,10,100,100)
stone2=new stone(700,10,50,50)
hierro1=new hierro(300,10,50,50)
hierro2=new hierro(100,200, 70, 34)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
hule.display();
hule2.display();
hule3.display();
hule4.display();
hule5.display();
stone1.display();
stone2.display();
hierro1.display(); 
hierro2.display();


}