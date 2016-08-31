var url = document.getElementById('url');

$('#form').on('submit', function(e){
    e.preventDefault();
	/*
	$.post('new/' + $("#url").val(), function(response){
		window.location.href = response;
	});
	*/
 $.ajax({
    type: 'GET',
	url: 'new/id=' + url.value,
	success: function(data){
		//alert(data.url);
		window.location = '/new/' + url.value;
	},
	error: function(data){
		alert('fail');
	}
});

});
/*
url.addEventListener('input', color); 
function color(){
	//document.body.style.background = '#212121';
  //url.style.backgroundColor = '#C5CAE9';
   // url.style.color = 'white';

}
*/
