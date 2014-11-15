$.Game.draw = new Object();

$.Game.draw.objects = function(){
  var objects = $.Game.object.list;
  canvas.beginPath();

  for(var i = 0; i < objects.length; i++){
    canvas.moveTo(objects[i].x + (objects[i].width / 2), objects[i].y - (objects[i].height / 2));
    canvas.fillRect(objects[i].x, objects[i].y - objects[i].height, objects[i].width, objects[i].height);
    $.Game.draw.shots(objects[i]);
  }

  canvas.moveTo($.Game.player.x + ($.Game.player.width / 2), $.Game.player.y - ($.Game.player.height / 2));
  $.Game.draw.shotLine($.Game.player);
  canvas.stroke();
};

$.Game.draw.shots = function(object){
  for(var i = 0; i < object.shots.length; i++){
    var shot = object.shots[i];
    if(!$.Game.object.hasDirection(shot)){
      $.Game.object.setShotDirection(shot);
    }

    canvas.fillRect(shot.x, shot.y, 3, 3);
    shot.x -= shot.direction.x;
    shot.y -= shot.direction.y;
  }
};

$.Game.draw.shotLine = function(object){
  canvas.fillStyle = '#E3E3E3';
  canvas.lineTo($.Framework.mouse.x, $.Framework.mouse.y);
  canvas.fillStyle = '#333333';
};
