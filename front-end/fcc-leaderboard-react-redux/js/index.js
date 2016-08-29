'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//NOTE: CANNOT GET REDUX-THUNK TO WORK!!! I made a function instead of dispatching a redux thunk
//CONSTANTS
var apiroot = 'http://fcctop100.herokuapp.com/api/fccusers/top/';
var _Redux = Redux;
var createStore = _Redux.createStore;
var applyMiddleware = _Redux.applyMiddleware;
var _ReactRedux = ReactRedux;
var Provider = _ReactRedux.Provider;
var connect = _ReactRedux.connect;

var ReduxThunk = window.ReduxThunk.default;
// ACTIONS
function requestUsers(url) {
  return {
    type: 'REQUEST_USERS',
    url: url
  };
}

function receiveUsers(url, json) {
  return {
    type: 'RECEIVE_USERS',
    url: url,
    json: json,
    data: json.map(function (child) {
      return child;
    }),
    received_at: Date.now()
  };
}
//REDUCERS
var alltime = function alltime() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {
    users: [],
    sortedBy: 'alltime'
  } : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'REQUEST_USERS':
      return _extends({}, state, {
        isFetching: true,
        didValidate: false
      });
    case 'RECEIVE_USERS':
      return _extends({}, state, {
        isFetching: false,
        didValidate: false,
        users: action.data,
        received_at: action.received_at
      });
    default:
      return state;
  }
};
//PROBLEM???
function fetchUsers(url) {
  console.log('hello fetch users 1');

  console.log('hello fetch users dispatch');
  store.dispatch(requestUsers(url));
  return fetch('' + url).then(function (response) {
    return response.json();
  }).then(function (json) {
    return store.dispatch(receiveUsers(url, json));
  });
}

var TopTable = function (_React$Component) {
  _inherits(TopTable, _React$Component);

  function TopTable() {
    _classCallCheck(this, TopTable);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  TopTable.prototype.componentDidMount = function componentDidMount() {
    var url = apiroot + 'alltime';
    console.log(url);

    fetchUsers(url);
  };

  TopTable.prototype.render = function render() {
    return React.createElement(
      'table',
      { className: 'table' },
      React.createElement(
        'thead',
        null,
        React.createElement(Heading, null)
      ),
      React.createElement(UserTable, null)
    );
  };

  return TopTable;
}(React.Component);

var User = function User(_ref) {
  var user = _ref.user;
  var index = _ref.index;

  return React.createElement(
    'tr',
    { className: 'row' },
    React.createElement(
      'td',
      null,
      index
    ),
    React.createElement(
      'td',
      null,
      React.createElement(
        'a',
        { href: "http://www.freecodecamp.com/" + user.username },
        React.createElement('img', {
          style: { height: '50px' },
          target: '_blank',
          src: user.img
        }),
        ' ',
        user.username
      )
    ),
    React.createElement(
      'td',
      null,
      user.alltime
    ),
    React.createElement(
      'td',
      null,
      user.recent
    )
  );
};

var UserTable_ = function UserTable_(_ref2) {
  var users = _ref2.users;

  var rows = [];
  //FIXME
  if (!!users) {
    users.forEach(function (user, index) {
      rows.push(React.createElement(User, {
        user: user,
        index: index + 1
      }));
    });
  }

  return React.createElement(
    'tbody',
    null,
    rows
  );
};
var mapStateToProps_UserTable_ = function mapStateToProps_UserTable_(state) {
  return {
    users: state.users
  };
};
var UserTable = connect(mapStateToProps_UserTable_, '')(UserTable_);
var Heading = function Heading() {

  return React.createElement(
    'tr',
    { className: 'row' },
    React.createElement(
      'th',
      null,
      '#'
    ),
    React.createElement(
      'th',
      null,
      'User'
    ),
    React.createElement(
      'th',
      { id: 'alltime',
        className: 'sort alltime',
        onClick: function onClick() {
          return fetchUsers(apiroot + 'alltime');
        }
      },
      'Alltime'
    ),
    React.createElement(
      'th',
      { id: 'recent', className: 'sort recent',
        onClick: function onClick() {
          return fetchUsers(apiroot + 'recent');
        }
      },
      'Recent'
    )
  );
};

var store = createStore(alltime, applyMiddleware(ReduxThunk), window.devToolsExtension ? window.devToolsExtension() : undefined);

var render = function render() {
  ReactDOM.render(React.createElement(
    Provider,
    { store: store },
    React.createElement(TopTable, null)
  ), document.getElementById('root'));
};

render();