
function smallestCommons(arr) {
  
  arr.sort(function(a, b) {
    return b - a;
  });


  var temp = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    temp.push(i);
  }

 
  var remains = 0;
  var loop = 1;
  var n;

 
  do {
    remains = temp[0] * loop * temp[1];
    for (n = 2; n 	