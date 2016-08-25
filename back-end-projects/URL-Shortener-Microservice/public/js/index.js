var url = document.getElementById('url');


$('#form').on('submit', function(e){
    e.preventDefault();
	
	$.post('new/' + $("#url").val(), function(response){
		window.location.href = response;
	});
	/*
 $.ajax({
     url: 'new/' + url.value,
     type: 'POST',
     data: {
         url: url.value
         // form: form.serialize()
     },
	 success: function(data, status){
         console.log('data ' + url.value + ' status ' + status);
         url.value = '';
		 
     }
	 
	 success: function(response){
		 window.location.href = response.redirect;
	 }
	 	
    });
*/
});


url.addEventListener('input', color);
function color(){
  url.style.backgroundColor = 'steelblue';
    url.style.color = 'white';

}