/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Here are some helpful links:

Boolean Objects
Array.filter()

*/
http://stackoverflow.com/questions/32906887/remove-all-falsy-values-from-an-array


function bouncer(arr) {
	var retArr =  arr.filter(function(item, index) {
		return !!item;
	});
	console.log(retArr);
}	
bouncer([7, "ate", "", false, 9]) ;
bouncer(["a", "b", "c"]) ;
bouncer([false, null, 0, NaN, undefined, ""]) ;








function filterFunction(obj) {

	return Boolean(obj);
			
}

function bouncer(arr) {
	var arrayFiltered=arr.filter(filterFunction);
	//console.log(arrayFiltered);
	return filteredArray;
}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);








bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].