	/*

No repeats please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that duplicate characters are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Permutations
RegExp

permAlone("aab") should return a number.
permAlone("aab") should return 2.
permAlone("aaa") should return 0.
permAlone("aabb") should return 8.
permAlone("abcdefa") should return 3600.
permAlone("abfdefa") should return 2640.
permAlone("zzzzzzzz") should return 0.



procedure generate(n : integer, A : array of any):
    if n = 1 then
          output(A)
    else
        for i := 0; i < n - 1; i += 1 do
            generate(n - 1, A)
            if n is even then
                swap(A[i], A[n-1])
            else
                swap(A[0], A[n-1])
            end if
        end for
        generate(n - 1, A)
    end if

*/


const permAlone = (str) =>{
	let regEx = /(.)\1+/g;
	let arr = str.split();
	
	//Heap's algorithm
	const heap = (n, arr) =>{
		if (n === 1){
			return arr;
		} else{
			for (let i = 0; i < n - 1; i++){
				heap(n - 1, arr);
				if ( n % 2 === 0){
					swap(arr[i])
				}
			}
		}
	
	}

}


var permArr=[];
var regex= /(.)\1+/g;
var myArr=[];
function permAlone(str) {
  var retArr=str.split('');
 


// Generate the permutation for a given n (amount of elements) and a given array
function generate(n, arr) {
    // If only 1 element, just output the array
    if (n == 1) {
        //console.log(arr);
		permArr.push(arr.join(''));
		return;
    }

    for (var i = 0; i < n; i+= 1) {
        generate(n - 1, arr);

        // If n is even
        if (n % 2 === 0) {
            swap(arr, i, n - 1);
        } else {
            swap(arr, 0, n - 1);
        }
    }
}

function swap(arr, idxA, idxB) {
    var tmp = arr[idxA];
    arr[idxA] = arr[idxB];
    arr[idxB] = tmp;
	
}


generate(retArr.length,retArr);
//console.log(permArr);
myArr=permArr.filter(function(item,index) {
	return !item.match(regex);

});
//console.log(myArr);
console.log(myArr.length);
return myArr.length;
}



//permAlone("aab"); //should return 2.
//permAlone("aaa"); //should return 0.
/*
permAlone("aabb"); //should return 8.
permAlone("abcdefa"); //should return 3600.
*/
permAlone("abfdefa") ;//should return 2640.
//permAlone("zzzzzzzz");// should return 0.

.


/*
Problem Explanation:

The program needs to calculate how many of the permutations do not have consecutive repeated characters in a row.
Hint: 1

The easiest way is to use Heap's algorithm to recursively get a list of all the permutations.
Hint: 2

Once you have the list then just create a regular expression to catch the repeating characters.
Hint: 3

You will want to have the permutations as an array of joined strings instead of separated characters.

function permAlone(str) {

  // Create a regex to match repeated consecutive characters.
  var regex = /(.)\1+/g;

  // Split the string into an array of characters.
  var arr = str.split('');
  var permutations = [];
  var tmp;

  // FUnction to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  //Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(''));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  //Return how many have no repetitions.
  return filtered.length;
}



*/

