$.Game = new Object();

$.Game.FPS = 30;
$.Game.setFPS = function(FPS){
  $.Game.FPS = 1000 / FPS;
};

$.Game.getFPS = function(){
  return $.Game.FPS;
};

$.Game.loopFunction = function(){};
$.Game.setLoopFunction = function(gameLoop){
  $.Game.loopFunction = gameLoop;
};

$.Game.getLoopFunction = function(){
  return $.Game.loopFunction();
};

$.Game.startLoop = function(){
  $.Game.getLoopFunction();
  $.Canvax.getRAF($.Game.startLoop);
};

$.Game.run = function(){
  $.Canvax.setRAF();
  $.Game.startLoop();
};