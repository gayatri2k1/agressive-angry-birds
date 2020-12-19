const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,20)
    //first floor
    box1 = new Box(600,350,70,70);
    box2 = new Box(800,350,70,70);
    pig1 = new pig(700,350)
    log1 = new log(700,300,300,PI/2)
    //second floor
    box3 = new Box(600,250,70,70);
    box4 = new Box(800,250,70,70);
    pig2 = new pig(700,250)
    log2 = new log(700,200,300,PI/2)
    //third floor
    box5 = new Box(600,150,70,70);
    box6 = new Box(800,150,70,70);
    pig3 = new pig(700,150)
    log3 = new log(700,100,300,PI/2)
    
    
    bird1 = new bird (20,20,50,50)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    bird1.display();

    box1.display();
    box2.display();
pig1.display()
    log1.display()
    
    box3.display();
    box4.display();
    pig2.display()
    log2.display()

    box5.display();
    box6.display();
    pig3.display()
    log3.display()
}