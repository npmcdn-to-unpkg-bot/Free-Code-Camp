<<<<<<< HEAD:Advanced Algorithmic Scripting/exact_change.html
/*
Exact Change
Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer (cid) as the third argument.

cid is a 2d array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Object
Run tests (ctrl + enter)


drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return an array.
drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["QUARTER", 0.50]].
drawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Closed".
*/

const drawer = (price, cash, cid) =>{
  let dt = () => {
    return cid.map(item => item[1])
	  .reduce((a,b) => a + b)
  };	  
  let change = +(cash - price).toFixed(2);
  	let curValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

  let retChange = [];
  for ( let i = cid.length - 1; i >=0; i--){
	let currency = cid[i][1];
	let subFrom = Math.min(change, currency);
	let numCount = Math.floor(subFrom / curValue[i]);
	if ( currency > 0){
		let subtract = numCount * curValue[i];
		change -= subtract;
		cid[i][1] -= subtract;
		retChange.push([cid[i][0], subtract])
	}
  }
  
  dt();
  if(!!change){
	console.log('Insufficient Funds');
	return 'Insufficient Funds';
  }else if (!dt()){
	console.log('Closed');
	return 'Closed';
  }else{
	console.log(retChange);
	return retChange;
  }

}

//drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) //should return [["QUARTER", 0.50]].

//drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return "Insufficient Funds".
 drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])// should return "Insufficient Funds".
//drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])// should return "Closed".
//drawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) //should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].

//drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);


=======
/*
Exact Change
Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer (cid) as the third argument.

cid is a 2d array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Object
Run tests (ctrl + enter)


drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return an array.
drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["QUARTER", 0.50]].
drawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Closed".
*/

const drawer = (price, cash, cid) =>{
	let currencyValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
	let returnChange = +(cash - price).toFixed(2);
	let retArr = [];
	let drawerTotal = +(cid.map( currency => currency[1] )
		.reduce((a, b) => a + b)
		.toFixed(2));
	if ( drawerTotal < returnChange ) {
	console.log('insufficient funds');
	return 'Insufficient Funds' 
	} else if ( drawerTotal === returnChange ){
			console.log('Closed');

		return 'Closed';
	}else{
		let temp = returnChange;
		
		while(temp){
			let currCurrency = currencyValue.filter(item => item < temp).pop();
			let idx = currencyValue.indexOf(currCurrency);
			// if return change is greater than items change return the amount
			if ( temp > cid[idx][1] ){
				temp -= +(cid[idx][1]).toFixed(2);
				retArr.push(cid[idx])
			}else {
				let subFrom = Math.min(temp, cid[idx][1]);
				let currNumber = Math.floor(subFrom / currCurrency);
				let value = +(currNumber * currCurrency).toFixed(2);
				temp -= +(value).toFixed(2);
				retArr.push([cid[idx][0], value]);
			}
			console.log(temp, retArr);
		}
		
	}	
}

//drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return "Insufficient Funds".
//FIXME ;;;;; drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])// should return "Insufficient Funds".
//drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])// should return "Closed".
drawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) //should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].

//drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);




/*


Exact Change



Hint: 1

Is easier to handle if you will have to close the register or if you will not have enough money to complete the transaction if you know beforehand how much money is on your register. For this it would be recommended to have a function get the information assigned to a variable.
Hint: 2

Life is easier when you get to know the value of each currency type in the register instead of how much money is composed of that particular currency. So be sure to watch out for that.
Hint: 3

You will have to get as much change from one type before moving to the next from greater value to lesser, and keep going until you have covered the whole change.

function drawer(price, cash, cid) {

  // Total Amount to return to client
  var totalChange = +(cash - price).toFixed(2);

  //Standard currency Value
  var stdCurr = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];

  //Name of current currency
  var currType;

  // How many of the current standard currency
  var stdCurrAmount;
  var currCurrency;

  // Change to be returned in proper format.
  var changeArr = [];

  var totalCash = +cid.map(function(money) {
    // Gets 1D array of values
    return money[1];
  }).reduce(function(cash1, cash2) {
    // Reduces the values to one number
    return cash1 + cash2;

    // Rounds to two decimal places
  }).toFixed(2);

  // Handle the case where we don't have enough money or will be left without money.
  if (totalChange > totalCash) {
    return 'Insufficient Funds';
  } else if (totalChange === totalCash) {
    return 'Closed';
  }

  // Loops array from right to left.
  for (var i = +cid.length - 1; i >= 0; i--) {
    // Gets the monetary value of the current array and the type.
    currCurrency = +cid[i][1].toFixed(2);
    currType = cid[i][0];

    //If the currency is less than the change left to hand then get the right amount from the current type of change.
    if (+stdCurr[i].toFixed(2) <= +totalChange.toFixed(2)) {

      stdCurrAmount = Math.floor(currCurrency / stdCurr[i]);

      if ((stdCurr[i] * stdCurrAmount) >= totalChange) {
        stdCurrAmount = Math.floor(totalChange / stdCurr[i]);
      }

      //Get the current currency to use and udate the amount left to hand out.
      currCurrency = +(stdCurr[i] * stdCurrAmount).toFixed(2);
      totalChange = +(totalChange - currCurrency).toFixed(2);

      // Update the values so we always have the current amount left in the register.
      cid[i][1] = currCurrency;

      //Push the change right change to hand out
      changeArr.push([currType, currCurrency]);
    }
  }

  return changeArr;
};

*/


  
  
>>>>>>> f1937334f01c820317ae0c2b2de8e1606882283e:Algorithms/Advanced Algorithmic Scripting/exact_change.html
