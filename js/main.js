window.onload = function(){
  $.Game.start();
};

$.Game.start = function(){
  //Game's Frames Per Second
  $.Game.setFPS(60);

  $.Game.setCanvas('canvas');


  $.Game.object.list.push($.Game.player);

  canvas = $.Game.getCanvas();

  $.Game.loop = function(){
    $.Game.cleanerStart();
    $.Game.inputDetector();

    $.Game.object.detectActions($.Game.player);
    $.Game.draw.objects();

    $.Game.cleanerEnd();
  };

  $.Game.cleanerStart = function(){
    canvas.clearRect(0, 0, $.Game.getCanvasDOM().width, $.Game.getCanvasDOM().height);
  };

  $.Game.cleanerEnd = function(){
    $.Game.object.clearStates($.Game.player);
    $.Game.object.removeExiledObjects();
  };

  $.Game.inputDetector = function(){
    for(input in $.Framework.getInputStack()){
      switch($.Framework.getInputStack()[input]){
        case 'UP':
          case 'W':
            $.Game.object.setState($.Game.player, $.Game.object.properties.MOVE_UP);
        break;
        case 'LEFT':
          case 'A':
            $.Game.object.setState($.Game.player, $.Game.object.properties.MOVE_LEFT);
        break;
        case 'RIGHT':
          case 'D':
            $.Game.object.setState($.Game.player, $.Game.object.properties.MOVE_RIGHT);
        break;
        case 'DOWN':
          case 'S':
            $.Game.object.setState($.Game.player, $.Game.object.properties.MOVE_DOWN);
        break;
        case 'SPACE':
          $.Game.object.setState($.Game.player, $.Game.object.properties.ATTACK);
        break;
        case 'PRIMARY':
          $.Game.object.setState($.Game.player, $.Game.object.properties.SHOT_PRIMARY);
        break;
        case 'SECUNDARY':
          $.Game.object.setState($.Game.player, $.Game.object.properties.SHOT_SECUNDARY);
        break;
      }

    }
  };

  $.Framework.setLoopFunction($.Game.loop);

  $.Game.run(); // :D

};
