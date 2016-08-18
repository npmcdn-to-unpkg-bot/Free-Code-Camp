"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: UPDATE GAME DATA AFTER COMPLETED GAME

//TODO: on place if click and no move is made don't update player.
//TODO: DLELET COMPUTE RAND PLAYER REDUCERS IF NOT NEEDED

var _ReactRedux = ReactRedux;
var connect = _ReactRedux.connect;
var Provider = _ReactRedux.Provider;
var _Redux = Redux;
var createStore = _Redux.createStore;
var applyMiddleware = _Redux.applyMiddleware;
var combineReducers = _Redux.combineReducers;

//FIXME: save to local storage

var model = {
  board: [{
    id: 0,
    piece: null
  }, {
    id: 1,
    piece: null
  }, {
    id: 2,
    piece: null
  }, {
    id: 3,
    piece: null
  }, {
    id: 4,
    piece: null
  }, {
    id: 5,
    piece: null
  }, {
    id: 6,
    piece: null
  }, {
    id: 7,
    piece: null
  }, {
    id: 8,
    piece: null
  }],
  //TODO: DELETE MODEL.WINS
  wins: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
};
var myGameData = typeof localStorage["gamedata"] !== "undefined" ? JSON.parse(localStorage["gamedata"]) : {
  wins: 0,
  losses: 0,
  ties: 0,
  numGames: 0
};
var resetGame = function resetGame(winner) {
  return {
    type: 'RESET',
    winner: winner
  };
};

var initialChosenPiece = null;

{/*ACTIONS */}
var playPiece = function playPiece(id, piece) {
  return {
    type: 'PLACE',
    id: id,
    piece: piece
  };
};
var setNextPlayer = function setNextPlayer(player) {
  return {
    type: 'SET_NEXT_PLAYER',
    player: player
  };
};
var setPieces = function setPieces(piece) {
  var computerPiece = piece === 'X' ? 'O' : 'X';
  return {
    type: 'SET_PIECES',
    playerPiece: piece,
    computerPiece: computerPiece
  };
};

{/*REDUCERS*/}
var rootReducer = function rootReducer(state, action) {
  if (action.type === 'RESET') {
    if (action.winner === store.getState().computerPiece) {
      console.log('computer won');
      myGameData.losses++;
    } else if (action.winner === store.getState().playerPiece) {
      myGameData.wins++;
    } else if (action.winner !== store.getState().computerPiece || action.winner !== store.getState().computerPiece) {
      myGameData.ties++;
    }

    myGameData.numGames++;
    state = undefined;
  }
  return appReducer(state, action);
};
//saves the first player in case of win where the first player will go first.
var firstPlayer = function firstPlayer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'SET_NEXT_PLAYER':
      if (action.playerPiece === 'O') {
        return 'player';
      } else {
        return 'computer';
      }
    default:
      return state;
  }
};

var player = function player() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'PLACE':
      if (action.piece === store.getState().pieces.playerPiece) {
        return [].concat(state, [action.id]);
      }
      return state;
    case 'RESET':
      var emptyArray = [];
      return emptyArray;
    default:
      return state;
  }
};
var winner = function winner() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'RESET':
      if (!!action.winner) {

        return action.winner;
      } else {
        return state;
      }
    default:
      return state;
  }
};
var computer = function computer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'PLACE':
      if (action.piece === store.getState().pieces.computerPiece) {
        return [].concat(state, [action.id]);
      }
      return state;
    case 'RESET':
      var emptyArray = [];
      return emptyArray;
    default:
      return state;
  }
};
var piece = function piece(state, action) {
  switch (action.type) {

    case 'PLACE':
      if (!state.piece && state.id === action.id) {
        return {
          id: state.id,
          piece: action.piece
        };
      }
      return state;
    default:
      return state;
  }
};
var pieces = function pieces() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'SET_PIECES':
      /*return {
          ...state
          ...action
      };
      */
      return state;
    case 'RESET':
      var emptyObj = {};
      return emptyObj;
    default:
      return state;
  }
};
var board = function board() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? model.board : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'PLACE':
      return state.map(function (p) {
        return piece(p, action);
      });
    case 'RESET':
      return model.board;
    default:
      return state;
  }
};
var currentPlayer = function currentPlayer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'SET_NEXT_PLAYER':
      return action.player;
    /*case 'RESET':
       !!store.getState().winner ? store.
       */
    default:
      return state;
  }
};
var checkWin = function checkWin() {
  var player = store.getState().firstPlayer;
  var board = store.getState().board;

  function check(a, b, c) {
    var joins = [a, b, c].join('');
    return !!joins.match(/(XXX|OOO)/gi);
  }

  if (check(board[0].piece, board[1].piece, board[2].piece)) {
    store.dispatch(resetGame(board[0].piece));
  }
  if (check(board[3].piece, board[4].piece, board[5].piece)) {
    highlightWinningCombos(3, 4, 5);
    store.dispatch(resetGame(board[3].piece));
  }
  if (check(board[6].piece, board[7].piece, board[8].piece)) {
    store.dispatch(resetGame(board[6].piece));
  }
  if (check(board[0].piece, board[3].piece, board[6].piece)) {
    store.dispatch(resetGame(board[0].piece));
  }
  if (check(board[1].piece, board[4].piece, board[7].piece)) {
    store.dispatch(resetGame(board[1].piece));
  }
  if (check(board[2].piece, board[5].piece, board[8].piece)) {
    store.dispatch(resetGame(board[2].piece));
  }
  if (check(board[0].piece, board[4].piece, board[8].piece)) {
    store.dispatch(resetGame(board[0].piece));
  }
  if (check(board[2].piece, board[4].piece, board[6].piece)) {
    store.dispatch(resetGame(board[2].piece));
  } else {
    var tie = board.every(function (item) {
      if (item.piece) {

        return true;
      }
    });
    if (tie) {

      store.dispatch(resetGame('tie'));
      store.dispatch(setNextPlayer(player));
    }
  }
};

