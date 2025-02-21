//Level 1 button class

class backBtn0 extends Button1 {
    constructor(x,y,w,h){
      super(x,y,w,h)}
  
    show(){
      image(backing[0], this.x, this.y, this.w, this.h)}}

//Level 2 button class

class backBtn1 extends Button1 {
  
  constructor(x,y,w,h){
    super(x,y,w,h)}
  
   show(){
      image(backing[1], this.x, this.y, this.w, this.h)}}

//Level 3 button class

class backBtn2 extends Button1 {
  
  constructor(x,y,w,h){
    super(x,y,w,h)}
  
  show(){
    image(backing[2], this.x, this.y, this.w, this.h)}}