var clubHouse = [bob, jimbo, fish];
var bob = [3,2,6,11,9,2,6,9,10];
var jimbo = [5,12,9,22,13,7,16,10,11];
var fish = [2,2,4,5,4,3,6,4,1];
var par = [3,2,5,5,3,3,4,2,5];

var sum = function (acc, count){
	return acc + count;
}

var totalScores = function () {
	var bobTotal = bob.reduce(sum, 0);
	console.log("Bob's total score: " + bobTotal);
	var jimboTotal = jimbo.reduce(sum, 0);
	console.log("Jimbo's total score: " + jimboTotal);
	var fishTotal = fish.reduce(sum, 0);
	console.log("Fish's total score: " + fishTotal);
	var scoreArray = bob.concat(jimbo, fish);
	var total = scoreArray.reduce(sum, 0);
	console.log("Club House total score: " + total);		
} 

var parScore = function (golfer) {
	var golferScore = [];
	for (var i = 0; i < golfer.length; i++) {
		var individualHole = (golfer[i] - par[i]);
		golferScore.push(individualHole); 
	}
	return golferScore;
}

var findScore = function (golfer) {
	var score = parScore(golfer);
	console.log("Your scores for each hole are: " + score);
	var totalPar = score.reduce(sum, 0);
	console.log("Your total score, compared to par is: " + totalPar);
}

var findCash = function () {
	var bobPar = parScore(bob).reduce(sum, 0);
	var jimboPar = parScore(jimbo).reduce(sum, 0);
	console.log("Those guys suck at golf! You've made $" + (bobPar + jimboPar) + "!");
}