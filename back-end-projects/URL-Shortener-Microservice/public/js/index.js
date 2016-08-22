var form = document.querySelector('form');
var url = document.getElementById('url');
form.onsubmit = function(e){
  var userUrl = url.value;
  e.preventDefault();
  
  $.ajax({
  	type: 'POST',
  	url: '/new',
  	data: JSON.stringigy({url: userUrl}),
  	contentType: 'application/json; charset=utf-8',
  	dataType: 'json'
  	success: function(){
  	  alert(data);
  	  console.log('submitted form');
      console.log(userUrl);
    },
  	failure: function(errMsg){
  	  alert(errMsg);
  	}
  	
  });
  url.value = 'SUBMITTED';
};

url.addEventListener('input', color);
function color(){
  url.style.backgroundColor = 'steelblue';
    url.style.color = 'white';

}