'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//NOTE: HAVING TROUBLE WITH TABLES. MAYBE TRY MARKDOWN HERE

var rawText = '# Vote Trump!\n  *** \n## Make America Great Again ' + '\n### h3\n#### h4\n##### h5\n###### h6' + '\nParagraphs are separated\nby a blank line.' + '\n> Blockquote: Do or do not, there is no try' + '\n\nLeave 2 spaces at the end of a line to do a  \nline break\n' + '\n ### Text attributes \n  \n *italic*, **bold**, `monospace`, ~~strikethrough~~, `inline code` .\n' + ' ```javascript \n var s = "JavaScript syntax highlighting";\n alert(s);``` \n' + '\n unordered lists can be listed using *, -, or +  ' + "\n### Tables  " + "\nColons can be used to align columns.  \n" + "\n| Tables        | Are           | Cool  |  " + "\n| ------------- |:-------------:| -----:|  " + "\n| col 3 is      | right-aligned | $1600 |  " + "\n| col 2 is      | centered      |   $12 |  " + "\n| zebra stripes | are neat      |    $1 |  " + "\n --- " + "\nThere must be at least 3 dashes separating each header cell. " + "\nThe outer pipes (|) are optional, and you don't need to make the " + "raw Markdown line up prettily. You can also use inline Markdown. \n" + "\nMarkdown | Less | Pretty  " + "\n--- | --- | ---  " + "\n*Still* | `renders` | **nicely**  " + "\n1 | 2 | 3  " + '\n### Numbered list:  ' + 'number order does not matter, just throw in some numbers \n' + '\n #### Favorite Food \n8. Rack of Lamb\n5. Ribeye\n3. Chicken Noodle Soup\n' + '\n#### Shopping list \n\n- Bacon Chicken Wraps\n * Chicken\n + Brown Sugar\n - Chili Powder\n - Bacon\n  \n- Salsa\n- Broccoli\n \n- Eggs\n\n* Lentils\n' + '\n[My Blog](http://joechimienti.wordpress.com) \n' + '\n#### Images\nInline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")\n#### Horizontal Rule\n Three or more *, _, -\n___' + "\n #### New line" + "\n not native in markdown but can use inline html as `&nbsp`";

var _ReactRedux = ReactRedux;
var Provider = _ReactRedux.Provider;
var connect = _ReactRedux.connect;
var _Redux = Redux;
var createStore = _Redux.createStore;
var applyMiddleware = _Redux.applyMiddleware;

var update = function update(text) {
  return {
    type: 'UPDATE',
    text: text
  };
};
var rawMarkup = function rawMarkup() {
  return {
    __html: marked(store.getState().inputText, {
      sanitize: true
    })
  };
};
//REDUCERS
var inputText = function inputText() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? rawText : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'UPDATE':
      return action.text;
    default:
      return state;
  }
};
//PRESENTATIONAL COMPONENTS

var MarkdownPreviewer_ = function (_React$Component) {
  _inherits(MarkdownPreviewer_, _React$Component);

  function MarkdownPreviewer_(props) {
    _classCallCheck(this, MarkdownPreviewer_);

    return _possibleConstructorReturn(this, _React$Component.call(this));
  }

  MarkdownPreviewer_.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'container-fluid' },
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'h1',
          { className: 'title' },
          'Markdown Previewer'
        )
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(CopyClipboard, null),
        React.createElement(CopyText, null)
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement('textarea', {
          className: 'col-xs-6 col-xs-md-4',
          onChange: function onChange(e) {
            store.dispatch(update(e.target.value));
          },
          defaultValue: rawText
        }),
        React.createElement('div', { className: 'col-xs-6 col-xs-md-8',
          dangerouslySetInnerHTML: rawMarkup()
        })
      )
    );
  };

  return MarkdownPreviewer_;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    rawText: state.inputText
  };
};
var CopyClipboard = function CopyClipboard() {
  return React.createElement(
    'button',
    {
      className: 'btn',
      onClick: function onClick() {
        return showClipboard(store.getState().inputText);
      }
    },
    'Copy Text'
  );
};
var CopyText = function CopyText() {
  return React.createElement(
    'button',
    {
      className: 'btn copyText',
      onClick: function onClick() {
        return showClipboard(marked(store.getState().inputText));
      }
    },
    'Copy HTML'
  );
};

function showClipboard(text) {
  window.prompt('CONTROL C TO COPY', text);
}
var MarkdownPreviewer = connect(mapStateToProps)(MarkdownPreviewer_);
var app = Redux.combineReducers({
  inputText: inputText
});

var store = createStore(app, '', window.devToolsExtension ? window.devToolsExtension() : undefined);
ReactDOM.render(React.createElement(
  Provider,
  { store: store },
  React.createElement(MarkdownPreviewer, null)
), document.querySelector('#root'));