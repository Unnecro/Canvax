/**
 *  Mouse and keyboard possible
 *  values for inputs
 */

 /** Mouse movement */
$.Framework.mouse = {
  x     : 0,
  y     : 0
};

$.Framework.mouseCode = {
  '0' : 'PRIMARY',
  '1' : 'SCROLL',
  '2' : 'SECUNDARY'
};

$.Framework.charCode = {
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

$.Framework.input_stack = {};

/** JavaScript API */
document.onmousemove = function(mouse){
  $.Framework.mouse.x = mouse.x;
  $.Framework.mouse.y = mouse.y;
};

document.onmousedown = function(mouse){
  $.Framework.addMouseButton(mouse.button);
};

document.onmouseup = function(mouse){
  $.Framework.removeMouseButton(mouse.button);
};

document.onkeydown = function(key){
  $.Framework.addPressedKey(key.keyCode);
};

document.onkeyup = function(key){
  $.Framework.removePressedKey(key.keyCode);
};
/** END JavaScript API */

$.Framework.addMouseButton = function(button){
  $.Framework.input_stack[button] = $.Framework.mouseCode[button];
};

$.Framework.removeMouseButton = function(button){
  delete $.Framework.input_stack[button];
};

$.Framework.addPressedKey = function(key){
  $.Framework.input_stack[key] = $.Framework.charCode[key];
};

$.Framework.removePressedKey = function(key){
  delete $.Framework.input_stack[key];
};

$.Framework.getInputStack = function(){
  return $.Framework.input_stack;
};

$.Framework.emptyInputStack = function(){
  $.Framework.input_stack = [];
};
