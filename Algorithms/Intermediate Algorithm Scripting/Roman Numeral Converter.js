Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Roman Numerals
Array.splice()
Array.indexOf()
Array.join()

convert(2) should return "II".
convert(3) should return "III".
convert(4) should return "IV".
convert(5) should return "V".
convert(9) should return "IX".
convert(12) should return "XII".
convert(16) should return "XVI".
convert(29) should return "XXIX".
convert(44) should return "XLIV".
convert(45) should return "XLV"
convert(68) should return "LXVIII"
convert(83) should return "LXXXIII"
convert(97) should return "XCVII"
convert(99) should return "XCIX"
convert(500) should return "D"
convert(501) should return "DI"
convert(649) should return "DCXLIX"
convert(798) should return "DCCXCVIII"
convert(891) should return "DCCCXCI"
convert(1000) should return "M"
convert(1004) should return "MIV"
convert(1006) should return "MVI"
convert(1023) should return "MXXIII"
convert(2014) should return "MMXIV"
convert(3999) should return "MMMCMXCIX"

function convert(num) {  
    var r = '',
        decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < decimals.length; i++) {
        while (num >= decimals[i]) {
            r += roman[i];
            num -= decimals[i];
			console.log(r);
			console.log(num);
        }
    }
    return r;
}
convert(48);

/*

function convertToRoman(num) {
 var romans = ["I", "V", "X", "L", "C", "D", "M"],
     ints = [],
     romanNumber = [],
     numeral = "";
  while (num) {
    ints.push(num % 10);
    num = Math.floor(num/10);
  }
  for (i=0; i