/*Pairwise
Return the sum of all indices of elements of 'arr' that can be paired with one other element to form a sum that equals the value in the second argument 'arg'. If multiple sums are possible, return the smallest sum. Once an element has been used, it cannot be reused to pair with another.

For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because 4, 2, 3 and 5 can be paired with each other to equal 7 and their indices (1, 2, 3, and 5) sum to 11.

pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two elements can be paired to equal 4, and the first element has an index of 0!

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.reduce()

pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
pairwise([1, 3, 2, 4], 4) should return 1.
pairwise([1, 1, 1], 2) should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
pairwise([], 100) should return 0.
*/

const pairwise = (...args) =>{
	let copiedArr = args[0];
	let targetSum = args[1];
	let outputIndicies = [];
	copiedArr.forEach((item, index) =>{
		let targetValue = targetSum - item;
		let matchedIndex = copiedArr.indexOf(targetValue);
		if(copiedArr.indexOf( targetValue) !== -1){
			outputIndicies.push( index, matchedIndex);
			copiedArr.splice(index,1).splice(matchedIndex,1);
		}
	});
	return outputIndicies.reduce((a,b) => a + b);
}

pairwise([1, 4, 2, 3, 0, 5], 7) //should return 11.
pairwise([1, 3, 2, 4], 4) //should return 1.

function pairwise(arr, arg) {
 
var temp=[];
var temp2=[];
temp=arr.map(function(value) {
	return arg-value;
});
//console.log(temp);

	temp.forEach(function(value,index) {
	//console.log("value " + value);
		//console.log(arr.indexOf(value));
		if (arr.indexOf(value)!==-1) {
			temp2.push(index);
			}
		 
	});

console.log(temp2);
var total=temp2.reduce(function(a,b){ 
	return a + b;
});

console.log(total);
return total;
}
//pairwise([1,4,2,3,0,5], 7);
pairwise([1, 3, 2, 4], 4);

