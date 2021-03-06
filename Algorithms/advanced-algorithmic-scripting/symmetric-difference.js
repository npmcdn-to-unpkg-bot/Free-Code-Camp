/*
Symmetric Difference
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.reduce()
Symmetric Difference

sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 5, 4].
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [7, 4, 6, 2, 3].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9]')
*/


const sym = (...args) =>{
	let output = [];
	const getDiff = (arr1, arr2) =>{
		output = arr1.concat(arr2).filter(item => !(arr1.indexOf(item) !== -1 && arr2.indexOf(item) !== -1));
		output = output.filter((item, index, array) =>{
			 return array.indexOf(item) === index;
		}).sort();
	}
	getDiff(args[0], args[1]);
	for (let i = 2; i < args.length; i++){
		getDiff(output, args[i]);
	}
	return output;
}

sym([1, 2, 3], [5, 2, 1, 4])// should return [3, 5, 4].
sym([1, 2, 5], [2, 3, 5], [3, 4, 5])// should return [1, 4, 5]
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) //should return [1, 4, 5].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])// should return [7, 4, 6, 2, 3].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) //should return [1, 2, 4, 5, 6, 7, 8, 9]')





/*

Rafase 282 solution

Hint: 1

The arguments object is not an Array. It is similar to an Array, but does not have any Array properties except length. For example, it does not have the pop method. However it can be converted to a real Array:

var args = Array.prototype.slice.call(arguments);

Hint: 2

Write a function that returns the symmetric difference of array1 and array2.

yourFunction([1, 2, 3], [2, 4, 6]) must return [1, 3, 4, 6]

Hint: 3

Use Array.prototype.reduce along with yourFunction to repeat the process on multiple arguments

Something a bit strange about the definition of symmetric difference is that if one identical item occurs in three different sets, it is a member of the symmetric difference. An example is easier to explain:

a = [1, 2, 5]
b = [2, 3, 5]
c = [3, 4, 5]

sym(a, b) = [1, 3]
sym([1, 3], c) = [1, 4, 5]

function sym() {

  // Convert the argument object into a proper array
  var args = Array.prototype.slice.call(arguments);

  // Return the symmetric difference of 2 arrays
  var getDiff = function(arr1, arr2) {

    // Returns items in arr1 that don't exist in arr2
    function filterFunction(arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }

    // Run filter function on each array against the other then get unique values
    return filterFunction(arr1, arr2)
      .concat(filterFunction(arr2, arr1))
      .filter(function(item, idx, arr) {
        // Keep any items that are unique - the index of the current item === index of the first occurrence in the array
        return arr.indexOf(item) === idx;
      });
  };

  // Reduce all arguments getting the difference of them
  return args.reduce(getDiff, []);
}

//jshint esversion: 6
function sym() {
  // difference between set A and set B
  const diff = (A, B) => new Set([...A].filter(n => !B.has(n)));
  // spread operator to convert array like object to array
  const result = [...arguments]
    // map elements in arguments (array) to Set
    .map(arr => new Set(arr))
    // using the formula in https://en.wikipedia.org/wiki/Symmetric_difference
    // i reduce it by uniting the diff(A, B) and diff(B, A)
    .reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)])); 

  // convert the set to array by using spread operator again
  return [...result];
}



*/



