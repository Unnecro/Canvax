$.Game.object = new Object();

$.Game.object.properties = {
  QUIET           : 0,
  MOVE_UP         : 1,
  MOVE_LEFT       : 2,
  MOVE_RIGHT      : 3,
  MOVE_DOWN       : 4,
  SHOT_PRIMARY    : 5,
  SHOT_SECUNDARY  : 6
};

$.Game.object.list = [];

$.Game.object.setState = function(object, state){
  object.states.push(state);
};

$.Game.object.getStates = function(object){
  return object.states;
};

$.Game.object.clearStates = function(object){
  object.states = [];
};

$.Game.object.detectActions = function(object){
  var actions = $.Game.object.getStates(object);
  for(var i = 0; i < actions.length; i++){
    $.Game.object.perform(actions[i], object);
  }
};

$.Game.object.perform = function(action, object){
  if(action == $.Game.object.properties.QUIET){

  }
  else if(action < $.Game.object.properties.SHOT_PRIMARY){
    var direction = action;
    $.Game.object.moveTo(object, direction);
  }
  else if(action == $.Game.object.properties.SHOT_PRIMARY){
    $.Game.object.shot(object);
  }

};

$.Game.object.moveTo = function(object, direction){
  switch(direction){
    case $.Game.object.properties.MOVE_UP:
      $.Game.object.moveUp(object);
    break;
    case $.Game.object.properties.MOVE_LEFT:
      $.Game.object.moveLeft(object);
    break;
    case $.Game.object.properties.MOVE_RIGHT:
      $.Game.object.moveRight(object);
    break;
    case $.Game.object.properties.MOVE_DOWN:
      $.Game.object.moveDown(object);
    break;
  }
}

$.Game.object.moveUp = function(object){
  object.y -= object.speed;
};

$.Game.object.moveLeft = function(object){
  object.x -= object.speed;
};

$.Game.object.moveRight = function(object){
  object.x += object.speed;
};

$.Game.object.moveDown = function(object){
  object.y += object.speed;
};

$.Game.object.shot = function(object){
  object.shots.push(
    {
      x           : object.x + (object.width / 2),
      y           : object.y - (object.height / 2),
      objective_x : $.Framework.mouse.x,
      objective_y : $.Framework.mouse.y,
      speed       : 20,
      direction   : {},
    }
  );
}

$.Game.object.hasDirection = function(shot){
  return !!((shot.direction.x || shot.direction.x == 0) && (shot.direction.y || shot.direction.y == 0));
}

$.Game.object.setShotDirection = function(shot){
  var destination_x = shot.x - shot.objective_x;
  var destination_y = shot.y - shot.objective_y;

  var angle = Math.atan2(destination_y, destination_x);

  shot.direction.x = shot.speed * Math.cos(angle);
  shot.direction.y = shot.speed * Math.sin(angle);
}

$.Game.object.removeExiledObjects = function(){
  var list = $.Game.object.getList();
  for(var i = 0; i < list.length; i++){
    var shots = list[i].shots
    for(var j = 0; j < shots.length; j++){
      var shot = shots[j];
      if($.Game.object.isOutsideCanvas(shot)){
        shots.splice(j, 1);
      }
    }
  }
};

$.Game.object.getList = function(){
  return $.Game.object.list;
};

$.Game.object.isOutsideCanvas = function(object){
  var is_outside_canvas = false;
  if(object.x > $.Canvas.properties.x || object.y > $.Canvas.properties.y
    || object.x < 0 || object.y < 0){
    is_outside_canvas = true;
  }

    return  is_outside_canvas;
};