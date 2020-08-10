const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball,ball1,ball2,ball3;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options={
        restitution: 0.25
    }
    var ball1_options={
        restitution: 4
    }
    var ball2_options={
        restitution: 3
    }
    var ball3_options={
        restitution: 0
    }

    ground = Bodies.rectangle(300,590,600,20,ground_options);
    World.add(world,ground);

    ball = Bodies.circle(100,200,20,ball_options);
    World.add(world,ball);

    ball1=Bodies.circle(200,300,40,ball1_options);
    World.add(world,ball1);

    ball2=Bodies.circle(400,100,10,ball2_options);
    World.add(world,ball2);

    ball3=Bodies.circle(300,300,20,ball3_options);
    World.add(world,ball3);

    
}

function draw(){
    background(0);
    Engine.update(engine);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,600,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(ball1.position.x,ball1.position.y,40,40);

    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball2.position.y,10,10);

    ellipseMode(RADIUS);
    ellipse(ball3.position.x,ball3.position.y,20,20);


}