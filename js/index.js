var currentQuoteIndex = 0;
var numQuotes = 0;

//Quote credit: https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#3e0da71e6c7a
var quoteDictionary = [
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill"
  },
  {
    quote: "The most common way people give up their power is by thinking they don’t have any.",
    author: "Alice Walker"
  },
  {
    author: "Robert Frost",
    quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference."
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale"
  },
  {
    quote: "Every child is an artist.  The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso"
  },
  {
    quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart"
  },
  {
    quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
    author: "Christopher Columbus"
  },
  {
    quote: "Life is what happens to you while you’re busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey"
  },
  {
    quote: "Life is 10% what happens to me and 90% of how I react to it.",
    author: "Charles Swindoll"
  }
];

function updateQuote(index) {
  $("#quote-text").text(quoteDictionary[index].quote);
  $('#quote-author').text("-" + quoteDictionary[index].author);
}

$( document ).ready(function() {
  numQuotes = quoteDictionary.length;
  
  //Initialize first quote and author to zeroth index in quote dictionary
  updateQuote(currentQuoteIndex);
  
  $( "#quote-button" ).click(function() {
    //Generate random number that is not the current number as the next quote
    var newQuoteIndex;
    do {
      newQuoteIndex = Math.floor(Math.random() * numQuotes);
    } while (newQuoteIndex == currentQuoteIndex);
    currentQuoteIndex = newQuoteIndex;
    updateQuote(currentQuoteIndex);
  });
});