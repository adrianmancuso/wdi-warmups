// Print out all the leap years in the last 100 years.

for (var year = 1917; year <=2017; year ++){
	if (year % 400 ===0) {
		continue;
	}
	if (year % 4 === 0){
		console.log(year);
	}
}

// For numbers between 0 and 200: a) print out multiples of 7. 


for (var i = 0; i <= 200; i ++){
	if (i % 7 === 0){
		console.log(i);
	} 
}

// b) print out every second odd number. 
for (var i = 0; i <= 200; i ++){
	if (i % 2 === 1) {
		console.log(i);
		i += 3;
	} 
}



// c) print out all prime numbers.
for (var num = 0; num <= 200; num ++){
	var check = 2;
	for (var i = num -1; i > 1; i -- ){
		if (num % i !== 0){
			check ++;
			if (check === num) {
				console.log(num);
			}
		}
	}
}