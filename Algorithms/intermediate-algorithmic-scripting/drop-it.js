
function drop(arr, func) {
	var temp=arr.length;
	for (var i=0;i<temp;i++) {
	if (func(arr[0])){
	break;
	}
	else {arr.shift();
	}
}	
	console.log(arr);
  return arr; 
}

drop([1, 2, 3, 4], function(n) {return n > 5;})
	