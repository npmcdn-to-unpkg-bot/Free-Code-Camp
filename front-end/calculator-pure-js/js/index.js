"use strict";

//TODO: add ANS button

var display = document.getElementById("display");
var tile = document.querySelectorAll("div.tile");

for (var i = 0; i < tile.length; i++) {
  tile[i].onclick = function () {
    handleClick(this);
  };
}

function handleClick(item) {
  var operator = item.getAttribute("data-tile");
  switch (operator) {
    case '+':
    case '-':
    case '*':
    case '/':
    default:
      return display.value += operator;
    case '=':
      evaluateString();
      break;
    case 'C':
      clearDisplay();
      break;
  }
}

function clearDisplay() {
  return display.value = "";
}

/* evaulate function needs to add regular expression to search for + - characters 
 * also need to look for = - as two characters in a row and throw an error. 
 */

function evaluateString() {
  function sabbathCommeth() {
    display.value = 'FUCKING SABBATH';
    display.style.background = '#F44336';
    setTimeout(function () {
      display.style.background = '#ffecb3';
      display.value = '';
      document.body.innerHTML += '<iframe width="60" height="30" src="https://www.youtube.com/embed/VTnf_KYyrBQ?autoplay=1" frameborder="0" allowfullscreen></iframe>';
    }, 1500);
  }
  var str = display.value;
  var stringError = /(\+|\-|\*|\/){2,}|(\+|\-|\*|\/)$/g;
  var singleOperator = /\d(\+|\-|\*|\/){1}\d(\+|\-|\*|\/)?/g;
  if (str.match(stringError) || !str.match(singleOperator)) {
    alertUser();
  } else {
    // EVIL EVAL!!!!!!!!!!
    var output = eval(str);

    display.value = output;
    if (display.value == 666) {
      sabbathCommeth();
    }
  }
}

function alertUser() {
  display.style.background = '#F44336';
  display.value = 'ERROR';
  setTimeout(function () {
    display.style.background = '#f5f5f5';
    display.value = '';
  }, 1500);
}