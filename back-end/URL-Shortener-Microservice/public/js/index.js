

$('#form').on('submit', function(e){
    e.preventDefault();
	var url = document.getElementById('url').value;
	/*
	$.post('new/' + $("#url").val(), function(response){
		window.location.href = response;
	});
	*/
	/*
	I was having Issues with favicon and request object handling. 
 $.ajax({
    type: 'GET',
	url: 'new/id=' + url,
	success: function(data){
		//alert(data.url);
		window.location = '/new/' + url;
	},
	error: function(data){
		alert('fail');
	}
});
*/
	window.location = '/new/' + url;

});