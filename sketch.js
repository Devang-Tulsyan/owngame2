const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball1,ball2,ball3,ball4; 
var tankBody,tankTurret;
var bullet,bullets;
var targets;

function baseClamp(number,lower,upper){
    if(number===number){
        if(upper !== undefined){
            number=number<=upper?number:upper;
        }
        if(lower !== undefined){
            number=number>=lower?number:lower;
        }
    }
    return number;
}
function setup(){
    engine=Engine.create();
    world=engine.world;
    
    createCanvas(800,400);

    targets=4;
    result="";


    //create ground
    ground= new Ground(400,390,800,30);
    

    //create tank body and turret
    tankBody=new TankBody(660,350,200,75);
    tankTurret=new TankTurret(590,330,100,20);

    //set variables
    rotateDegrees=0;
    bullets=[];
    death=[false,false,false,false];

    //create targets
    ball1= new Ball(50,300,25);
    ball2= new Ball(50,-2000,20);
    ball3= new Ball(50,-5000,30);
    ball4= new Ball(50,-1000,15);
}
function draw(){
    background("grey");

    //update the engine
    Engine.update(engine);
    ground.display();
    //display tank
    tankBody.display();
    tankTurret.display();

    //rotatingthe turret
    if(keyIsDown(UP_ARROW) && rotatedDegrees<100){
        tankTurret.rotateUp();
    rotatedDegrees++;
    }

    if(keyIsDown(DOWN_ARROW) && rotatedDegrees>1){
        tankTurret.rotateDown();
    rotatedDegrees--;
    }

    //display bullets
    for(var x=0;x<bullets.length;x++){
        if(bullets[x],body.position.y>360){
            Matter.World.remove(world,bullets[x].body)
        }
        else{
            bullets[x].display();
        }
    }
}
