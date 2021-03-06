/*
Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the letters 
are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters 
are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns
 a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic 
character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. 
Write your own code.

Here are some helpful links:

String.charCodeAt()
String.fromCharCode()

rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
rot13("SERR YBIR?") should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
*/



//06-08-2016

function rot13(str) {

const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklm'.toUpperCase();
//console.log(alphabet);
var retArr = [];

function convert(item, index) {
	
	let alphabetIndex = alphabet.indexOf(item);
	//console.log(alphabet[alphabetIndex + 13]);
	if (alphabet.indexOf(item) !== -1) {
		retArr.push(alphabet[alphabetIndex + 13]);
	} else{
		retArr.push(item);
	}

}

Array.prototype.map.call(str, convert);

retArr = retArr.toString().replace(/\,/g, '');
console.log(retArr);
}

rot13("SERR PBQR PNZC");









var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];

function rot13(str) {

  var retArr = [];

  for (i in str) {

    if (alphabet.indexOf(str[i]) !== -1) {
      retArr.push(alphabet[alphabet.indexOf(str[i]) + 13]);

    } else {
      retArr.push(str.charAt(i));
    }
  }
  str = retArr.join("");
  console.log(str);
  return str;
}


// Change the inputs below to test
rot13("SERR PBQR PNZC");



