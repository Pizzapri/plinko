class Plinko{
    constructor(x,y){
        var options={
            "isStatic":true,
            "friction":0.5,
            "density":1.2
        }
        this.x=x;
		this.y=y;
		this.radius=10;
		
        this.body=Bodies.circle(this.x, this.y, this.radius, options)
        this.image = loadImage("sprites/smoke.png");
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position
        pos.x=this.body.position.x;
        pos.y=this.body.position.y;
        fill("white");
        imageMode(CENTER);
        image(pos.x,pos.y,this.radius);
    }
}