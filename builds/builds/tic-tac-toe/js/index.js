//problem with second game computer starts every game.....

var turn = "";
$("td").click(place);
var winningPlayer;

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

$(document).ready(whoGoesFirst);

function whoGoesFirst() {
  if (winningPlayer === undefined) {
    choice = prompt("choose 1 or 2 to decide who goes first");
    choice = +choice;
    coin = Math.floor(Math.random() * 2) + 1;
    if (choice !== 1 && choice !== 2) {
      alert("Pick 1 or 2 ");
      choice = prompt("choose 1 or 2 to decide who goes first");
    }
    if (choice === coin) {

      alert("Go first");
      turn = "player";
    } else {
      alert("Computer Goes First");
      turn = "computer";
      computerPlay();

    }

  }

}
// place player pick on board
function place() {
  console.log(turn);
  var td = $(this);
  var $location = $(this).data("location");
  console.log($location);
  if (turn === "player") {

    if (model.board[$location] !== "") {
      alert("spot already taken");
      return;
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
  if (turn === "player") {
    turn = "computer";
    console.log(" Turn after changing: " + turn)
    return;
  } else if (turn === "computer") {
    turn = "player";
    console.log(" Turn after changing: " + turn)
    return;
  }

}

function checkWin() {
  // console.log(model.board);
  var wins = false;
  for (i in model.wins) {
    var pattern = model.wins[i];
    var player = model.board[pattern[0]] + model.board[pattern[1]] + model.board[pattern[2]];
    if (player === "XXX") {
      alert("You've won!");
      winningPlayer = "player";
      resets();
    } else if (player === "OOO") {
      alert("Computer Won");
      winningPlayer = "computer";
      resets();
    }

  }

  //alert tie game
  wins = model.board.every(function(item, index) {
    if (item !== "") {
      return true;
    }
  });
  if (wins) {
    alert("Tie game");
    resets();

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

function AI() {
  if (turn === "computer") {
    var preferredPlay = [4, 0, 8, 5, 1, 7, 2, 6, 3];
    for (j in preferredPlay) {
      var currentTile = preferredPlay[j];
      console.log(currentTile);
      if (model.board[currentTile] === "") {
        $('[data-location=' + currentTile + ']').html("O");
        model.board[currentTile] = "O"
        console.log(model.board);
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
  alert("Next Game!");
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
    if (coin === choice) {
      turn = "player";
    } else {
      turn = "computer";
    }
  }

}