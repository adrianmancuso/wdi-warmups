var base = [];
var symbol = '#';
var size = 32;

var reverseString = function (stringput){
	return stringput.split("").reverse().join("");
}

for (var i = 0; i < size; i++ ){
	base.push(symbol + " ");
	var lineA = base.join("");
	var lineB = reverseString(lineA);
}

var drawBoard = function (boardSize){
	for (var count = 0; count < (size/4); count++){
		console.log(lineA);
		console.log(lineB);
	}
}

drawBoard(size);



