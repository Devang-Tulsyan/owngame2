class Ball{
    constructor(x,y,radius){
        var ball_options={
            restitution:1,
            mass:0.1,
            density:0.1
        }
        this.body=Bodies.circle(x,y,radius,ball_options);
        this.radius=radius
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        fill("green");
        ellipse(pos.x,pos.y,this.radius*2,this.radius*2);
    }
}