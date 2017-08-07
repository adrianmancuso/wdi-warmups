var myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
          {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
          {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
          {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
          {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
          {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}];

var currentLocation = {lat: 36.965255, long: 82.931671};  
var relativeProximity = [];

for (var i = 0; i < myResults.length; i++) {
   var itemLat = myResults[i].location.lat;
   var itemLong = myResults[i].location.long;
    	
	if (currentLocation.lat > itemLat) {
		var proxOne = currentLocation.lat - itemLat;
	} else {
		var proxOne = itemLat - currentLocation.lat;
	};

	if (currentLocation.long > itemLong) {
		var proxTwo = currentLocation.long - itemLong;
	} else {
		var proxTwo = itemLong - currentLocation.long;
	};

	myResults[i].proximity = Math.sqrt((Math.pow(proxOne, 2) + Math.pow(proxTwo, 2)));
	relativeProximity.push(Math.sqrt((Math.pow(proxOne, 2) + Math.pow(proxTwo, 2))));

	relativeProximity.sort(function(a,b){
		return a-b;
	});

};

_.each(relativeProximity, function(prox){
	x = _.find(myResults, {'proximity': prox});
	console.log(x.name);
	console.log(x.proximity);
});




