/*

Map the Debris
Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.pow()

orbitalPeriod([{name: "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].

*/




function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var constant = 2 * Math.PI;
  
  var orbitalPeriod = '';
  for (var i in arr) {
  
  	orbitalPeriod = Math.round(constant* Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM));
  
	delete arr[i].avgAlt;
	arr[i].orbitalPeriod = orbitalPeriod;
  }
  console.log(arr);
	return arr;
  
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);// should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].

/*

Problem Explanation:
The first thing to do is to get familiar with what the program is for, for this I would suggest you check the Wikipedia link as that is very important and from where you can also get the formula for the conversion. The hardest part are finding the formula, implementing it and for some modifying objects by the key. However, something that is not very clear is the fact that your program has to be able to check for any number of objects in the array which is what is tested on the second part.

Hint: 1

The formula needed is: T = 2_pi _ sqrt(earthRadius + avgAlt to the cube / GM)

Hint: 2

Use Math.round() to round up to the next whole number as requested. Using Math.ceil() will let you pass the first test but fail the second one.

Hint: 3

Find out how to remove and add key to an object


First solution

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 2 * Math.PI;
  var newArr = [];
  var getOrbPeriod = function(obj) {
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };

  for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}
Second solution

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  //Looping through each key in arr object
  for(var prop in arr){
    //formula  of orbital period https://en.wikipedia.org/wiki/Orbital_period here a = avgAlt+earthRadius
    //Rounding off the orbital period value 
  var orbitalPer = Math.round(2*Math.PI*Math.sqrt(Math.pow(arr[prop].avgAlt+earthRadius,3)/GM));
  //deleting the avgAlt property 
  delete arr[prop].avgAlt;
  //adding orbitalPeriod property
  arr[prop].orbitalPeriod = orbitalPer;
  }
  return arr;
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
Third solution

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  // Loop through each item in the array arr
  arr.forEach(function(item){
    // Calculate the Orbital period value
    var tmp= Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+item.avgAlt,3)/GM));
    //Delete the avgAlt property
    delete item.avgAlt;
    //Add orbitalPeriod property
    item.orbitalPeriod=tmp;
  });
  return arr;
}
Code Explanation:
First solution

The GM and earthRadius is given to us.
To make the code easier to edit and read, I separated each part of the equation.
Create a new array to store the orbPeriods.
a is 2 times pi. The part that is a constant is on the global scope while the rest is part of a function.
Create a function that will do the required work for any amount of objects.
c is the power of earthRadius + the value of avgAlt to the cube.
b is the square root of c divided by GM.
Create orbPeriod to store the product of a & b, with the ceiling function applied to round up to the next whole number.
Then we delete the keyavgAlt, and add the new key and its value.


*/



