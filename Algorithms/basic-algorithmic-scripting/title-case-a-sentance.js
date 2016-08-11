/* title case a sentance
Title Case a Sentence 
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.split()

titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".



*/


function titleCase(string) {
	let str;
	str = string.toLowerCase().split(' ');
	console.log(str);
	var result = str.map(function(item){
		return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
	});
	result.join(' ');
	console.log(result);
}
titleCase("I'm a little tea pot");

/*
function titleCase(str) {

	str=str.toLowerCase().split(" ");
	console.log(str);
	console.log(str);
	var retArr=[];
	var string="";
	var firstChar="";
	for (var i in str) {
		string=str[i].toString();
		firstChar=str[i].toString().charAt(0).toUpperCase();
		string=string.replace(string.charAt(0),firstChar);
		retArr.push(string);
		}
	retArr=retArr.toString().replace(/[,]/g," ");
	console.log(retArr);
	return retArr;
}
*/

titleCase("sHoRt AnD sToUt"); //should return "Short And Stout".


/*first submittal-----
function titleCase(str) {

	var stringSplit=str.split(" ");
	console.log("string to change: " +stringSplit);
	replaceArray=[];
	for (var i=0;i<stringSplit.length;i++){
		var stringI=stringSplit[i];
		//console.log(stringI);
		firstLetterCap=stringI.charAt(0).toUpperCase();
		//console.log(firstLetterCap);
				//console.log(stringI);
		var replace=stringI.replace(stringI.charAt(0),firstLetterCap);
	//console.log(replace);
	replaceArray.push(replace);
		var getMyString=replaceArray.toString();
		var arrayToString=getMyString.replace(/,/g," ");
	}
		console.log(getMyString);
		
		console.log(arrayToString);
	
	
	//console.log(lowerCase);
	
}
	
titleCase("I'm a little tea pot");
//titleCase("sHoRt AnD sToUt");
//titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

**************************************
Bonfire solution:

String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};


function titleCase(str) {
    var newTitle = str.split(' ');
    var updatedTitle = [];
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(' ');
}
*/
