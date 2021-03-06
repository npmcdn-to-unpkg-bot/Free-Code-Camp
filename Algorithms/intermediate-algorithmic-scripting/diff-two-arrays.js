/*
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of
 the two given arrays, but not both. In other words, return the symmetric difference
 of the two arrays.


Here are some helpful links:

Comparison Operators
Array.slice()
Array.filter()
Array.indexOf()
Array.concat()

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
*/

//07202016
const diff = (arr1, arr2) =>{
	return arr1.concat(arr2).filter( item =>{
		return !(arr1.indexOf(item) !== -1 && arr2.indexOf(item) !== -1)
	});
}
diff([1, 2, 3, 5], [1, 2, 3, 4, 5] );//should return [4].
diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);// should return ["pink wool"].
const diff = (arr1, arr2) =>{
	let retArr = [];
	arr1.filter( item =>{
		if (arr2.indexOf(item) === -1){
			retArr.push(item);
		}
	});
	arr2.filter( item => {
		if (arr1.indexOf(item) === -1){
			retArr.push(item);
		}
	});
	return retArr;
}
diff([1, 2, 3, 5], [1, 2, 3, 4, 5] );//should return [4].
diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);// should return ["pink wool"].







