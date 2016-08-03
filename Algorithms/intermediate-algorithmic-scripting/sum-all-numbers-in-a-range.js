/*
Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers
 and all numbers between them.

The lowest number will not always come first.

Here are some helpful links:

Math.max()
Math.min()
Array.reduce()

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
*/


const sumAll = (arr) =>{
	arr.sort();
	let min = arr[0];
	let max = arr[1];
	let temp = [];
	let counter = max;
	while (counter >= min){
		temp.push(counter);
		counter--;
	}
	return temp.reduce(function(a,b) { return a + b });
}
 sumAll([1, 4]);
function sumAll(arr) {
  arr.sort();
  let retArr = [];
  for ( let i = arr[0]; i <= arr[1]; i++){
	retArr.push(i);
  
  }
  console.log('retArr', retArr);
  let reduced = retArr.reduce(function(a,b){ return a + b } );
  return reduced;
  
 }
 
 
  sumAll([4, 1]);
  sumAll([5, 10]);
  sumAll([10, 5]);
