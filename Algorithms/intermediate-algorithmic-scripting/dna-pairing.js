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

/* first submittal. Used a for loop instead of switch.

function pair(str) {

var temp=[];
for (var i=0;i<str.length;i++) {
	if (str[i]=="C") {
		temp.push("G");
	}
	else if (str[i]=="G") {
		temp.push("C");
	}
	else if (str[i]=="A") {
		temp.push("T");
	}
	else if (str[i]=="T") {
		temp.push("A");
	}
}
//console.log(temp);	
strSplit=str.split('');

//console.log(strSplit);
//console.log(typeof temp);
for (var j=0;j<strSplit.length;j++) {
	strSplit[j]=[strSplit[j],temp[j]];
	//console.log(strSplit[j]);
	}
console.log(strSplit);	
return strSplit;

 
}
pair("GCG");
pair("ATCGA");

pair("TTGAG");

pair("CTCTA");


/*
function pair(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  // Loops through the input and pair.
  console.log(char);
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}
pair("GCG");


The program is very simple, the best solution that I have come up with is to use a switch to catch all the possible four elements. Using if statements would take too much code. You could also use Regular Expressions.
Since we have to the original and the pair, I decided to take all four cases instead of the base two.
Create an empty array and use the search function to push the right values to the array and return them.
Solution 2

function pair(str) {
  //define a map object with all pair possibilities 
  var map = {T:'A', A:'T', G:'C', C:'G'};
  //split str into a a char Array
  strArr = str.split('');
  //replace each Array item with a 2d Array using map
  for (var i=0;i<strArr.length;i++){
    strArr[i]=[strArr[i], map[strArr[i]]];
  }
 return strArr;
}
*/

*/
