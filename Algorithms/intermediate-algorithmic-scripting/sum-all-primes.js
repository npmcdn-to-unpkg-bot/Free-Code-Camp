/*
Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops
Array.push()

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.


*/

function sumPrimes(num) {
  var temp = 0;

  function getPrimes(max) {
    var tempArray = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!tempArray[i]) {
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          tempArray[j] = true;
        }
      }
    }

    return primes;
  }

   var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    temp += primes[p];
  }

  return temp;
}



