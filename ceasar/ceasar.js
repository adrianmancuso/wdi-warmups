var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
	'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//placeholder text, rmv later and implement user input
var tempString = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH."

var ceaserCipher = function (string) {
	var array = string.toLowerCase().split("");
	for (var i = 0; i < array.length; i++) {
		var char = array[i];
		if (char[/!\m/])
		var index = alphabet.findIndex(function(j){return j === char;});
		console.log(index);
		array.splice(i, 1, alphabet[index-3]);
	}
	return array.join("");
}