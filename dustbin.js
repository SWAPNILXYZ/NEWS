   class Dustbin{
    constructor(x,y,width,height){
        var gr = {
            'isStatic':false,
            'friction':0.4,
            'density':1
        }
        this.body = Bodies.rectangle(x, y, width, height,gr);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

        //this.image = loadImage("images/1S.png");
      World.add(world,this.body);
    }
    display(){
        var posi = this.body.position;
        rectMode(CENTER);
       // fill("purple");
       rect(posi.x,posi.y,this.width,this.height);
      
        
    }
};