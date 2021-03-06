/*
Validate US Telephone Numbers
Return true if the passed string is a valid US phone number

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555

(555)555-5555

(555) 555-5555

555 555 5555

5555555555

1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp

elephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6505552368)") should return false
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.
*/

var format = /[!@#$%^&*_+\=\[\]{};':"\\|,.<>\/?]+/;

function telephoneCheck(str) {

if(format.test(str)){
console.log("there are special characters in the string");
  return false;
} else {
console.log("no special characters in the string "+str.length );
  
}
if (str.length==17 && str.charAt(0)=="-") {
	console.log("string length 17 w/ hyphen at front")
	return false;
	} 
str=str.replace(/[\s-]/g,"");
console.log("removed # character and spaces " + str + " "+ str.length);
var x=str.length;
console.log(str.length);
	if (str.length==8) {
	console.log("false str 8");
	return false;
	}
if (str.length==10 && str.charAt(0)==1)  {
	console.log("string length 10 w/ 1 at char 0 " +str);
	return true;
	}
	if (str.length==10 && str.charAt(0)==5)  {
	console.log("string length 10 w/ 1 at char 0 " +str);
	return true;
	}
	else if (str.length==11 && str.charAt(0)==1) {
	console.log("string length 10 " +str);
	return true;
	}
	else if (str.length==12 && str.charAt(0)=="(" && str.charAt(2)==5 &&str.charAt(1)==5) {
	console.log("str length 12 w/ 5 return FALSE");
	return true;
	}
	else if (str.length==12 && str.charAt(x-1)!=")" && str.charAt(4)!=")") {
	console.log("string length 12 " + str +" 4 " +str.charAt(4) +  " 4 " + str.charAt(5));
	return true;
	}
	else if (str.length==13 && str.charAt(0)==1 && str.charAt(1)== "("  && str.charAt(5)==")") {
	console.log("string length 13 w/ ()" + str);
	return true;
	}
	//else if (str.length==12 && str.charAt(4)==")") {
	//console.log("yes!");
	//return false;
	//}
	else if (str.length==7) {
	console.log("string length 7 " + str);
	return true;
	}
	else {
	console.log("passed through all arguments "+str+" "+str.length);}
	return false;
}



telephoneCheck("(6505552368)");

/*
function telephoneCheck(str) {
  // Good luck!
  var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;

  return re.test(str);
  
  */
  

/*
153
down vote
replaceAll("\\s","")
\w = Anything that is a word character

\W = Anything that isn't a word character (including punctuation etc)

\s = Anything that is a space character (including space, tab characters etc)

\S = Anything that isn't a space character (including both letters and numbers, as well as punctuation etc)

(Edit: As pointed out, you need to escape the backslash if you want \s to reach the regex engine, resulting in \\s.)
  // Good luck!
 /* 
  var removeSpec=/[!@#$%^&*_+\=\[\]{};':"\\|,.<>\/?]+/;
  
  if (removeSpec.test(str)) {
  console.log("false");
  return false;
  }
  else {
  console.log("ture");
  return true;
  }
  
 


return string.match(/^[^a-zA-Z0-9]+$/) ? true : false;  

 
 function telephoneCheck(str) {
 
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

if(str.test(format)){
console.log("ture");
  return true;
} else {
console.log("false");
  return false;
}

 
}



telephoneCheck("555-555-5555");
telephoneCheck("5#5-555-5555");

 */



/*
telephoneCheck("(6505552368)")


