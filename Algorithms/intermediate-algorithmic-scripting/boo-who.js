/*
Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Boolean Objects

boo(true) should return true.
boo(false) should return true.
boo([1, 2, 3]) should return false.
boo([].slice) should return false.
boo({ "a": 1 }) should return false.
boo(1) should return false.
boo(NaN) should return false.
boo("a") should return false.
boo("true") should return false.
boo("false") should return false.
*/




function filterByFalse(obj) {

	return Boolean(obj);
			
}

function bouncer(arr) {
	var arrayFiltered=arr.filter(filterByFalse);
	//console.log(arrayFiltered);
	return filteredArray;
}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);



