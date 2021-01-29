class Stone extends BaseClass {
    constructor(x,y,width,height,angle){
var options={
    density:5,
    restitution:0.5,
    friction:5
}

super(x,y,width,height);

    }

display(){
    strokeWeight(4)
stroke("black")
    fill(100)
    super.display();
}

}