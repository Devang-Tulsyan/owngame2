class Bulllet{

    constructor(x,y,width,height,angle,force){
       
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/Shell.png");
        Matter.Body.setAngle(this.body,PI/360*angle);
        Matter.Body.setVelocity(this.body,{x:force*-3,y:force*-1});
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        fill ("black")
        translate (pos.x,pos.y);
    rotate (angle)
imageMode(CENTER);
image (this.image,0,0,this.width,this.height);
pop ();
}
}