var Board = function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Board.prototype.render = function render() {
    var rows = [];
    //FIXME!!!!!!!
    {
      model.board.map(function (item) {
        rows.push(React.createElement(Square, _extends({
          key: item.id,
          handleClick: place,
          id: item.id
        }, item)));
      });
    }
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "container board-container" },
        rows
      )
    );
  };

  return Board;
}(React.Component);

var Square = function Square(_ref) {
  var id = _ref.id;
  var piece = _ref.piece;
  var handleClick = _ref.handleClick;
  return React.createElement(
    "div",
    { className: "card hoverable valign-wrapper",

      onClick: function onClick() {
        handleClick(id);
      } },
    React.createElement(
      "span",
      { className: "valign" },
      piece
    )
  );
};

//TODO: HOOK PLAYER HISTORY TO STORE
var PlayerHistory = function PlayerHistory(_ref2) {
  var wins = _ref2.wins;
  var losses = _ref2.losses;
  var ties = _ref2.ties;
  return React.createElement(
    "ul",
    { id: "dropdownData", className: "dropdown-content" },
    React.createElement(
      "li",
      null,
      "Wins: ",
      React.createElement(
        "span",
        { className: "unit" },
        wins
      )
    ),
    React.createElement("li", { className: "divider" }),
    React.createElement(
      "li",
      null,
      "Losses: ",
      React.createElement(
        "span",
        { className: "unit" },
        losses
      )
    ),
    React.createElement("li", { className: "divider" }),
    React.createElement(
      "li",
      null,
      "Ties: ",
      React.createElement(
        "span",
        { className: "unit" },
        ties
      )
    ),
    React.createElement("li", { className: "divider" })
  );
};

