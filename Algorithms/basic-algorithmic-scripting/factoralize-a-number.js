/*
Factorialize a Number 
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arithmetic Operators

factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1.
*/


function factorialize(num) {
	var sum = 1;
	
	
		while (num) {
			sum *= num;
			num--;
			
		
		}
	
	
	
	console.log(sum);
	
	

}

factorialize(5);
	factorialize(10);
	factorialize(20);
	factorialize(0);




  function factorialize(num) {
  retArr=[];
    if (num===0) {
  	return 1;
    }
    else {
  	for (var i=1;i<=num;i++) {
  		retArr.push(i);
  	}
    }
    console.log(retArr);
    retArr=retArr.reduce(function(a,b) {
  	return a*b;
    });
    console.log(retArr);
    return retArr;
  }
  
  factorialize(5);
