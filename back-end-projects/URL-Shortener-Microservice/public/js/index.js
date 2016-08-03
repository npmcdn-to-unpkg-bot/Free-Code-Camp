'use strict';

var button = document.querySelector('#submit');
var input = document.querySelector('#url');
var resizeInput = function resizeInput() {
  var width = window.innerWidth || document.body.clientWidth;
  var height = window.innerHeight || document.body.clientHeight;
  console.log(width);
  console.log(document.body.clientWidth);
  console.log(screen.width);
  console.log(url.getAttribute('size'));
  //FIXME: TRANSITION
  url.setAttribute('size', width / 8);
};

button.onclick = function (e) {
  e.preventDefault();
  resizeInput();
};