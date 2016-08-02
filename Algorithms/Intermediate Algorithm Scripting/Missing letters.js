/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.


Here are some helpful links:

String.charCodeAt()
String.fromCharCode()

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.
*/

const fearNotLetter = (str) =>{
	let firstCharCode = str.charCodeAt(0);
	let missing;
	str.split('').forEach((item, index) => {
		if (str.charCodeAt(index) === firstCharCode){
			firstCharCode++;
		} else{
			missing = String.fromCharCode(firstCharCode);
		}
	});
	return missing;

}
fearNotLetter("abce"); 

fearNotLetter("abcdefghjklmno");// should return "i".
fearNotLetter("yz"); //should return undefined.





/*

function fearNotLetter(str) {
  // Create our variables.
  var firstCharacter = str.charCodeAt(0);
  var valueToReturn = '';
  var secondCharacter = '';

  // Function to find the missing letters
  var addCharacters = function(a, b) {
    while (a - 1 > b) {
      b++;
      valueToReturn += String.fromCharCode(b);
    }

    return valueToReturn;
  };

  // Check if letters are missing in between.
  for (var index = 1; index < str.length; index++) {
    secondCharacter = str.charCodeAt(index);

    // Check if the diference in code is greater than one.
    if (secondCharacter - firstCharacter > 1) {
      // Call function to missing letters
      addCharacters(secondCharacter, firstCharacter);
    }

    // Switch positions
    firstCharacter = str.charCodeAt(index);
  }

  // Check whether to return undefined or the missing letters.
  if (valueToReturn === '')
    return undefined;
  else
    return valueToReturn;
	
	
	
	
	 Basic Code Solution:

function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
    hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {

      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }  
  }
  return undefined;
}

// test here
fearNotLetter("abce");
:rocket: Run Code

Code Explanation:

This solutions makes use of a for loop.
Code of encountered character is stored in code.
It is checked if code of current character is the expected one (no characters are skipped) by using the logic - code of current character = code of first character + number of iterations.
If a character is missing, the missing character is found and the final string is returned.
undefined is returned if there is no missing character in the string.
Relevant Links

JS For Loops Explained
String.length
:sunflower: Intermediate Code Solution:

// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// test here
fearNotLetter("abce");
:rocket: Run Code

Code Explanation:

First we define variables to store the character code for the first letter in the string, and to store whatever missing letters we may find.
We turn the string to an array in order to map through it instead of using for and while loops.
As we map through our letters' character codes, we go comparing with the one that should be in that position.
If the current letter matches, we move the comparison variable to its next position so we can compare on the next cycle.
If not, the missing letter will be assigned to the missing variable, which will be returned after the map is finished.
If there are no missing characters, return undefined.
Relevant Links

JS String Prototype Split
JS Array Prototype Map
:rotating_light: Advanced Code Solution:

function fearNotLetter(str) {
  var allChars = '';
  var notChars = new RegExp('[^'+str+']','g');

  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}

// test here
fearNotLetter("abce");
:rocket: Run Code

Code Explanation:

A new string allChars is created.
Create a regular expression notChars which selects everything except str.
The for loop is used to add all the letters in the range to allChars.
match() is used to strip off the str letters from the newly created string and it is returned.
If there are no missing characters, return undefined.
*/


