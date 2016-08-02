/*
Chunky Monkey 
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.push()
Array.slice()

chunk(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunk([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunk([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
chunk([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
chunk([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

*/


function chunk(arr,size) {
  let newArr = [];
  let i = 0;
  for ( var a = 0; a 










function chunk(arr, size) {
  slice=arr.slice(0,size);
	console.log(slice);
	slice2=arr.slice(size,size+size);
	
	//console.log(slice2);
	slice3=arr.slice(size*2);
	//console.log(slice3);
	sliceCombined=[];
	if(slice3.length>0){
	
		sliceCombined.push(slice,slice2,slice3);
	}
	else {
		sliceCombined.push(slice,slice2)
	}
	//console.log(sliceCombined);
  return sliceCombined;
}


//	chunk(['a', 'b', 'c', 'd'], 2);  
//chunk(["a", "b", "c", "d"], 2);
//chunk([0, 1, 2, 3, 4, 5], 3);

//chunk([0, 1, 2, 3, 4, 5], 2);

//chunk([0, 1, 2, 3, 4, 5], 4);

chunk([0, 1, 2, 3, 4, 5, 6], 3);

//chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);

*/