/*You will be provided with an initial array (the first argument in the destroyer 
function), followed by one or more arguments. Remove all elements from the initial 
array that are of the same value as these arguments.

	Here are some helpful links:

Arguments object
Array.filter()


destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
*/



	
function destroyer(arr) {

var retArr=[];  
var args=[].slice.call(arguments);
arr=args.splice(0,1);
arr=arr[0];
//console.log(arr);
//console.log(args);

retArr=arr.filter(function(item,index) {
	return args.indexOf(item) === -1;
});

console.log(retArr);
return retArr;

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); //should return [1, 1].
//destroyer([3, 5, 1, 2, 2], 2, 3, 5);


