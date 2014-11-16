$.Bootstrapper.run = function(){
	$.Bootstrapper.fileLoader('Core/Loader.js', function(){
	  $.Bootstrapper.loadCoreFiles();
	});
};

$.Bootstrapper.loadCoreFiles = function(){
	var loader = $.Bootstrapper.loader;
	for(var key in loader){
		for(var i = 0; i < loader[key].length; i++){
			var file = key + '/' + loader[key][i] + '.js';
			var callback = null;
			if(key === 'Game'){
				callback = function(){
					$.Bootstrapper.loadGameFiles(key);
				}
			}

			$.Bootstrapper.fileLoader(file, callback);
		}
	}
};

$.Bootstrapper.loadGameFiles = function(directory){
	var loader = $.Game.loader;
	for(var key in loader){
		for(var i = 0; i < loader[key].length; i++){
			var file = directory + '/' + key + '/' + loader[key][i] + '.js';
			var callback = null;

			$.Bootstrapper.fileLoader(file, callback);
		}
	}
};