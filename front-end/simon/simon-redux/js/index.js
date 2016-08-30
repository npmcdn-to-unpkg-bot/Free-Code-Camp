'use strict';

var audio1 = new Audio('http://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audio2 = new Audio('http://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audio3 = new Audio('http://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audio4 = new Audio('http://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
var audioBuzzer = new Audio('https://s3-us-west-2.amazonaws.com/guylemon/Buzzer.mp3');

function beep(audio) {
  // Plays the correct audio file.
  //
  switch (audio) {
    case 'red':
      audio1.play();
      break;
    case 'green':
      audio2.play();
      break;
    case 'blue':
      audio3.play();
      break;
    case 'yellow':
      audio4.play();
      break;
    default:
      audioBuzzer.play();
      break;
  }
}

var _ReactRedux = ReactRedux;
var connect = _ReactRedux.connect;
var Provider = _ReactRedux.Provider;
var _Redux = Redux;
var createStore = _Redux.createStore;
var combineReducers = _Redux.combineReducers;
//actions

var sendPlayerChoice = function sendPlayerChoice(choice) {
  return {
    type: 'CLICK',
    choice: choice
  };
};
var newRound = function newRound(choice) {
  return {
    type: 'NEW_ROUND',
    choice: choice
  };
};
var increaseSpeed = function increaseSpeed() {
  return {
    type: 'INCREASE'
  };
};
var lightUpButton = function lightUpButton(color) {
  return {
    type: 'LIGHT_UP',
    color: color
  };
};
var removeLight = function removeLight(color) {
  return {
    type: 'REMOVE_LIGHT',
    color: color
  };
};
var displayMoves = function displayMoves() {
  return {
    type: 'START_DISPLAY'
  };
};
var stopDisplay = function stopDisplay() {
  return {
    type: 'STOP_DISPLAY'
  };
};
//reducers
var round = function round() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'NEW_ROUND':
      return state + 1;
    default:
      return state;
  }
};
var speed = function speed() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 1200 : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'INCREASE':
      return state * 1.2;
    default:
      return state;
  }
};
var computerArray = function computerArray() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'NEW_ROUND':
      return [].concat(state, [action.choice]);
    default:
      return state;
  }
};
var playerArray = function playerArray() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'CLICK':
      return [].concat(state, [action.choice]);
    case 'NEW_ROUND':
      return [];
    default:
      return state;
  }
};
var activeButton = function activeButton() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'LIGHT_UP':
      return action.color;
    case 'REMOVE_LIGHT':
      return '';
    default:
      return state;
  }
};
var buttonsActive = function buttonsActive() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'START_DISPLAY':
      return false;
    case 'STOP_DISPLAY':
      return true;
    default:
      return state;
  }
};
var startGame = function startGame() {
  if (store.getState().round === 0) {
    updateRound();
  }
};
var compareArrays = function compareArrays() {
  var computerArray = store.getState().computerArray;
  var equalArrays = store.getState().playerArray.every(function (choice, i) {
    return choice === computerArray[i];
  });
  if (!equalArrays) {
    beep();
    store.dispatch({
      type: 'RESET'
    });
  }
  if (store.getState().playerArray.length === computerArray.length || round === 0) {
    updateRound();
  }
};
var updateRound = function updateRound() {
  var random = Math.floor(Math.random() * 4);
  var colors = ['green', 'red', 'blue', 'yellow'];
  var randz = colors[random];
  switch (store.getState().round) {
    case 4:
    case 8:
    case 13:
      store.dispatch(newRound(randz));
      store.dispatch(increaseSpeed());
      break;
    case 20:
      store.dispatch({
        type: 'RESET'
      });
      break;
    default:
      store.dispatch(newRound(randz));
      break;
  }
  lightUpTiles();
  return;
};
var lightUp = function lightUp(id) {
  console.log('lightUp called, id: ', id);
  store.dispatch(lightUpButton(id));
  beep(id);
  setTimeout(remLight, store.getState().speed / 2);
};
var remLight = function remLight(id) {
  store.dispatch(removeLight(id));
};
var lightUpTiles = function lightUpTiles() {

  console.log('lightUpTiles called');
  store.dispatch(displayMoves());
  var computerArray = store.getState().computerArray;
  var i = 0;
  var interval = setInterval(function () {
    lightUp(computerArray[i]);
    i++;
    if (i >= computerArray.length) {
      clearInterval(interval);
      store.dispatch(stopDisplay());
    }
  }, store.getState().speed);
};

//presentational components

var Board = function Board() {
  return React.createElement(
    'div',
    { className: 'col-xs-8 board' },
    React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'div',
        { className: 'buttons col-xs-10' },
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(Button, { color: 'green' }),
          React.createElement(Button, { color: 'red' })
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(Controller, null)
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(Button, { color: 'yellow' }),
          React.createElement(Button, { color: 'blue' })
        )
      )
    )
  );
};
//TODO fix variable callout for new ES6 specs
var Button_ = function Button_(_ref) {
  var active = _ref.active;
  var color = _ref.color;
  var handleClick = _ref.handleClick;
  var buttonsActive = _ref.buttonsActive;

  var klass = active ? 'btn-active btn-' + color : 'btn-' + color;
  var disabled = !!buttonsActive ? false : true;
  return React.createElement('button', { className: "col-xs-5 btn btn-game " + klass,
    disabled: disabled,
    onClick: function onClick(e) {
      e.preventDefault();
      handleClick(color);
      compareArrays();
      lightUp(color);
    } });
};
var mapStateToProps_1 = function mapStateToProps_1(state, ownProps) {
  return {
    active: state.activeButton === ownProps.color,
    buttonsActive: state.buttonsActive
  };
};
//TODO: UPDATE
var mapDispatchToProps_1 = function mapDispatchToProps_1(dispatch) {
  return {
    handleClick: function handleClick(color) {
      dispatch(sendPlayerChoice(color));
    }
  };
};
var Button = connect(mapStateToProps_1, mapDispatchToProps_1)(Button_);
var GameInfo_ = function GameInfo_(_ref2) {
  var round = _ref2.round;
  return React.createElement(
    'div',
    { className: 'gameInfo' },
    React.createElement(
      'p',
      null,
      round
    )
  );
};
var mapStateToProps_2 = function mapStateToProps_2(state) {
  return {
    round: state.round
  };
};
var GameInfo = connect(mapStateToProps_2, '')(GameInfo_);
var Controller = function Controller() {
  return React.createElement(
    'div',
    { className: 'controller col-xs-3' },
    React.createElement(
      'div',
      { className: 'row' },
      React.createElement(GameInfo, null)
    ),
    React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'h4',
        null,
        'Simon'
      )
    ),
    React.createElement(
      'div',
      { className: 'row' },
      React.createElement('button', { className: 'btn btn-start',
        onClick: startGame
      })
    )
  );
};
var app = combineReducers({
  round: round,
  speed: speed,
  computerArray: computerArray,
  playerArray: playerArray,
  activeButton: activeButton,
  buttonsActive: buttonsActive
});
var rootReducer = function rootReducer(state, action) {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return app(state, action);
};
var store = createStore(rootReducer, '', window.devToolsExtension ? window.devToolsExtension() : undefined);

ReactDOM.render(React.createElement(
  Provider,
  { store: store },
  React.createElement(Board, null)
), document.querySelector('#root'));