'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var url = "https://www.googleapis.com/customsearch/v1";
var lastColor, lastNum;

var quotes = [{
  quote: 'We don"t rise to the level of our expectations, we fall to the level of our training.',
  author: 'Archilochos'
}, {
  quote: 'As to the Adjective: when in doubt, strike it out',
  author: 'Mark Twain'
}, {
  quote: 'There is nothing either good or bad except that thinking makes it so',
  author: 'William Shakespeare'
}, {
  quote: 'The lessons we remember are the lessons we learn the hard way',
  author: 'Seth Godin'
}, {
  quote: 'Anything worth doing is worth doing slowly',
  author: 'Mae West'
}, {
  quote: 'The things you own end up owning you. It is only after you lose everything that you are free to do anything.',
  author: 'Chuck Palahniuk '
}, {
  quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people',
  author: 'Elanor Roosevelt'
}, {
  quote: 'Service to others is the rent you pay for your room here on earth.',
  author: 'Muhammad Ali'
}, {
  quote: "Compound interest is the eighth wonder of the world. He who understands it, earns it ... he who doesn't ... pays it.",
  author: "Albert Einstein"
}, {
  quote: "Tell me and I'll forget; show me and I may remember; involve me and I'll understand",
  author: "Chinese Proverb"
}, {
  quote: "Nobody can give you freedom. Nobody can give you equality or justice or anything. If you're a man, you take it",
  author: "Malcolm X"
}, {
  quote: "A man is rich in proportion to the number of things he can afford to let alone",
  author: "Henry David Theroux"
}, {
  quote: "What information consumes is rather obvious: it consumes the attention of its recipients. Hence, a wealth of information creates a poverty of attention and a need to allocate that attention efficiently among the overabundance of information sources that might consume it.",
  author: "Herbert Simon"
}, {
  quote: "Reading, after a certain age, diverts the mind too much from its creative pursuits. Any man who reads too much and uses his own brain too little falls into lazy habits of thinking.",
  author: "Albert Einstein"
},
//{quote:  "Love of bustle is not industry." , author:  "Seneca"  },
{
  quote: "There are many things of which a wise man might wish to be ignorant.",
  author: "RALPH WALDO EMERSON (1803 1882)"
}, {
  quote: "Learning to ignore things is one of the great paths to inner peace.",
  author: "Robert J. Sawyer, Calculating God"
}, {
  quote: "An expert is a person who has made all the mistakes that can be made in a very narrow field.",
  author: "NIELS BOHR, Danish physicist and Nobel Prize winner"
}, {
  quote: "Everything popular is wrong.",
  author: "OSCAR WILDE, The Importance of Being Earnest"
}, {
  quote: "I can't give you a surefire formula for success, but I can give you a formula for failure: try to please everybody all the time.",
  author: "HERBERT BAYARD SWOPE, American editor and journalist; first recipient of the Pulitzer Prize"
}, {
  quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
  author: "Mark Twain"
}, {
  quote: "Reality is merely an illusion, albeit a very persistent one .",
  author: "Albert Einstein"
}, {
  quote: 'These individuals have riches just as we say that we "have a fever", when really the fever has us.',
  author: "SENECA (4 B.C. A.D. 65)"
}, {
  quote: "Meetings are an addictive, highly self indulgent activity that corporations and other organizations habitually engage in only because they cannot actually masturbate.",
  author: "DAVE BARRY, Pulitzer Prize winning American humorist"
}, {
  quote: "The vision is really about empowering workers, giving them all the information about what's going on so they can do a lot more than they've done in the past.",
  author: "Bill Gates"
}, {
  quote: "Anyone who lives within their means suffers from a lack of imagination.",
  author: "OSCAR WILDE, Irish dramatist and novelist"
}, {
  quote: "The reasonable man adapts himself to the world; the unreasonable one persists in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man.",
  author: "George Bernard Shaw"
}, {
  quote: "There is no way to happiness -- happiness is the way.",
  author: "Thich Nhat Hanh"
}, {
  quote: "The simple willingness to improvise is more vital, in the long run, than research.",
  author: "Rolf Potts"
}, {
  quote: "If you don’t make mistakes, you’re not working on hard enough problems. And that’s a big mistake.",
  author: "Frank Wilczek, 2004 Nobel Prize winner in physics"
}, {
  quote: "All courses of action are risky, so prudence is not in avoiding danger (it’s impossible), but calculating risk and acting decisively. Make mistakes of ambition and not mistakes of sloth. Develop the strength to do bold things, not the strength to suffer.",
  author: "Niccolo Machiavelli, The Prince"
}];

