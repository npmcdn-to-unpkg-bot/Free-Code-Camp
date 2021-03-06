/*Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.replace()

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
*/


// note: _ is a word character
const spinalCase = (str) =>{
	return str.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/(\s|_)/g, "-").toLowerCase();
}
spinalCase("The_Andy_Griffith_Show")
spinalCase("thisIsSpinalTap");
spinalCase('This Is Spinal Tap');


