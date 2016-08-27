'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactRedux = ReactRedux;
var connect = _ReactRedux.connect;
var Provider = _ReactRedux.Provider;
var _Redux = Redux;
var createStore = _Redux.createStore;
var applyMiddleware = _Redux.applyMiddleware;
var combineReducers = _Redux.combineReducers;

var addTime = function addTime(time, value) {
  console.log(time, value);
  return {
    type: 'CHANGE_CLOCK',
    time: time,
    value: value
  };
};
var startTimer = function startTimer() {
  return {
    type: 'START'
  };
};
var _resetTimer = function _resetTimer() {
  return {
    type: 'RESET_TIMER'
  };
};
var countdown = function countdown(session) {
  return {
    type: 'COUNTDOWN',
    session: session
  };
};
var toggleSession = function toggleSession() {
  return {
    type: 'TOGGLE'
  };
};
function updateTimer() {
  var updater = function updater() {
    var session = store.getState().activeSession;
    if (!store.getState().isRunning) {
      return clearInterval(interval);
    } else {
      if (session === 'study' && store.getState().studyTimeRemaining < 1) {
        return store.dispatch(toggleSession());
      }if (session === 'break' && store.getState().breakTimeRemaining < 1) {
        return store.dispatch(toggleSession());
      }
      store.dispatch(countdown(activeSession));
    }
  };
  var interval = setInterval(updater, 1000);
}
var studyMinutes = function studyMinutes() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 25 : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'CHANGE_CLOCK':
      if (!!state) {
        if (action.time === 'study') {
          return action.value === 1 ? state + 1 : state - 1;
        }
        return state;
      } else if (state === 0 && action.value === 1) {
        return 1;
      }
      return state;
    default:
      return state;
  }
};
var studyTimeRemaining = function studyTimeRemaining() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 1500 : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'START':
      return store.getState().studyMinutes * 60;
    case 'COUNTDOWN':
      if (store.getState().activeSession === 'study') {
        while (state) {
          return state - 1;
        }
        return 0;
      }
      return state;
    case 'TOGGLE':
      if (store.getState().activeSession === 'study') {
        return store.getState().studyMinutes * 60;
      }
      return state;
    default:
      return state;
  }
};
var breakMinutes = function breakMinutes() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 5 : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'CHANGE_CLOCK':
      if (!!state) {
        if (action.time === 'break') {
          return action.value === 1 ? state + 1 : state - 1;
        }
        return state;
      } else if (state === 0 && action.value === 1) {
        return 1;
      }

      return state;
    default:
      return state;
  }
};
var breakTimeRemaining = function breakTimeRemaining() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 300 : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'START':
      return store.getState().breakMinutes * 60;
    case 'COUNTDOWN':
      if (store.getState().activeSession === 'break') {

        while (state) {
          return state - 1;
        }
        return 0; // TODO CHANGE TO STARTING BREAK TIME
      }
      return state;
    case 'TOGGLE':
      if (store.getState().activeSession === 'break') {

        return store.getState().breakMinutes * 60;
      }
      return state;
    default:
      return state;
  }
};
var isRunning = function isRunning() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'START':
      return true;
    default:
      return state;
  }
};
var activeSession = function activeSession() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 'study' : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'TOGGLE':
      var newState = state == 'study' ? 'break' : 'study';
      return newState;
    default:
      return state;
  }
};

var Card_ = function (_React$Component) {
  _inherits(Card_, _React$Component);

  function Card_(props) {
    _classCallCheck(this, Card_);

    return _possibleConstructorReturn(this, _React$Component.call(this));
  }

  Card_.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'card material-orange-light' },
      React.createElement(Controller, null),
      React.createElement(Status, null)
    );
  };

  return Card_;
}(React.Component);

