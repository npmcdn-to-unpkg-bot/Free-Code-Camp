/*

Everytpreng Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Run tests (ctrl + enter)


every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
every([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") should return false
every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") should return true
every([{"single": "yes"}], "single") should return true
every([{"single": ""}, {"single": "double"}], "single") should return false
every([{"single": "double"}, {"single": undefined}], "single") should return false
every([{"single": "double"}, {"single": NaN}], "single") should return false
*/

function every(collection, pre) {

let retArr = collection.every( item => item.hasOwnProperty(pre));
return retArr;
}

/* second attempt 
  var check = '';
  var retArr = [];
  // returns item to be checked 
  check = collection.every(function(item, index) {
    //console.log(item[pre])
    return item[pre];
  });
  //console.log(check);

  if (check) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }

}
*/
/*

first attempt*********************


for (var i=0;i


/*

function every(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;

  // Check for each object
  for (var c in collection) {
    // If it has the same property or the same property value then add 1
    if (collection[c].hasOwnProperty(pre) || collection[c][pre] == pre) {
      counter++;
    }
  }

  // Outside the loop, check to see if we got true for all of them and return true or false
  if (counter == collection.length) {
    return true;
  } else
    return false;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa',
'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
My Code Explanation:

First I create a counter to check how many cases are actually true.
Then check for each object if it it has the same property or the same property value. If true then add one to the counter.
Outside the loop, I check to see if the counter variable has the same value as the length of collection, if true then return true, otherwise, return false

*/






