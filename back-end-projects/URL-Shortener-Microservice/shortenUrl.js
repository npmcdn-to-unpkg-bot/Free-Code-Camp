function randNum(){
	var arr = 'abcdefghjkmnopqrstuvwyz0123456789'.split('');
	return arr[Math.floor(Math.random() * arr.length)];
}
function shortUrl(){
	var output = '';
	for(i = 0; i <5; i++){
		output += randNum();
	}
	return output;
}
module.exports = shortUrl;