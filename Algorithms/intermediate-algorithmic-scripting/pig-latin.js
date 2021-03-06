/*
Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.indexOf()
Array.push()
Array.join()
String.substr()
String.split()

translate("california") should return "aliforniacay".
translate("paragraphs") should return "aragraphspay".
translate("glove") should return "oveglay".
translate("algorithm") should return "algorithmway".
translate("eight") should return "eightway"
*/


const translate = (str) =>{
	let vowels = /[aeiou]/i;
	return str.charAt(0).match(vowels) ? 
		str.concat('way') :
		str.substr(1).concat(str.substr(0,1)).concat('way');
		 


}
  translate("glove");
  translate("onsonant");
/* first submittal complete shit


  function translate(str) {
  var vowelSearch= /[aeiou]/gi;
  var firstVowelIndex= /[aeiou]/i;
  var cut='';
  
  var vowelIndex = str.indexOf(str.match(firstVowelIndex));
  console.log(vowelIndex);
  
  if (vowelIndex===0) {
  	str= str + "way";
  }
  else {
  	cut=str.slice(0,vowelIndex);
  	str=str.slice(vowelIndex)+cut+"ay";
  }
  console.log(str);
  console.log(cut);
  return str;
  }
  
  translate("glove");
  translate("onsonant");
  //translate("consonant");
  
*/

/* bonfire solutions------

function translate(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;
  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';
  } else {
    // Find how many consonants before the firs vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
*/


*/