var results = [];

var coinFlip = function (){
	var side = Math.floor(Math.random()*2);
	if (side === 0){
		results.push(side);
		console.log("HEADS");

	} else {
		results.push(side);
		console.log("TAILS");
	}
	if (results.length >= 5) {
		var checkResults = results.slice(results.length-5, results.length);
		var sum = checkResults.reduce(function(acc, value) {return acc + value;});
		if (sum === 0 || sum === 5) {
				console.log("WINNER");
		}
	}
}

document.querySelector('button').addEventListener('click', coinFlip);
