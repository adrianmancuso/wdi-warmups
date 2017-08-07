var finalArray = [];
var testArray = [4, 1, 16, 1, 10, 35, 22];


function getSquares(item, index, array){
	if (Math.sqrt(item)%1===0) {
		if (finalArray.indexOf(item)===-1){
			finalArray.push(item);
		};
	};
	finalArray = finalArray.sort(compareNumbers);
};

function compareNumbers(a,b){
	return a-b;
};