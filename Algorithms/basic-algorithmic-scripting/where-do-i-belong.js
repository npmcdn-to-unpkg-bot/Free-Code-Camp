/*
Where do I belong
Return the lowest index at which a value (second argument) should be 
inserted into an array (first argument) once it has been sorted.

For example, where([1,2,3,4], 1.5) should return 1 because it is greater
 than 1 (index 0), but less than 2 (index 1).

Likewise, where([20,3,5], 19) should return 2 because once the array has 
been sorted it will look like [3,5,20] and 19 is less than 20 (index 2)
 and greater than 5 (index 1).


Here are some helpful links:

Array.sort()

where([40, 60], 50) should return 1. good
where([10, 20, 30, 40, 50], 35) should return 3. good 
where([10, 20, 30, 40, 50], 30) should return 2.......
where([3, 10, 5], 3) should return 0.
where([5, 3, 20, 3], 5) should return 2.
where([2, 20, 10], 19) should return 2.
where([2, 5, 10], 15) should return 3.
*/

function where(arr, num) {
	arr = arr.sort();
	let index = '';
	for ( let i = 0; i < arr.length; i++ ) {
		if ( num >= arr[i] ) {
			index = i;
		}
	}
	if (index ==='') {
		index = arr.length;
	}
	console.log(index);

}

where([10, 20, 30, 40, 50], 35);
where([10, 20, 30, 40, 50], 30); 
where([3, 10, 5], 3); 
where([5, 3, 20, 3], 5); 
where([2, 20, 10], 19); 

where([2, 5, 10], 15); 




function where(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {

      return i;
    }
  }
  return arr.length;
}
where([40, 60], 50);
/*
where([10, 20, 30, 40, 50], 35);
where([10, 20, 30, 40, 50], 30); 
where([3, 10, 5], 3); 
where([5, 3, 20, 3], 5); 
where([2, 20, 10], 19); 

where([2, 5, 10], 15); 
*/

