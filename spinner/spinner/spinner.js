var spiner = function(string){
	string = string.toLowerCase();
	arr = string.split(/[^A-Za-z]/);
	return arr.join("-");
};