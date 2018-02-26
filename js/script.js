// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//generate a random number
//use random number to retrieve a quote that is assigned to a particular number or element in an array
//of strings or key/value pairs
//print value at random number key and print other values stored at key?
//testing

var quoteObject;
var messageToScreen = '';
var quotes = [
{
quote: "I am more than enough. I am great and so are you!",
source: "Erika",
citation: "Amazing Quotes",
year:  2018
},
{
quote: "You miss 100% of the shots you don’t take.",
source: "Wayne Gretzky",
year:  1992,
tags: "Sports"
},
{
quote: "Every strike brings me closer to the next home run.",
source: "Babe Ruth",
tags: "Sports"
},
{
quote: "Life isn't about getting and having, it's about giving and being.",
source: "Kevin Kruse",
year:  2002
},
{
quote: "We become what we think about.",
source: "Earl Nightingale",
citation: "Motivational Quotes",
tags: "Self help"
},
{
quote: "Your time is limited, so don’t waste it living someone else’s life.",
source: "Steve Jobs",
year:  2008,
tags: "Tech"
},
{
quote: "I am not a product of my circumstances. I am a product of my decisions.",
source: "Stephen Covey",
year:  1994
},
{
quote: "People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.",
source: "Zig Ziglar",
year:  1998,
citation: "Personal Development Training"
}
]
//generates random number from 0 to 7 and loops through array to find quoteObject that matches random index number.
function getRandomQuote() {
randomNumber = Math.floor(Math.random() * 8);
  for(var i = 0; i < quotes.length; i++) {
    if(i === randomNumber) {
      quoteObject = quotes[i];
      return quoteObject;
    }
  }
}

//calls quote object and grabs each key value and displays all available object information/key values to the user.
function printQuote() {
  document.getElementById('quote-box').innerHTML= messageToScreen;
  getRandomQuote();
  // messageToScreen = '<h1 class="quote">' + quoteObject.quote + '<h1>';
  // messageToScreen += '<h2 class="source">' + '<span>' + quoteObject.source + '</span>';
  messageToScreen = '<p class="quote">' + quoteObject.quote + '</p>';
  messageToScreen += '<p class="source">' + quoteObject.source + '</span>';
  if(quoteObject.hasOwnProperty('citation')) {
    messageToScreen += '<span class="citation">' + quoteObject.citation + '</span>';
  };
  if(quoteObject.hasOwnProperty('year')) {
  messageToScreen += '<span class="year">' + quoteObject.year + '</span>';
  };
  if(quoteObject.hasOwnProperty('tags')) {
  messageToScreen += '<span class="year">' + quoteObject.tags + '</span>';
  };
  messageToScreen += '</p>';
  return messageToScreen;
  }
//   <p class="quote">You can do anything but not everything</p>
//   <p class="source">David Allen<span class="citation">Making It All Work</span><span class="year">2009</span></p>
// </div>

printQuote();
