class Container{
    constructor(x, y, width, height)
    {
    var options = {
    "isStatic":true,
    "density":1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options)
    this.width= width
    this.height=height
    
    World.add(world, this.body);
    console.log(this.body);
    }
    display()
    {
    var pos=this.body.position
    // rectMode(CENTER);
    
    // rect(pos.x, pos.y, this.width, this.height);
    push();
    var angle=this.body.angle
    translate(pos.x, pos.y);
    rotate(angle);
    fill("red");
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
    }
    }