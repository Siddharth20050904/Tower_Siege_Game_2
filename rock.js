class Rock{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:1.2,
            density:1.2,
            friction:0.5
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("polygon.png")
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,100,50);
        pop();
    }
};