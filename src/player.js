export default class Player{
  constructor(gameWidth, gameHeight){
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 90;
    this.height = 180;
    this.speedX = 0;
    this.speedY = 0;
    this.isMovingLeft = false;
    this.isMovingRight = false;
    this.maxSpeedX = 7;
    this.maxSpeedY = 9;
    this.velX = 0;
    this.velY = 0;
    this.hasJumped = false;
    this.accDown=.2;

    this.playerImage = new Image();
    this.playerImage.src = "/images/PlayerDrawUp.jpg";
    this.position = {
      x: gameWidth/2-this.width/2,
      y: gameHeight-this.height-10,
    }

  }
  updateVelocityX (){
    if (moveRight = true){
      velX++;
    }
    if (moveLeft = true){
      velX--;
    }
  }
  moveLeft(){
    this.isMovingLeft=true;
  }
  moveRight(){
    this.isMovingRight=true;
  }
  stopHorizontal(){
    this.isMovingLeft = false;
    this.isMovingRight = true;
  }
  jump(){
    if(this.hasJumped)
      return;
    this.hasJumped=true;
    this.velY = this.maxSpeedY;
  }
  dash(){
    if(this.velX<0)
    {
      this.position.x-=2*this.width;
    }
    else if(this.velX>0)
    {
      this.position.x+=2*this.width;
    }
    else
    {
        this.position.x+=2*this.width;
    }

  }

  draw(ctx){
    ctx.drawImage(this.playerImage,0,0, 1046,1597,this.position.x,this.position.y,this.width,this.height);
  }

  update(deltaTime){
    if(!deltaTime)return;
    updateVelocityX();
    this.position.x+=this.velX;
    this.position.y-=this.velY;
    this.velY-=this.accDown;

    if(this.position.y+this.height>=this.gameHeight-10)
    {
      this.position.y = this.gameHeight-10-this.height;
      this.velY=0;
      this.hasJumped= false;
    }
    if(this.position.x<0)
    {
      this.position.x =0;
    }
    if(this.position.x+this.width>=this.gameWidth)
    {
      this.position.x=this.gameWidth-this.width;
    }
  }
}
