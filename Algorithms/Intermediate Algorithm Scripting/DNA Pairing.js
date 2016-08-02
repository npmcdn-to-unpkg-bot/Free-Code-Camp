/*
DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.push()
String.split()

pair("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pair("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pair("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/



function pair(str) {

var arr=[];
arr=str.split('');
console.log(arr);
function dnaPair ( pair) {

	switch(pair) {
		case "A": return ["A","T"];
			
		case "T": return  ["T","A"];
			
		case "G": return ["G","C"];
			
		case "C": return ["C","G"];
				
	
	}
}

arr=arr.map(dnaPair);
console.log(arr);
return arr;
}

pair("GCG");


*/