var StartGameButton = function StartGameButton(_ref3) {
  var beginGame = _ref3.beginGame;
  var gameData = _ref3.gameData;
  return React.createElement(
    "div",
    { className: "fixed-action-btn right" },
    React.createElement(
      "a",
      { className: "btn-floating btn-large menu" },
      React.createElement(
        "i",
        { className: "large material-icons" },
        "add"
      )
    ),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { className: "dropdown-button btn-floating btn-large waves-circle waves-light",
            href: "#",
            "data-activates": "dropdownData",
            "data-hover": "true"
          },
          "DATA"
        ),
        React.createElement(PlayerHistory, gameData)
      ),
      React.createElement(
        "li",
        { className: "btn-floating btn-large waves-circle waves-light " },
        React.createElement(
          "a",
          {
            href: "#",
            onClick: function onClick() {
              store.dispatch({ type: 'RESET' });
            }
          },
          React.createElement(
            "i",
            { className: "material-icons" },
            "refresh"
          )
        )
      ),
      React.createElement(
        "li",
        { onClick: function onClick() {
            beginGame('O');
          }
        },
        React.createElement(
          "a",
          { className: "btn-floating red waves-effect waves-light waves-red" },
          "O"
        )
      ),
      React.createElement(
        "li",
        { onClick: function onClick() {
            beginGame('X');
          }
        },
        React.createElement(
          "a",
          { className: "btn-floating blue waves-effect waves-light waves-blue" },
          "X"
        )
      )
    )
  );
};
var startGame = function startGame(id) {
  store.dispatch(setPieces(id));
  initialChosenPiece = id;
  var playerChosenPiece = store.getState().pieces.playerPiece;
  var computerPiece = store.getState().pieces.computerPiece;
  if (computerPiece === 'O') {
    store.dispatch(setNextPlayer('computer'));
    Materialize.toast('COMPUTER GOES FIRST', 1500, '', computerPlay);
    return;
  }
  store.dispatch(setNextPlayer('player'));
  Materialize.toast('GO FIRST', 2000);
  return;
};
var computerPlay = function computerPlay() {
  var preferredPlay = [4, 0, 8, 2, 6, 3, 1, 7, 5];
  var computerPiece = store.getState().pieces.computerPiece;
  var computer = store.getState().computer;
  var player = store.getState().player;
  var allowedPlays = [];
  var playedWinningMove = false;
  var playedBlockingMove = false;
  preferredPlay.filter(function (item) {
    if (player.indexOf(item) === -1 && computer.indexOf(item) === -1) {
      allowedPlays.push(item);
    }
  });

  var possibleWinCombos = [];
  model.wins.forEach(function (winCombo) {
    var count = 0;

    winCombo.forEach(function (w) {
      if (computer.indexOf(w) !== -1) {
        count++;
      }
    });
    if (count === 2) {
      possibleWinCombos.push(winCombo);
    }
  });

  possibleWinCombos.forEach(function (combo) {
    var emptySpaces = 0;
    var emptySpaceLocation = '';

    combo.forEach(function (c) {
      if (player.indexOf(c) === -1 && computer.indexOf(c) === -1) {
        emptySpaces++;
        emptySpaceLocation = c;
      }
    });
    if (emptySpaces === 1) {
      playedWinningMove = true;
      store.dispatch(playPiece(emptySpaceLocation, computerPiece));
      store.dispatch(setNextPlayer('player'));
      checkWin();
      return;
    }
  });

  var possibleBlockCombos = [];
  model.wins.forEach(function (blockCombo, i) {
    var count = 0;

    blockCombo.forEach(function (w) {
      if (player.indexOf(w) !== -1) {
        count++;
      }
    });
    if (count === 2) {
      possibleBlockCombos.push(blockCombo);
    }
  });

  possibleBlockCombos.forEach(function (combo) {
    var emptySpaces = 0;
    var emptySpaceLocation = '';

    combo.forEach(function (c) {
      if (player.indexOf(c) === -1 && computer.indexOf(c) === -1) {
        emptySpaces++;
        emptySpaceLocation = c;
      }
      if (emptySpaces === 1 && !playedWinningMove) {
        playedBlockingMove = true;
        store.dispatch(playPiece(emptySpaceLocation, computerPiece));
        store.dispatch(setNextPlayer('player'));
        checkWin();
        return;
      }
    });
  });

  if (!playedWinningMove && !playedBlockingMove) {
    store.dispatch(playPiece(allowedPlays[0], computerPiece));
    store.dispatch(setNextPlayer('player'));
    checkWin();
    return;
  }
};

var place = function place(id) {
  var computerPiece = store.getState().pieces.computerPiece;
  var playerPiece = store.getState().pieces.playerPiece;
  var board = store.getState().board;
  var currentPlayer = store.getState().currentPlayer;

  if (currentPlayer === 'player') {

    store.dispatch(playPiece(id, playerPiece));
    checkWin();
    store.dispatch(setNextPlayer('player'));
    computerPlay();{/* Materialize.toast('spot already taken ' , 2000) */}
  }
};

var App = function App() {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(Board, null)
    ),
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(StartGameButton, {
        gameData: myGameData,
        beginGame: startGame
      })
    )
  );
};

ReactDOM.render(React.createElement(
  Provider,
  { store: store },
  React.createElement(App, null)
), document.getElementById('root'));

var appReducer = combineReducers({
  board: board,
  currentPlayer: currentPlayer,
  pieces: pieces,
  player: player,
  computer: computer,
  winner: winner,
  firstPlayer: firstPlayer

});

var store = createStore(rootReducer, '', window.devToolsExtension ? window.devToolsExtension() : undefined);

$('.dropdown-button').dropdown({
  inDuration: 300,
  outDuration: 225,
  constrain_width: false, // Does not change width of dropdown to that of the activator
  hover: true, // Activate on hover
  gutter: 0, // Spacing from edge
  belowOrigin: false, // Displays dropdown below the button
  alignment: 'left' // Displays dropdown with edge aligned to the left of button
});