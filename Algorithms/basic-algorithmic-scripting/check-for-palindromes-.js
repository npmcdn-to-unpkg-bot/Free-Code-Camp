	/*
 
 Check for Palindromes 
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.replace()
String.toLowerCase()


*/


function palindrome(str) {

	var strippedStr=str.toLowerCase().replace(/\W|_/g,'');
	var reversedStr=strippedStr.split('').reverse().join('');
	return strippedStr===reversedStr
}


palindrome("A man, a plan, a canal. Panama"); 
console.log(palindrome("eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("a man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0,0 si ega ym"));
console.log(palindrome("1 eye for of 1 eye"));
