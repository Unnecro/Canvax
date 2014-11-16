$.Controls = new Object();
/**
 *  Mouse and keyboard possible
 *  values for inputs
 */

 /** Mouse movement */
$.Controls.mouse = {
  x     : 0,
  y     : 0
};

$.Controls.mouseCode = {
  '0' : 'PRIMARY',
  '1' : 'SCROLL',
  '2' : 'SECUNDARY'
};

$.Controls.charCode = {
    'NONE'  : 'NONE',

    //Special keys
    '32'    : 'SPACE',
    '13'    : 'ENTER',

    //Direction keys
    '38'    : 'UP',
    '37'    : 'LEFT',
    '39'    : 'RIGHT',
    '40'    : 'DOWN',

    //Numbers
    '48'  : 0,        '53'  : 5,
    '49'  : 1,        '54'  : 6,
    '50'  : 2,        '55'  : 7,
    '51'  : 3,        '56'  : 8,
    '52'  : 4,        '57'  : 9,

    //Keywords
    '65' : 'A',
    '66' : 'B',
    '67' : 'C',
    '68' : 'D',
    '69' : 'E',
    '70' : 'F',
    '71' : 'G',
    '72' : 'H',
    '73' : 'I',
    '74' : 'J',
    '75' : 'K',
    '76' : 'L',
    '77' : 'M',
    '78' : 'N',
    '79' : 'O',
    '80' : 'P',
    '81' : 'Q',
    '82' : 'R',
    '83' : 'S',
    '84' : 'T',
    '85' : 'U',
    '86' : 'V',
    '87' : 'W',
    '88' : 'X',
    '89' : 'Y',
    '90' : 'Z'
};

$.Controls.input_stack = {};

/** JavaScript API */
window.onmousemove = function(mouse){
  $.Controls.mouse.x = mouse.x || mouse.clientX;
  $.Controls.mouse.y = mouse.y || mouse.clientY;
};

window.onmousedown = function(mouse){
  $.Controls.addMouseButton(mouse.button);
};

window.onmouseup = function(mouse){
  $.Controls.removeMouseButton(mouse.button);
};

window.onkeydown = function(key){
  $.Controls.addPressedKey(key.keyCode);
};

window.onkeyup = function(key){
  $.Controls.removePressedKey(key.keyCode);
};
/** END JavaScript API */

$.Controls.addMouseButton = function(button){
  $.Controls.input_stack[button] = $.Controls.mouseCode[button];
};

$.Controls.removeMouseButton = function(button){
  delete $.Controls.input_stack[button];
};

$.Controls.addPressedKey = function(key){
  $.Controls.input_stack[key] = $.Controls.charCode[key];
};

$.Controls.removePressedKey = function(key){
  delete $.Controls.input_stack[key];
};

$.Controls.getInputStack = function(){
  return $.Controls.input_stack;
};

$.Controls.emptyInputStack = function(){
  $.Controls.input_stack = [];
};
