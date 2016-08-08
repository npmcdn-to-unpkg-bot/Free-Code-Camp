/*Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, add(2, 3) should return 5, and add(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = add(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Arguments object

add(2, 3) should return 5.
add(2)(3) should return 5.
add("http://bit.ly/IqT6zt") should return undefined.
add(2, "3") should return undefined.
add(2)([3]) should return undefined.
*/



function add() {
  
	var checkNum=function(num) {
		if (typeof num!=="number") {
			return undefined;
		}
		else {
		return num;
		}
	};
	if (arguments.length>1){
		var a=checkNum(arguments[0]);
		var b=checkNum(arguments[1]);
		if (a===undefined || b===undefined) {
			return undefined;
		}
		else {
			return a + b;
		}
	}
	else {
		var arg1=arguments[0];
		if (checkNum(arg1)) {
			return function(arg2){
				if (arg1===undefined || checkNum(arg2)===undefined) {
					return undefined;
				}
				else {
					return arg1 + arg2;
				}
			}
		}


	}

}

add(2,3);
add(2)(3);

/*

function add() {
  // Function to check if a number is actually a number
  // and return undefined otherwise.
  var checkNum = function(num) {
    if (typeof num !== 'number') {
      return undefined;
    } else
      return num;
  };

  // Check if we have two parameters, check if they are numbers
  // handle the case where one is not
  // returns the addition.
  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    var c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    // instead of undefined.
    if (checkNum(c)) {
      // Return function that expect a second argument.
      return function(arg2) {
        // Check for non-numbers
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          // if numbers then add them.
          return c + arg2;
        }
      };
    }
  }
}
Code Explanation:

First, I create a function with the sole purpose of checking if a number is actually a number and returns undefined if it is not. It uses typeof to check.
Check if we have two parameters, if so, then check if they are numbers or not using the checkNum function I created.
If they are not undefined then add them and return the addition. If they any of them is undefined then return undefined.
In the case that we only have one argument, then we return a new function that expects two parameters. For this we store the first argument before going into a new scope to avoid our arguments being overwritten.
Still inside the big else, we need to check the argument we saved, if it is a number then we return the function expecting a second argument.
Now inside the function we are returning, we have to check for non numbers again just as at the beginning using checkNum if undefined then return that, otherwise if numbers add them and return the addition.


*/


