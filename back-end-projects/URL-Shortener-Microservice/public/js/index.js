var form = document.querySelector('form');
var url = document.getElementById('url');

form.onsubmit = function(e){
    e.preventDefault();
  var userUrl = url.value;
  //var jUrl = JSON.stringify({url: userUrl});
 $.post('newUrl', 
  form.serialize(),
  function(data, status){
   alert('data' + data + '\nStatus ' + status);
  }
 );
};

url.addEventListener('input', color);
function color(){
  url.style.backgroundColor = 'steelblue';
    url.style.color = 'white';

}