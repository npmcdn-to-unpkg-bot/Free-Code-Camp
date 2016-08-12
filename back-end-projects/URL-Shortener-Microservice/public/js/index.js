var form = document.querySelector('form');
var url = document.getElementById('url');

form.onsubmit = function(e){
  e.preventDefault();
  var formData = JSON.stringify(form.serializeArray());
  console.log(url.value);
  console.log('submitted form')
  url.value = '';
  $.ajax({
  	type: 'POST',
  	url: 'newURL',
  	data: formData
  	success: function(){
      console.log(data);
    },
  	datatype: 'json',
  	contentType: 'application/json'
  	}
  })
}

url.addEventListener('input', color);
function color(){
  url.style.backgroundColor = 'rec';
    url.style.color = 'red';

}