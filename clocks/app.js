var $hour = $( "#hourhand" );
var $minute = $( "#minutehand" );
var $second = $( "#secondhand" );
var $clock = $( "#clockface" );
var	degree = 6;

var moveHand = function(hand) {
	hand.css('transform', 'rotate('+ degree +'deg)');
	degree += 6;

};

setInterval(function(){moveHand($second);},500);
setInterval(function(){moveHand($minute);},70);
setInterval(function(){moveHand($hour);},1000);
setInterval(function(){moveClock($clock);},50);


var moveClock = function(hand) {
	hand.css('transform', 'rotateX(-'+ degree +'deg)');
	hand.css('transform', 'rotateY('+ degree +'deg)');
	degree -= 3;

};