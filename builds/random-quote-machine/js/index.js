$(document).ready(function() {
    changeColor();
    newQuote();

  });

function changeColor() {
  var bgcolorlist = ["#DFDFFF", "#FFFFBF", "#80FF80", "#EAEAFF", "#C9FFA8", "#F7F7F7", "#DDDD00", '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];

  var randomColor = bgcolorlist[Math.floor(Math.random() * bgcolorlist.length)];
 $("body").css("backgroundColor",randomColor);
 $("#getNewQuote").css("backgroundColor",randomColor);
   $("#twitterButton").css("backgroundColor",randomColor);
  
}

function newQuote() {
  var quotes = [{
      quote: ["Nobody can give you freedom. Nobody can give you equality or justice or anything. If you're a man, you take it"],
      author: ["Malcolm X"]
    }, {
      quote: ["A man is rich in proportion to the number of things he can afford to let alone"],
      author: ["Henry David Theroux"]
    }, {
      quote: ["What information consumes is rather obvious: it consumes the attention of its recipients. Hence, a wealth of information creates a poverty of attention and a need to allocate that attention efficiently among the overabundance of information sources that might consume it."],
      author: ["herbert Simon"]
    }, {
      quote: ["Reading, after a certain age, diverts the mind too much from its creative pursuits. Any man who reads too much and uses his own brain too little falls into lazy habits of thinking."],
      author: ["Albert Einstein"]
    },
    //{quote: ["Love of bustle is not industry."], author: ["Seneca"] },
    {
      quote: ["There are many things of which a wise man might wish to be ignorant."],
      author: ["RALPH WALDO EMERSON (1803 1882)"]
    }, {
      quote: ["Learning to ignore things is one of the great paths to inner peace."],
      author: ["Robert J. Sawyer, Calculating God"]
    }, {
      quote: ["An expert is a person who has made all the mistakes that can be made in a very narrow field."],
      author: ["NIELS BOHR, Danish physicist and Nobel Prize winner"]
    }, {
      quote: ["Everything popular is wrong."],
      author: ["OSCAR WILDE, The Importance of Being Earnest"]
    }, {
      quote: ["I can't give you a surefire formula for success, but I can give you a formula for failure: try to please everybody all the time."],
      author: ["HERBERT BAYARD SWOPE, American editor and journalist; first recipient of the Pulitzer Prize"]
    }, {
      quote: ["Whenever you find yourself on the side of the majority, it is time to pause and reflect."],
      author: ["Mark Twain"]
    }, {
      quote: ["Reality is merely an illusion, albeit a very persistent one ."],
      author: ["Albert Einstein"]
    }, {
      quote: ["These individuals have riches just as we say that we 'have a fever,' when really the fever has us."],
      author: ["SENECA (4 B.C. A.D. 65)"]
    }, {
      quote: ["Meetings are an addictive, highly self indulgent activity that corporations and other organizations habitually engage in only because they cannot actually masturbate."],
      author: ["DAVE BARRY, Pulitzer Prize winning American humorist"]
    }, {
      quote: ["The vision is really about empowering workers, giving them all the information about what's going on so they can do a lot more than they've done in the past."],
      author: ["Bill Gates"]
    }, {
      quote: ["Anyone who lives within their means suffers from a lack of imagination."],
      author: ["OSCAR WILDE, Irish dramatist and novelist"]
    }
  ];
  randNum = Math.floor(Math.random() * quotes.length);
  console.log(quotes[randNum].quote + " " + quotes[randNum].author);
  console.log(quotes.length);
  console.log(randNum);

  $("#quote").html(quotes[randNum].quote);
  $("#author").html(quotes[randNum].author);

  twitterText = quotes[randNum].quote.toString();
}

function tweetThis() {

  window.open('https://twitter.com/intent/tweet?text=' + twitterText);
}