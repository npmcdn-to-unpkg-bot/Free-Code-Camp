/*

Sum All Odd Fibonacci Numbers 
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Remainder

sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.



F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2) for n>1.
*/









function sumFibs(num) {


Fib=[0,1];
for ()
Fib[n]=Fib[n-1]+Fib[n-2];
















	var firstNum=0;
	var currentNum=1;
	var fibSum=0;
	while (currentNum <= num){
		if (currentNum % 2!==0) {
			fibSum += currentNum;
		}
	currentNum+=firstNum;
	firstNum= currentNum - firstNum;
	}
	console.log(fibSum);
	return fibSum;
}

sumFibs(4);


