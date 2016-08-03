/*
Find the Longest Word in a String 
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.split()
String.length

findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWord("May the force be with you") should return 5.
findLongestWord("Google do a barrel roll") should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/

//06132016

function findLongestWord(str) {
	str = str.toString().split(' ');
	console.log(str, typeof str);
	let longestWord = '';
	str.forEach(function(word, index) {
		if ( word.length > longestWord.length) {
			return longestWord = word;
		}
	});
	
	console.log('longest word length: ' + longestWord.length);


}
findLongestWord("The quick brown fox jumped over the lazy dog");



  function findLongestWord(str) {
  
  	str=str.split(" ");
  	var length=0;
  	var retStr;
  	//console.log(str[0].length);
  	for (var i=0;i<str.length;i++) {
  		if (str[i].length>length) {
  			length=str[i].length;
  		}
  	
  	}
  	
  	
  	console.log(length);
  	return length;
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog");
