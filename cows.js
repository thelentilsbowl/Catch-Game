class cow extends obstacle {
  
  constructor(x, y, w, h){  
    super (x, y, w, h)}
 
  
  show() {
    image(cow1, this.x, this.y, this.w, this.h)
    
    if (this.y > height && missed < 5){
      this.y = random(-450, 0);
      this.x = random(0, (width-150))
      missed++
      
    }
    
  }
  
  stop(){
    if (missed > 4){
      this.y = -200
    }
  }
  
}