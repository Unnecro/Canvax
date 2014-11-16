$.Canvas = new Object();
$.Canvas.properties = new Object();
$.Canvas.properties.x = window.innerWidth - 25;
$.Canvas.properties.y = window.innerHeight - 25;

$.Canvas.setCanvas = function(id){
  $.Canvas.DOMObject = document.getElementById(id);

  $.Canvas.DOMObject.oncontextmenu = function(e){
    e.preventDefault();
  };

  $.Canvas.DOMObject.setAttribute('width', $.Canvas.properties.x);
  $.Canvas.DOMObject.setAttribute('height', $.Canvas.properties.y);

  $.Canvas.object = $.Canvas.DOMObject.getContext('2d');
};

$.Canvas.getCanvasDOM = function(){
  return $.Canvas.DOMObject;
};

$.Canvas.getCanvas = function(){
  return $.Canvas.object;
};