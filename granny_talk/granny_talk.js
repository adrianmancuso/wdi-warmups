var randYear = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var grannyTalk = function (str) {
	if (str === "BYE") {
		return("What's that honey? I didn't hear you...");
	} else if (str === str.toUpperCase()){
		return (str + "? NO, NOT SINCE " + randYear(1930, 1950) + "!");
	} else {
		return ("WHAT? SPEAK UP!");
	}

}


//alternate idea would be having a general rule
//eg o --> u, i --> a, roll using rand(1-5)
// use if statements to match to a codeblock

//grandpa talk using regex.. more of a welsh generator than a grandpatalk
var randVowel = function () {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	var i = Math.floor(Math.random() * 5);
	return vowels[i];
}



var grandpaTalk = function (str) {
	var response = grannyTalk(str);
	console.log("What's that? Let me just ask your grandmother...")
	// console.log("She said: " + response.replace(randVowel, randVowel).toUpperCase());
	console.log("She said: " + response.replace(/[aeiou]/gi, randVowel).toUpperCase());
}