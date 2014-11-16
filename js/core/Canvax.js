/** Main objects */
if(typeof $ === 'undefined' || $ === null || !$){
  var $ = new Object();
}

var canvas;

//Framework core container
$.Canvax = new Object();
$.Bootstrapper = new Object();

$.Bootstrapper.fileLoader = function(file, callback){
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'js/' + file;
  script.onreadystatechange = callback;
  script.onload = callback;

  head.appendChild(script);
}

$.Bootstrapper.fileLoader('Core/Bootstrapper.js', function(){
  $.Bootstrapper.run();
});

$.Canvax.deltaTime = Date.now();

$.Canvax.getDeltaTime = function(){
  var now = Date.now();
  var delta_time = now - $.Canvax.deltaTime;
  $.Canvax.deltaTime = now;

  return delta_time;
};

$.Canvax.setRAF = function(){
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

$.Canvax.getRAF = function(callback){
  window.requestAnimationFrame(callback);
};
