var suffixify = function(day) {
  if (day == 1 || day == 21 || day == 31) {
    return (day + "st");
  } else if (day == 2 || day == 22) {
    return (day + "nd");
  } else if (day == 3 || day == 23) {
    return (day + "rd");
  } else {
    return (day + "th");
  }
}

var wordify = function(dateArr) {
  var year = parseInt(dateArr[0]);
  var month = parseInt((dateArr[1]-1));
  var day = parseInt(dateArr[2]);

  var date = new Date(Date.UTC(year, month, day));
  var UTCstring = date.toUTCString();
  var arr = UTCstring.split(" ")

  day = suffixify(arr[1]);
  month = arr[2];
  year = arr[3];

  return [day, month, year];
};

var cleanUp = function (arrOne, arrTwo) {
  if (arrOne[2] === arrTwo[2]) {
    arrTwo.pop();
    if (arrOne[1] === arrTwo[1]) {
      arrTwo.pop();
    } 
  }
  return [arrOne, arrTwo]
};

var makeFriendlyDates = function(dateArray) {

  var split = dateArray.map(function(string) {
    var x = string.split("-");
    return x
  });

  var dateOne = (wordify(split[0]));
  var dateTwo = (wordify(split[1]));

  console.log(cleanUp(dateOne, dateTwo));

}
