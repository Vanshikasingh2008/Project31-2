class Particle{
    constructor(x,y){
        var op = {
            restitution:0.4
        }
        //this.r = r;
        this.body = Bodies.circle(x,y,5,op);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 5);
      }
    }
