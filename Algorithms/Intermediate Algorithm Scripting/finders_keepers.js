/*
Finders Keepers
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.filter()

find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
find([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
*/

function find(arr,func) {

retArr=arr.filter(func);
console.log(retArr);
return retArr[0];


}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });




