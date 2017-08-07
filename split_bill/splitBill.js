var group = {
    A: 20, 
    B: 15, 
    C: 10,
    D: 100,
    E: 5,
    F: 50
}

var balancer = function(groupObject) {
  
  let keyArray = Object.keys(groupObject);
  let valueArray = Object.values(groupObject);

  let noOfPeople = valueArray.length;
  let totalPaid = valueArray.reduce((sum, value) => (sum + value));
  let average = (totalPaid/noOfPeople);


  let differenceArr = valueArray.map((amountPaid) => (amountPaid-average));
  let amountsOwing = _.zipObject(keyArray, differenceArr);

  return amountsOwing;
};
