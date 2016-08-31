var turn, winningPlayer, choice, firstPlayer;
var computerPiece, $placement, playerPieces;
var myGameData = (typeof localStorage["gamedata"] !== "undefined") ? JSON.parse(localStorage["gamedata"]) : {
  wins: 0,
  losses: 0,
  ties: 0,
  numGames: 0
}
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

function showMessage(message) {
  const msg = $('#msg');

  function transIn() {
    msg.fadeIn()
      .text(message)
  }

  function transOut() {
    msg.text('')
      .fadeOut();
  }
  transIn();
  setTimeout(transOut, 1200);
}


function whoGoesFirst() {
  function choosePiece() {
    $('.O').click(function() {
      choice = 'O'
      determineFirstPlayer();
    });
    $('.X').click(function() {
      choice = 'X';
      determineFirstPlayer();
    });
  }

  function determineFirstPlayer() {
    $("#startGame").css('display', 'none');
    if (choice === "O") {
      setComputerPiece();
      turn = "player";
      showMessage("Go First!")
    } else {
      setComputerPiece();
      showMessage("Computer Goes First")
      turn = "computer";
      computerPlay()
    }
  }
  choosePiece();
}
$(document).ready(function() {
  $(".numberGames").text(myGameData.numGames);
  $(".losses").text(myGameData.losses);
  $(".wins").text(myGameData.wins);
  $(".ties").text(myGameData.ties);
  $('.card').click(place);
  $('#choose-modal').modal('show');
  $('#msg').hide();
  $('#gameDataButton').click(function() {
    $('.playerHistory').toggle()
  });
  whoGoesFirst();
});

function setComputerPiece() {
  computerPiece = (choice === "X") ? "O" : "X";
  return computerPiece;
}
// place player piece on board
function place() {
  if (turn === "player") {
    var card = $(this);
    var $location = card.data("location");
    if (!!model.board[$location]) {
      return showMessage("spot already taken")
    } else {
      card.html(choice);
      model.board[$location] = choice;
      $placement = "player";
      if (!checkWin()) {
        setNextPlayer();
        computerPlay();
        return;
      }
    }
  }
}

function setNextPlayer() {
  return turn = (turn === "player") ? "computer" : "player";
}
//todo look at choice v ooo
function checkWin() {
  var tie = false;
  for (i in model.wins) {
    var pattern = model.wins[i];
    var player = model.board[pattern[0]] + model.board[pattern[1]] + model.board[pattern[2]];
    if (player == choice + choice + choice) {
      winningPlayer = "player";
      myGameData.wins++;
      $(".wins").text(myGameData.wins);
      lightUpWinningCombo(pattern);
      setTimeout(resets, 750);
      return;
    } else if (player == computerPiece + computerPiece + computerPiece) {
      winningPlayer = "computer";
      myGameData.losses++;
      $(".losses").text(myGameData.losses);
      lightUpWinningCombo(pattern);
      setTimeout(resets, 750);
      return true;
    }
  }
  //alert tie game
  tie = model.board.every(function(item, index) {
    if (!!item) {
      return true;
    }
  });
  if (tie) {
    myGameData.ties++;
    $(".ties").text(myGameData.ties);
    setTimeout(resets, 750);
  }
}

function lightUpWinningCombo(combo) {
  for (var i in combo) {
    $('td[data-location =' + combo[i] + ']').css('color', 'red');
  }
}
// update board with each play
function gatherBoardInfo() {
  playerPieces = [];
  model.board.filter(function(item, index) {
    if (item === choice) {
      playerPieces.push(index);
    }
  });
  computerPieces = [];
  model.board.filter(function(item, index) {
    if (item === computerPiece) {
      computerPieces.push(index);
    }
  });
}
// computer goes for win if available then blocks, then goes for it's preferred play
function computerPlay() {
  if (turn === "computer") {
    gatherBoardInfo();
    //need to fix to go for computer piece first. not just O values.
    var cArray = [];
    var oPlacement = [];
    for (j in model.wins) {
      cArray = [];
      model.wins[j].filter(function(item, index) {
        if (computerPieces.indexOf(item) !== -1) {
          cArray.push(item);
        } else {
          oPlacement = item;
        }
      });
      // win the game if available
      if (cArray.length === 2 && model.board[oPlacement] === "") {
        model.board[oPlacement] = computerPiece;
        $('[data-location=' + oPlacement + ']').html(computerPiece);
        checkWin();
        return;
      }
    }
    //block if player has 2 in a row and no win available
    for (let k in model.wins) {
      var checkArr = [];
      placementArr = [];
      model.wins[k].filter(function(item, index) {
        if (playerPieces.indexOf(item) !== -1) {
          checkArr.push(item);
        } else {
          placementArr.push(item);
        }
      });
      if (checkArr.length === 2 && model.board[placementArr] === "") {
        model.board[placementArr] = computerPiece;
        $('[data-location=' + placementArr + ']').html(computerPiece);
        checkWin();
        setNextPlayer();
        return;
      }
    }
    AI();
    // play preferred playing piece if there are no winning or blocking moves
    function AI() {
      if (turn === "computer") {
        var preferredPlay = [4, 0, 8, 6, 5, 7, 2, 1, 3];
        for (j in preferredPlay) {
          var currentTile = preferredPlay[j];
          if (model.board[currentTile] === "") {
            $('[data-location=' + currentTile + ']').html(computerPiece);
            model.board[currentTile] = computerPiece;
            checkWin();
            setNextPlayer();
            return;
          }
        }
      }
    }
    return;
  }
}
//TODO ADD LOSSES AND WINS TO LOCAL STORAGE
function resets() {
  $('td').css('color', 'black');

  function resetWinningPlayer() {
    winningPlayer = null;
  }

  function clearBoard() {
    resetWinningPlayer();
    model.board = ["", "", "", "", "", "", "", "", ""];
    model.win = false;
    $("td").each(function() {
      $(this).html("");
    });
  }
  myGameData.numGames++;
  $(".numberGames").text(myGameData.numGames);
  localStorage.setItem("gamedata", JSON.stringify(myGameData));
  if (winningPlayer === "player") {
    turn = "player";
    showMessage("You Won Mo Fucka! Go First")
    return;
  } else if (winningPlayer === "computer") {
    turn = "computer";
    showMessage("Computer Won and will go First!")
    clearBoard()
    setTimeout(function() {
      computerPlay()
    }, 2000)

    return;
    //if tie game
  } else if (!winningPlayer && turn === "computer") {
    turn = "player";
    showMessage("Tie Game, You're Move If You Dare!")
    clearBoard();
    return;
  } else {
    turn = "computer";
    showMessage("Tie Game, Computer Will Go First Next Game")
    clearBoard()
    computerPlay()
    return;
  }
}