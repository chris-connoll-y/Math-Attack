import Player from '/src/player.js';
import InputHandler from '/src/input.js'

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 1200;
const GAME_HEIGHT = 600;



ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);



let player = new Player(GAME_WIDTH,GAME_HEIGHT);

new InputHandler(player);

let lastTime = 0;

function gameLoop(timestamp){
  updateVelocityX();
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
  player.update(deltaTime);

  player.draw(ctx);
  requestAnimationFrame(gameLoop);
}
gameLoop();
