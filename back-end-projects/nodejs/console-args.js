var output = process.argv.splice(2);
var o = output.reduce(function(total,currentValue){
	return total + Number(currentValue);
}, 0);
console.log(o);
