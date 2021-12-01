const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, box1, box2, box3, box4, ball, cuerda;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 400, 1200, 20);
    box1 = new Box(350, 100, 70, 70);
    box2 = new Box(350, 100, 70, 70);
    box3 = new Box(350, 100, 70, 70);
    box4 = new Box(350, 100, 70, 70);
    ball = new Ball(200, 200, 100, 100);
    cuerda = new Cuerda(ball.body, {x:200, y: 50});


}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ball.display();
    cuerda.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}