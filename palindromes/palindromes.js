
var getLetterArray = function (str) {
	var returnedString = str.toLowerCase().replace(/[\s.,?!&"]/g,"");
	array = returnedString.split("");
	return array;
}

var palindromeChecker = function (str) {	
	var fwd = getLetterArray(str)
	fwd = fwd.join("");
	var bkwd = getLetterArray(str).reverse();
	bkwd = bkwd.join("");
	if (bkwd === fwd) {
		console.log("Palindrome");
	} else {
		console.log("Not a palindrome :(");
	}	
}