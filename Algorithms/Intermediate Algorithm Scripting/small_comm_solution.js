
function smallestCommons(arr) {
  // Sort array from greater to lowest
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;
console.log(newArr);
  // run code while n is not the same as the array lenght.
  do {
    quot = newArr[0] * loop * newArr[1];
	console.log(quot);
    for (n = 2; n < newArr.length; n++) {
	console.log((quot % newArr[n]));
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

smallestCommons([1, 5]);

