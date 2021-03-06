/*
Reverse a String 
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object
String.split()
Array.reverse()
Array.join()
*/

  function reverseString(str) {
  
  
  // Solution 1: built in functions
  str.split('').reverse().join('');
  
  
  //Solution 2: incrementing a for loop
  retStr=''
  for (var i=str.length-1;i>=0;i--) {
  	retStr +=str[i];
  	
  }
  console.log(retStr);
  return retStr;
  }
  
  reverseString("hello");
  
  
  reverseString("hello"); //should return a string.
  reverseString("hello"); //should become "olleh".
  reverseString("Howdy");//should become "ydwoH".
  reverseString("Greetings from Earth"); //should return "htraE morf sgniteerG".
