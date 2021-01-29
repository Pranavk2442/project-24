class Hammer extends BaseClass {
    constructor(x,y){
        var options={
            density:2,
            friction:1.0,   
            restitution:0.5
        }
     super(x,y,100,30);
    }
 
    display(){
      this.body.position.x=mouseX;
      this.body.position.y=mouseY;
      strokeWeight(4)
      stroke("black")
      fill("yellow");
     super.display();  
    }
   };
   