var mapStateToProps_3 = function mapStateToProps_3(_ref) {
  var activeSession = _ref.activeSession;

  return {
    activeSession: store.getState().activeSession
  };
};
var Card = connect(mapStateToProps_3)(Card_);
var Controller_ = function Controller_(_ref2) {
  var breakMinutes = _ref2.breakMinutes;
  var studyMinutes = _ref2.studyMinutes;
  var changeTime = _ref2.changeTime;
  var studyTimeRemaining = _ref2.studyTimeRemaining;
  var breakTimeRemaining = _ref2.breakTimeRemaining;
  var isRunning = _ref2.isRunning;
  var activeSession = _ref2.activeSession;

  var studyText = !!isRunning && activeSession === 'study' ? studyTimeRemaining + ' seconds' : 'Study minutes: ' + studyMinutes;
  var breakText = !!isRunning && activeSession === "break" ? breakTimeRemaining + ' seconds' : 'Break minutes: ' + breakMinutes;
  return React.createElement(
    'div',
    { className: 'container-fluid material-orange' },
    React.createElement(MusicButton, null),
    React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'div',
        { className: 'col col-sm-3' },
        React.createElement(
          'h4',
          null,
          studyText
        ),
        React.createElement(
          Button,
          { onClick: true,
            onClick: changeTime.bind(undefined, 'study', 1)
          },
          '+'
        ),
        React.createElement(
          Button,
          {
            onClick: changeTime.bind(undefined, 'study', -1)
          },
          '-'
        ),
        React.createElement(
          'h4',
          null,
          breakText
        ),
        React.createElement(
          Button,
          {

            onClick: changeTime.bind(undefined, 'break', 1) },
          '+'
        ),
        React.createElement(
          Button,
          {
            onClick: changeTime.bind(undefined, 'break', -1) },
          '-'
        )
      )
    )
  );
};
var mapStateToProps_1 = function mapStateToProps_1(state) {
  return {
    studyTimeRemaining: state.studyTimeRemaining,
    breakTimeRemaining: state.breakTimeRemaining,
    studyMinutes: state.studyMinutes,
    breakMinutes: state.breakMinutes,
    isRunning: state.isRunning,
    activeSession: state.activeSession
  };
};
var mapDispatchToProps_1 = function mapDispatchToProps_1(dispatch) {
  return {
    changeTime: function changeTime(time, value) {
      return dispatch(addTime(time, value));
    }

  };
};
var Button_ = function Button_(_ref3) {
  var children = _ref3.children;
  var _onClick = _ref3.onClick;
  var isTimerRunning = _ref3.isTimerRunning;
  return React.createElement(
    'button',
    {
      className: 'btn material-red',
      hidden: !!isTimerRunning ? true : false,
      onClick: function onClick(e) {
        e.preventDefault();
        _onClick();
      }
    },
    children
  );
};
var mapStateToProps_button = function mapStateToProps_button(state) {
  return {
    isTimerRunning: state.isRunning
  };
};
var Button = connect(mapStateToProps_button)(Button_);
var Controller = connect(mapStateToProps_1, mapDispatchToProps_1)(Controller_);

var Status_ = function Status_(_ref4) {
  var resetTimer = _ref4.resetTimer;
  var activeSession = _ref4.activeSession;
  var isRunning = _ref4.isRunning;

  var text = !!isRunning ? 'STOP' : 'START';
  return React.createElement(
    'div',
    { className: 'row' },
    React.createElement(
      'button',
      {
        className: 'btn startGame material-red',
        onClick: function onClick() {
          !isRunning ? store.dispatch(startTimer()) : store.dispatch(resetTimer());
          updateTimer();
        }
      },
      '' + text
    )
  );
};
var mapStateToProps_status = function mapStateToProps_status(state) {
  return {
    activeSession: state.activeSession,
    isRunning: state.isRunning
  };
};
var mapDispatchToProps_2 = function mapDispatchToProps_2(dispatch) {
  return {
    resetTimer: function resetTimer() {
      return dispatch(_resetTimer());
    }
  };
};
var Status = connect(mapStateToProps_status, mapDispatchToProps_2)(Status_);

var MusicButton = function MusicButton() {

  var playlist_url = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/45129349/favorites&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false';

  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { type: 'button',
        className: 'btn music-button',
        'data-toggle': 'modal',
        'data-target': '#music'
      },
      React.createElement(
        'i',
        { className: 'material-icons' },
        'play_arrow'
      )
    ),
    React.createElement(
      'div',
      { className: 'modal fade',
        id: 'music'
      },
      React.createElement(
        'div',
        { className: 'modal-body' },
        React.createElement('iframe', { className: 'music',
          width: '100%',
          scrolling: 'no',
          frameborder: 'no',
          src: '' + playlist_url
        })
      )
    )
  );
};

var Header = function Header() {
  return React.createElement(
    'div',
    { className: 'container-fluid title' },
    React.createElement('img', {
      className: 'cols-xs-12',
      src: 'http://fontmeme.com/embed.php?text=Pomdoro%20Timer&name=True Lies.ttf&size=100&style_color=15155E',
      alt: 'Pomdoro Timer' })
  );
};

var app = combineReducers({
  studyMinutes: studyMinutes,
  breakMinutes: breakMinutes,
  isRunning: isRunning,
  activeSession: activeSession,
  studyTimeRemaining: studyTimeRemaining,
  breakTimeRemaining: breakTimeRemaining
});
var rootReducer = function rootReducer(state, action) {
  if (action.type === 'RESET_TIMER') {
    console.log('reset timer called');
    state = undefined;
  }
  return app(state, action);
};
var App = function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(Header, null),
    React.createElement(Card, null)
  );
};
var store = createStore(rootReducer, '', window.devToolsExtension ? window.devToolsExtension() : undefined);
ReactDOM.render(React.createElement(
  Provider,
  { store: store },
  React.createElement(App, null)
), document.getElementById('root'));
window.onresize = resizeWindow;
function resizeWindow() {
  var w = window.innerWidth;
  var h = window.innerHeight;

  $('#root').height(h);
  $('#root').width(w);
}

resizeWindow();