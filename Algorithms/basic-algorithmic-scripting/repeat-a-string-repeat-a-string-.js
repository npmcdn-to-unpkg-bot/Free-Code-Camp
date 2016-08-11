/*

Repeat a string repeat a string 
Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object

repeat("*", 3) should return "***".
repeat("abc", 3) should return "abcabcabc".
repeat("abc", 4) should return "abcabcabcabc".
repeat("abc", 1) should return "abc".
repeat("*", 8) should return "********".
repeat("abc", -2) should return "".
*/


function repeat(str, num) {
	if ( num < 0 ) return '';
	var loops = num;
	var retStr = '';
	for ( let i = 1; i < num; i++) {
		retStr += str;
	}
	console.log(retStr);
}

repeat('abc', -2);
repeat('abc', 3);




function repeat(str, num) {
  var retArr = [];
  for (var i = 1; i <= num; i++) {
    retArr.push(str);

  }
  retArr = retArr.toString().replace(/[,]/g, "");
  console.log(retArr);
  return retArr;
}
repeat("*", 3); //should return "***".
repeat("abc", 3); //should return "abcabcabc".
repeat("abc", 4); //should return "abcabcabcabc".
repeat("abc", 1); //should return "abc".
repeat("*", 8); //should return "********".
repeat("abc", -2); //should return "".


