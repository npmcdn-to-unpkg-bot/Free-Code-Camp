var strict = false;
var audio1 = new Audio(
  'http://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audio2 = new Audio(
  'http://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audio3 = new Audio(
  'http://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audio4 = new Audio(
  'http://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
var audioBuzzer = new Audio('https://s3-us-west-2.amazonaws.com/guylemon/Buzzer.mp3');

$(".input").on("click", playerMove);
$(".input").on("mousedown", function() {
  $(this).toggleClass("brighten");
});
$(".input").on("mouseup", function() {
  $(this).toggleClass("brightn")
});

$('.tiles').on('click', playerMove).on('mousedown', function() {
  if (power == true && lock == true) {
    $(this).toggleClass('brighten');
  }
}).on('mouseup', function() {
  if (power == true && lock == true) {
    $(this).toggleClass('brighten');
  }
});

$("#startButton").on("click", newGame);

$("#strict").click(function() {

  if (!strict) {
    $("#strictlight").css("background-color", "red");
    strict = true;
  } else {
    $("#strictlight").css("background-color", "white");
    strict = false;
  }

});

$("#power").click(function() {
  power = true;
  $(this).toggleClass("btn-danger");
});

function newGame() {
  if (power) {

    round = 0;
    speed = 800;
    playerInputArray = [];
    sequenceArray = [];
    newRound();
    $(".input").toggleClass("unclickable clickable");
   
  }

}

function updateRound() {

  $("#roundCounter").html(round);

}

function newRound() {
  if (round === 20) {
    newGame();
  } else {
    playerInputArray = [];

    round += 1;
    updateRound();
    var color = getColor();
    sequenceArray.push(color);

    if (round >= 4) speed = 400;
    if (round >= 8) speed = 200;
    if (round >= 12) speed = 100;

    animate(sequenceArray);

  }

}

function getColor() {
  return Math.floor(Math.random() * 4) + 1;
}

function beep(audio) {
  // Plays the correct audio file.
  //
  switch (audio) {
    case 'audio1':
      audio1.play();
      break;
    case 'audio2':
      audio2.play();
      break;
    case 'audio3':
      audio3.play();
      break;
    case 'audio4':
      audio4.play();
      break;
    case 'audioBuzzer':
      audioBuzzer.play();
      break;
  }
}

function animate(array) {
	$(".input").toggleClass("clickable unclickable");
	
    
  var i = 0;
  var interval = setInterval(function() {

    lightUp(array[i]);
    i++;
    if (i == array.length) {
      clearInterval(interval);
	   $(".input").toggleClass("unclickable clickable");
    }
  }, speed);
 

}

function lightUp(tile) {

  var audio = 'audio' + tile;
  beep(audio);
  var $tile = $('[data-tile=' + tile + ']').addClass('brighten');
  window.setTimeout(function() {
    $tile.removeClass('brighten');
  }, speed / 2);
}

function playerMove() {

  if (power == true) {
    var position = $(this).data('tile');
    playerInputArray.push(position);

    //If the playerInputArray entry is incorrect at any point, play the buzzersound and start the sequenceArray again. [1,2,3,4]
    if (playerInputArray[playerInputArray.length - 1] !== sequenceArray[playerInputArray.length - 1]) {
      beep('audioBuzzer');
      if (!strict) {
        playerInputArray=[];
        sequenceArray.pop();
        sequenceArray.push(getColor());
        animate(sequenceArray);
      }

    } else {
      var audio = 'audio' + $(this).data('tile');
      beep(audio);
      lightUp(position);

      var exp = sequenceArray.length === playerInputArray.length;
      if (exp) {
        // If it is round 20, set win to true and call gameover.
        if (round === 20) {
          win = true;
          newGame();
        } else {
          setTimeout(newRound, 1000);
        }
      }
    }
  }
}