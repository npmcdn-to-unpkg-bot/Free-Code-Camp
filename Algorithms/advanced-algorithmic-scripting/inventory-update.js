/*
Inventory Update
Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery. Update current inventory item quantity, and if an item cannot be found, add the new item and quantity into the inventory array in alphabetical order.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Array Object

inventory() should return an array.
inventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length should return an array with a length of 6.
inventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
inventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
inventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
inventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].
*/


const inventory = (curInv, newInv) =>{
	let retInv = [];
	// names of inventory to comare against and return index 
	let curInvNames = curInv.map(function(item, index){
		return item[1];
	});
	let newInvNames = newInv.map(function(item, index){
		return item[1];
	});
	// combine new and old inventory quantities
	let updatedQtys = [];
	curInv.filter(function(item){
		if ( newInvNames.indexOf(item[1]) !== -1){
			let sum = item[0] + newInv[newInvNames.indexOf(item[1])][0];
			console.log(sum);
			let itemName = item[1];
			retInv.push([
				sum, itemName
			]);
		}
	});
	let combinedInv = curInv.concat(newInv);
	// return unique values in arrays
	combinedInv.forEach(function(item, index){
		if (curInvNames.indexOf(item[1]) !== -1 && newInvNames.indexOf(item[1]) === -1){
			retInv.push(curInv[curInvNames.indexOf(item[1])]);
		} else if (newInvNames.indexOf(item[1]) !== -1 && curInvNames.indexOf(item[1]) === -1){
			retInv.push(newInv[newInvNames.indexOf(item[1])]);
		} 
	});
	return retInv;
}




function inventory(arr1, arr2) {
  
  var curInvName=[];
  var newInvName=[];
  var retArr=[];
  // retrieve matches and update inventory
  for (var i=0;i<arr1.length;i++) {
	for (var j=0;j<arr2.length;j++) {
	
		if (arr1[i][1]==arr2[j][1]) {
			retArr.push([arr1[i][0]+ arr2[j][0], arr1[i][1]])
		}
	}
  }
  //console.log(retArr);
  arr1.map(function(item1) {
	curInvName.push(item1[1]);
  });
  
	arr2.map(function(item2) {
	newInvName.push(item2[1]);
  });
  console.log(curInvName);
  console.log(newInvName);
  
  // add new inventory to array
  curInvName.map(function(value,index) {
	if (newInvName.indexOf(value)===-1)
		retArr.push(arr1[index]);
	});
	// add current inventory to array
	newInvName.map(function(value,index) {
	if (curInvName.indexOf(value)===-1)
		retArr.push(arr2[index]);
	});
	
	
	console.log(retArr);
	
	retArr.sort(function(currItem, nextItem) {

    //Ternary function to avoid using if else
    return currItem[1] > nextItem[1] ? 1 : -1;
  });
	console.log(retArr);
  return retArr;
	


 }

inventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])// should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].





/*


Problem Explanation:

The program must take two 2D arrays and compare them, if an item from the secodn on is already on the first one then update the first one with the new updated quantity, if it is not then add it to the first one in alphabetical order.
Hint: 1

You need to handle different cases, the first is to increment the number of stock for items found in both list. Is not hard, just remember how to edit arrays using their index.
Hint: 2

The second part is to figure out the index of the new inventory that are not in the current inventory. This can be tricky, you can use a function to find it or create copies of the arrays without the numbers to check.
Hint: 3

The last bit is to sort the array before returning it. It has to be alphabetically so it can be a bit tricky.

function inventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

  var index;
  var arrCurInvName = []; // Names of arr1's items
  var arrNeInvName = []; // Names of arr2's items

  // Same as using two for loops, this takes care of increasing the number of stock quantity.
  arr1.map(function(item1) {
    return arr2.map(function(item2) {
      if (item1[1] === item2[1]) {
        item1[0] = item1[0] + item2[0]; //Increase number of stock
      }
    });
  });

  // Get item's name for new Inventory
  arr2.map(function(item) {
    arrNeInvName.push(item[1]);
  });

  // Get item's name for Current Inventory
  arr1.map(function(item) {
    arrCurInvName.push(item[1]);
  });

  // Add new inventory items to current inventory.
  arrNeInvName.map(function(item) {
    if (arrCurInvName.indexOf(item) === -1) {
      index = arrNeInvName.indexOf(item);
      arr1.push(arr2[index]);
    }
  });

  // Sort the array alphabetically using the second element of the array as base.
  arr1.sort(function(currItem, nextItem) {

    //Ternary function to avoid using if else
    return currItem[1] > nextItem[1] ? 1 : -1;
  });

  return arr1;
}

// Example inventory lists
var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone']
];

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste']
];

inventory(curInv, newInv);
*/

