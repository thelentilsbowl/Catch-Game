class deadlyOb extends obstacle {
  
  constructor(x, y, w, h){  
    super (x, y, w, h)}
 
  
  show() {
    image(bomb1, this.x, this.y, this.w, this.h)
  }
}