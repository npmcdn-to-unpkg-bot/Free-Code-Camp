var form = document.getElementById('form');
var url = document.getElementById('url');

form.onsubmit = function(e){
    e.preventDefault();
 $.ajax({
     url: 'new',
     type: 'POST',
     data: {
         url: url.value
         // form: form.serialize()
     },
     success: function(data, status){
         alert('data ' + url.value + ' status ' + status);
         url.value = '';
     }
    });
};
url.addEventListener('input', color);
function color(){
  url.style.backgroundColor = 'steelblue';
    url.style.color = 'white';

}