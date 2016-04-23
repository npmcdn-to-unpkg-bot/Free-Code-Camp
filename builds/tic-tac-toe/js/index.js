var numberGames = 1;
var turn;
var winningPlayer;
var choice;
var coin;
var turnGlyphicon;
var firstPlayer;
var computerWins=0;
var playerWins=0;
var ties=0;

$(document).ready(function() {
  $("#numberGames").html("Game #: " + numberGames);
  $("#losses").html("Losses: "+computerWins);
  $("#wins").html("Wins: "+ playerWins);
  $("#ties").html("Ties: "+ ties);
});
var model = {
  board: ["", "", "", "", "", "", "", "", ""],
  wins: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
  ]

};

$("#choiceForm").click(function() {
  choice = $(" #choiceForm input[ type='radio']:checked").val();
  console.log("choice: " + choice);

});

$("#startGame").click(function() {

  whoGoesFirst();
  $("#modalHeader").empty();
  $("#startModalBody").html("<h2>Turn: " + turnGlyphicon + "</h2><br><h4>Go First!</h4>");
  if (turn === "computer") {
    $("#startModalBody").html("<h2>The" + turn.charAt(0).toUpperCase() + " " + turn.substr(1) + " will go first<h2>");
  } else {
    $("#startModalBody").html("<h2>Go First! " + turnGlyphicon + "</h2>");
  }

  $("#startModal").modal('show');

});

$("td").click(place);

function whoGoesFirst() {
  coin = Math.floor(Math.random() * 2 + 1);
  coin = 2; // hardcoded coin to 2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  console.log("coin: " + coin);
  console.log("choice: " + choice);
  console.log("does coin = choice? :");
  console.log(coin == choice);

  if (choice === undefined) {
    return;
  }
  if (choice == coin) {
    turnGlyphicon = "<h2> Player <span class='glyphicon glyphicon-user'><span></h2>";
    turn = "player";

  } else {
    turnGlyphicon = "<h2> Computer <span class='glyphicon glyphicon-king'></span></h2>";
    turn = "computer";
    setTimeout(computerPlay, 4000);

  }
  console.log("turn: " + turn);
  firstPlayer = turn;
  $("#displayMe").append(firstPlayer.charAt(0).toUpperCase() + turn.substr(1));

}

// place player pick on board
function place() {

  var td = $(this);
  var $location = td.data("location");
  console.log("placement location: " + $location);
  if (turn === "player") {

    if (model.board[$location] !== "") {
      return alert("spot already taken");

    } else {
      td.html("X");
      model.board[$location] = "X";
      $placement = "player";
      checkWin();

      setNextPlayer();

      computerPlay();
    }

  }

}

function setNextPlayer() {
  console.log("turn before changing: " + turn);
  $("#displayMe").removeClass("glyphicon");

  if (turn === "player") {
    turn = "computer";
    console.log(" Turn after changing: " + turn)
    return;
  } else if (turn === "computer") {
    turn = "player";
    console.log(" Turn after changing: " + turn)
    return;
  }
  $("#displayMe").html("Turn: " + turnGlyphicon);

}

function checkWin() {
  // console.log(model.board);
  var wins = false;
  for (i in model.wins) {
    var pattern = model.wins[i];
    var player = model.board[pattern[0]] + model.board[pattern[1]] + model.board[pattern[2]];
    if (player === "XXX") {
      
      winningPlayer = "player";
      playerWins++;
      $("#wins").html("Wins: "+playerWins);
       $("#modalHeader").html("<h4>game winner:</h4>");
  $("#startModalBody").html("<h2>" + winningPlayer + " won the game!</h2>");
  $("#startModal").modal('show');
  $("#startModal").fadeOut(3000);
      setTimeout(resets,1500);
    } else if (player === "OOO") {
     
      winningPlayer = "computer";
      computerWins++;
     
      $("#losses").html("Losses: "+computerWins);
       $("#modalHeader").html("<h4>game winner:</h4>");
  $("#startModalBody").html("<h2>" + winningPlayer + " won the game!</h2>");
  $("#startModal").modal('show');
  $("#startModal").fadeOut(3000);
      setTimeout(resets,1500);
    }

  }

  //alert tie game
  wins = model.board.every(function(item, index) {
    if (item !== "") {
      return true;
    }
  });
  if (wins) {
    ties++;
    $("#ties").html("Ties: "+ties);
   $("#modalHeader").empty();
    $("#startModalBody").html("<h2>Tie Game!</h2>");
    $("#startModal").modal('show');
    setTimeout(resets,1500);

  }

}
// update board with each play
function xoValuesDisplay() {
  xValues = [];
  //console.log(model.board);
  model.board.filter(function(item, index) {
    if (item === "X") {
      xValues.push(index);
    }
  });
  oValues = [];
  model.board.filter(function(item, index) {
    if (item === "O") {
      oValues.push(index);
    }
  });
  return xValues;
  return oValues;
}
// computer goes for win if available then blocks, then goes for it's preferred play
function computerPlay() {
  if (turn === "computer") {

    xoValuesDisplay();

    var oArray = [];
    var oPlacement = [];
    for (j in model.wins) {
      oArray = [];
      model.wins[j].filter(function(item, index) {
        if (oValues.indexOf(item) !== -1) {
          oArray.push(item);
        } else {
          oPlacement = item;
        }
      });
      // win the game if available
      if (oArray.length === 2 && model.board[oPlacement] === "") {
        model.board[oPlacement] = "O";
        $('[data-location=' + oPlacement + ']').html("O");
        checkWin();

        return;
      }

    }
    //block if player has 2 in a row and no win available
    for (k in model.wins) {
      var checkArr = [];
      placementArr = [];
      model.wins[k].filter(function(item, index) {
        if (xValues.indexOf(item) !== -1) {
          checkArr.push(item);
        } else {
          placementArr.push(item);
        }
      });

      if (checkArr.length === 2 && model.board[placementArr] === "") {
        model.board[placementArr] = "O";
        $('[data-location=' + placementArr + ']').html("O");
        /*
      console.log(model.wins[k]);
      console.log(model.board);
      console.log(checkArr);
      console.log(placementArr);
	  */
        checkWin();
        setNextPlayer();
        return;

      }

    }

    AI();
    return;
  }
}

function AI() {
  if (turn === "computer") {
    var preferredPlay = [4, 0, 8, 5, 1, 7, 2, 6, 3];
    for (j in preferredPlay) {
      var currentTile = preferredPlay[j];
      console.log("computer plays at location: " + currentTile);
      if (model.board[currentTile] === "") {
        $('[data-location=' + currentTile + ']').html("O");
        model.board[currentTile] = "O"
        console.log("board: " + model.board);
        checkWin();
        console.log("set next Player");
        setNextPlayer();
        return;

      }

    }

  }

}
// reset game 
function resets() {
 

  numberGames++;
  $("#numberGames").html("Game #: " + numberGames)
  model.board = ["", "", "", "", "", "", "", "", ""];
  model.win = false;
  $("td").each(function() {
    $(this).html("");
  });
  //if player won
  if (winningPlayer === "player") {
    turn = "player";
    return;
  }
  //if computer won
  else if (winningPlayer === "computer") {
    turn = "computer";

    setTimeout(computerPlay, 1000);
  }
  //if tie game
  else if (winningPlayer === undefined) {
    turn = firstPlayer;
  }
  $("#displayMe").html("First Player: " + turn.charAt(0).toUpperCase()+turn.substr(1));
}