const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,bird,pig1,log1,box3;
var particles = [];
var divisions = [];
var plinkos = [];
var divisionHeight = 300;


function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(240,790,480,10);

    fill(rgb(127,0,0));
    line1 = Bodies.rectangle(400,10,800,10);
    World.add(world,line1);

    for(var d = 0; d <= width; d = d+80){
        divisions.push(new Division(d,height-divisionHeight/2,10,divisionHeight));
    }

    

}

function draw(){
    background(0);
    Engine.update(engine);

    if(frameCount%60 === 0){
        particles.push(new Particle(random(width/2-10,width/2+10),10));
    }

    for(var p = 40; p <= width; p = p+50){
        plinkos.push(new Plinko(p,75));
    }
    for(var p = 15; p <= width-10; p = p+50){
        plinkos.push(new Plinko(p,175));
    }
    for(var p = 40; p <= width; p = p+50){
        plinkos.push(new Plinko(p,275));
    }
    for(var p = 15; p <= width-10; p = p+50){
        plinkos.push(new Plinko(p,375));
    }

    for(var p = 0; p < particles.length; p++){
        particles[p].display();
    }
    for(var p = 0; p < plinkos.length; p++){
        plinkos[p].display();
    }
    for(var d = 0; d < divisions.length; d++){
        divisions[d].display();
    }

    ground.display();
    //plinkos[p].display();
}