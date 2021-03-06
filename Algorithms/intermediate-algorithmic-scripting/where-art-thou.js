<<<<<<< HEAD:Intermediate Algorithm Scripting/Where art thou.html
/*
Where art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and it's value, that was passed on as the second argument.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global Object
Object.hasOwnProperty()
Object.keys()

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].
*/

const where = (collection, source) =>{
	let retArr = collection.filter( item => {
		let keys = Object.keys(source);
		for ( let i in keys){
			return item[keys[i]] === keys[i]
		}
	});
	console.log(retArr);
	return retArr;
}
/*

const where = (collection, source) =>{
	let keys = Object.keys(source);
	let retArr = [];
	keys.forEach( key => {
		collection.forEach( item =>{
			if ( item.hasOwnProperty(key) && item[key] === source[key]) {
				retArr.push(item);
			}
		});
	});
	return retArr;
}

const where = (collection, source) =>{
	let retArr = [];
	for ( var k in source){
		for ( var i = 0; i< collection.length; i++){
			if ( source[k] === collection[i][k]){
				retArr.push(collection[i]);
			}
		}
	}
	return retArr;
}
*/

 where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) 
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) //should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) //should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].





/* Bonfire solutions-----------------
For in solution

function where(collection, source) {  
  var arr = [];
  var key = Object.keys(source);

  for(var name in collection){
    if(collection[name][key] === source[key]){
      arr.push(collection[name]);
    }
  }
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' }, { last: 'Montague' });  


function where(collection, source) {
var arr = [];
for (var k in source){
for (var i = 0; i < collection.length; i++){
if (source[k] === collection[i][k])
arr.push(collection[i]);
}
}
return arr;
}


*/

=======
/*
Where art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and it's value, that was passed on as the second argument.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global Object
Object.hasOwnProperty()
Object.keys()

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].
*/


const where = (collection, source) =>{
	let output;
	for ( let i in source){
		 output = collection.filter( item => item[i] === source[i] );
	}
	return output;
}

const where = (collection, source) =>{
	let keys = Object.keys(source);
	let retArr = [];
	keys.forEach( key => {
		collection.forEach( item =>{
			if ( item.hasOwnProperty(key) && item[key] === source[key]) {
				retArr.push(item);
			}
		});
	});
	return retArr;
}

const where = (collection, source) =>{
	let retArr = [];
	for ( var k in source){
		for ( var i = 0; i< collection.length; i++){
			if ( source[k] === collection[i][k]){
				retArr.push(collection[i]);
			}
		}
	}
	return retArr;
}
 where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) 
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) //should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) //should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].





/* Bonfire solutions-----------------
For in solution

function where(collection, source) {  
  var arr = [];
  var key = Object.keys(source);

  for(var name in collection){
    if(collection[name][key] === source[key]){
      arr.push(collection[name]);
    }
  }
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' }, { last: 'Montague' });  


function where(collection, source) {
var arr = [];
for (var k in source){
for (var i = 0; i < collection.length; i++){
if (source[k] === collection[i][k])
arr.push(collection[i]);
}
}
return arr;
}


*/

>>>>>>> f1937334f01c820317ae0c2b2de8e1606882283e:Algorithms/Intermediate Algorithm Scripting/Where art thou.html
