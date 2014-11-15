/** Main objects */
var $ = new Object();
var canvas;

//Framework core container
$.Framework = new Object();
$.Framework.bootstrapper = new Object();

$.Framework.deltaTime = Date.now();

$.Framework.getDeltaTime = function(){
  var now = Date.now();
  var delta_time = now - $.Framework.deltaTime;
  $.Framework.deltaTime = now;

  return delta_time;
};

$.Framework.setRAF = function(){
  window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, $.Game.getFPS());
    }
  ;
};

//Game itself
$.Game = new Object();
/** End Main objects */

$.Canvas = new Object();
$.Canvas.properties = new Object();
$.Canvas.properties.x = window.innerWidth - 25;
$.Canvas.properties.y = window.innerHeight - 25;

$.Game.FPS = 30;

$.Game.setFPS = function(FPS){
  $.Game.FPS = 1000 / FPS;
};

$.Game.getFPS = function(){
  return $.Game.FPS;
};

$.Framework.loopFunction = function(){};
$.Framework.setLoopFunction = function(gameLoop){
  $.Framework.loopFunction = gameLoop;
};

$.Framework.getLoopFunction = function(gameLoop){
  return $.Framework.loopFunction();
};

$.Game.run = function(){
  $.Framework.setRAF();
  $.Game.startLoop();
};

$.Game.startLoop = function(){
  $.Framework.getLoopFunction();
  window.requestAnimationFrame($.Game.startLoop);
};

$.Game.setCanvas = function(id){
  $.Canvas.DOMObject = document.getElementById(id);

  $.Canvas.DOMObject.oncontextmenu = function(e){
    e.preventDefault();
  };

  $.Canvas.DOMObject.setAttribute('width', $.Canvas.properties.x);
  $.Canvas.DOMObject.setAttribute('height', $.Canvas.properties.y);

  $.Canvas.object = $.Canvas.DOMObject.getContext('2d');
};

$.Game.getCanvasDOM = function(){
  return $.Canvas.DOMObject;
};

$.Game.getCanvas = function(){
  return $.Canvas.object;
};

/** Bootstrapper engine */
$.Framework.bootstrapper.resources = [
  'object',
  'draw',
  'controls',
  'player',
  'main'
];

$.Framework.bootstrapper.importResources = function(){
  var resource = '';
  for(var i = 0; i < $.Framework.bootstrapper.resources.length; i++){
    resource = $.Framework.bootstrapper.resources[i];
    document.writeln('<script type="text/javascript" src="js/' + resource + '.js"></script>');
  }
};
/** End Bootstrapper engine */

/** Boostrapper starter */
$.Framework.bootstrapper.importResources();
/** End Boostrapper starter */

