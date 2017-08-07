var rowArray = [];
var mapArray = [];
var canvas = document.querySelector('p');
var map = "";

var locationRandomizer = function (x) {
	return Math.floor(Math.random() * x);
}

var makeFakeMap = function (height, width) {
	rowArray = [];
	mapArray = [];
	var treasureArray = [];
	//create width-long array
	for (var i = 0; i < width; i ++) {
		rowArray.push('a');
		treasureArray.push('a');
	}
	// repeat height amount of times
	for (var i = 0; i < height; i ++){
		mapArray.push(rowArray);
	}

	var yCoordinate = locationRandomizer(width);
	var xCoordinate = locationRandomizer(height);

	//place fake treasure
	treasureArray.splice(yCoordinate, 1, 'X');
	mapArray.splice(xCoordinate, 1, treasureArray); 

	//consolelog map
	for (var i = 0; i < mapArray.length; i++){
		var result = map.concat(mapArray[i] + '<br>');
		// canvas.innerHTML = mapArray[i];
		// console.log(mapArray[i]);
		canvas.innerHTML = result;
		console.log(result);
	}
}


//to do: create a string that can be passed to innerHTML