class Paper{
  constructor(x,y,radius){
      var gr = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0

      }
      this.radius=radius;
      this.x=x;
      this.y=y;
      this.body = Bodies.circle(this.x, this.y,this.radius,gr);
     
     this.image = loadImage("images/ball.png");
    World.add(world,this.body);
  }
  display(){
      var posi = this.body.position;
      ellipseMode(RADIUS);
     // fill("purple");
      image(this.image,posi.x,posi.y,this.radius,this.radius);
      
  }
}