

$('#form').on('submit', function(e){
	var url = document.getElementById('url').value;
    e.preventDefault();
	/*
	$.post('new/' + $("#url").val(), function(response){
		window.location.href = response;
	});
	*/
 $.ajax({
    type: 'GET',
	url: 'new/id=' + url,
	data: {
		url: url.value
	},
	dataType: 'json',
	success: function(data){
		//alert(data.url);
		window.location = '/new/' + url;
	},
	error: function(data){
		alert('fail');
	}
});

});
url.addEventListener('input', color);
function color(){
  url.style.backgroundColor = 'steelblue';
    url.style.color = 'white';

}