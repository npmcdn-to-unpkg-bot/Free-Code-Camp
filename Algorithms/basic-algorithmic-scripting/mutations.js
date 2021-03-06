/*
Mutations
Return true if the string in the first element of the array contains 
all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of 
the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string 
"hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the 
letters in "line" are present in "Alien".

Here are some helpful links:

String.indexOf()

*/

function mutation(arr) {
	var str0 = arr[0].toLowerCase();
	var str1 = arr[1].toLowerCase();
	console.log(str0, str1);
	
	var every = Array.prototype.every.call(str1, function(item) {
		console.log(item, str0);
		
		return str0.indexOf(item) !== -1;
	});
	console.log(every);

}
 mutation(["Alien", "line"]);
  mutation(["hello", "hey"]); 




  function mutation(arr) {
    var arr0, arr1;
    var retArr = [];
    arr0 = arr[0].toString().toLowerCase().split('');
    arr1 = arr[1].toString().toLowerCase().split('');
    //console.log(arr0);
    retArr = arr1.every(function(item, index) {
      return arr0.indexOf(item) !== -1;
    });

    console.log(retArr);
    return retArr;
  }
  mutation(["Alien", "line"]);
  mutation(["hello", "hey"]); // should return false.



/*first attempt used a for loop instead of using every method. 




function mutation(arr) {
var check=arr[1].toLowerCase();
//console.log(check);
target=arr[0].toLowerCase();





/*
for (var i=0;i<check.length;i++) {
console.log("check word length " + check.length);
console.log(" letter to match in target " +check[i]);
console.log(target.indexOf(check[i]));
*/

	 //return target.indexOf(check[i])>=0 

}


mutation(["hello", "hey"]);

//mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
//mutation(["Mary", "Army"]);
//mutation(["Mary", "Aarmy"]);
mutation(["Alien", "line"]);
mutation(["floor", "for"]);

//mutation(["hello", "neo"]);

*/


/*
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.

*/