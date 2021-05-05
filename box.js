class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility=255
      //this.image = loadImage("sprites/wood1.png");
    }
    display(){
      if(this.body.speed>4){
        push();
        this.visibility=this.visibility-5
        tint(255,this.visibility)
        World.remove(world,this.body)
        pop();
      }
      if(this.visibility<0 && this.visibility>-105){
        score++;
      }

      if(this.body.speed<4){
        
        super.display();
      }
    }
  }
  