var bgcolorlist;
var randomColor;
var randNum;

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Header.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'navbar' },
      React.createElement(
        'h2',
        null,
        'Random Quote Machine'
      )
    );
  };

  return Header;
}(React.Component);

var QuoteBox = function (_React$Component2) {
  _inherits(QuoteBox, _React$Component2);

  function QuoteBox(props) {
    _classCallCheck(this, QuoteBox);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this));

    _this2.genRand = _this2.genRand.bind(_this2);
    _this2.handleTweet = _this2.handleTweet.bind(_this2);
    _this2.genRand();
    $("body").css("backgroundColor", randomColor);
    _this2.state = {
      quote: quotes[randNum].quote,
      author: quotes[randNum].author,
      randomColor: randomColor
    };

    return _this2;
  }

  QuoteBox.prototype.genRand = function genRand() {
    bgcolorlist = ["#DFDFFF", "#FFFFBF", "#80FF80", "#EAEAFF", "#C9FFA8", "#F7F7F7", "#DDDD00", '#16a085', '#27ae60', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#BDBB99', '#77B1A9', '#73A857'];
    randomColor = bgcolorlist[Math.floor(Math.random() * bgcolorlist.length)];
    randNum = Math.floor(Math.random() * quotes.length);
    lastColor = randomColor;
    lastNum = randNum;
  };

  QuoteBox.prototype.changeBackground = function changeBackground() {
    this.genRand();
    //function to ensure color and quote is changed
    if (lastColor !== this.state.randomColor && quotes[lastNum].quote !== this.state.quote) {
      /*
      would need jquery color plugin
      $('body').animate({
        background: randomColor
      }, 'slow')
      */
      //$("body").css("backgroundColor", randomColor);
      d3.select('body').transition(2000).style('background-color', randomColor);

      this.setState({
        quote: quotes[randNum].quote,
        author: quotes[randNum].author,
        randomColor: randomColor
      });
    }
  };

  QuoteBox.prototype.handleTweet = function handleTweet() {
    window.open('https://twitter.com/intent/tweet?text=' + this.state.quote);
  };

  QuoteBox.prototype.render = function render() {
    var _this3 = this;

    var style = {};
    style.height = 36;
    style.width = 36;
    var twitterImg = React.createElement('img', {
      className: 'twitterImg',
      src: 'http://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Twitter-icon.png',
      alt: 'twitter',
      style: style
    });
    return React.createElement(
      'div',
      null,
      React.createElement(Header, null),
      React.createElement(
        'div',
        { className: 'container-fluid' },
        React.createElement(
          'div',
          {
            className: 'card',
            style: {
              background: this.state.randomColor
            }
          },
          React.createElement(
            'h4',
            null,
            this.state.quote,
            ' '
          ),
          React.createElement(
            'h5',
            null,
            '-',
            this.state.author
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'button',
            { className: 'btn btn-newQuote',
              onClick: function onClick() {
                _this3.changeBackground();
              },
              style: {
                background: this.state.randomColor
              }
            },
            'New Quote!'
          ),
          React.createElement(
            'button',
            {
              className: 'btn twitter',
              onClick: this.handleTweet,
              style: {
                background: this.state.randomColor
              }
            },
            twitterImg
          )
        )
      )
    );
  };

  return QuoteBox;
}(React.Component);

ReactDOM.render(React.createElement(QuoteBox, null), document.getElementById('root'));