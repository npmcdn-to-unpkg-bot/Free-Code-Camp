/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()

steamroller([[["a"]], [["b"]]]) should return ["a", "b"].
steamroller([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamroller([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamroller([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

*/


const steamroller = (arr) =>{
	let flattenedArray = [];
	const flatten = (input) =>{
		if(!Array.isArray(input)){
			flattenedArray.push(input);
		}else{
			input.forEach((item) => flatten(item));
		}
	
	}
	arr.forEach(flatten);
	return flattenedArray;
}

// bonfire

function steamroller(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}



steamroller([1, [2], [3, [[4]]]]);
/*
FCC solution
function steamrollArray(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
  }, []);
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);
:rocket: Run Code

Code Explanation:

Use reduce to concatenate each element into the last element
If the new element is an Array itself call the function recursively to flatten it before merging it with the rest of result
Pass an empty array to reduce as initial value to make sure even the first element will be processed

*/


