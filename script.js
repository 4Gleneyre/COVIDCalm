var quoteAuthors = [
  "President Franklin Roosevelt",
  "Erma Bombeck",
  "Marie Curie",
  "",
  "Baz Luhrmann",
  "Matt Charman",
  "Bob Marley",
  "Angela Lansbury",
  "Vivian Greene",
  "Sting",
  "Rolling Stones",
  "Baloo the bear",
  "Johann Wolfgang von Goethe",
  "Friedrich Nietzsche",
  "Eckhart Tolle"
  ];
var quotes = [
  "The only thing we have to fear is fear itself",
  "Worry is like a rocking chair: It gives you something to do but never gets you anywhere",
  "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less",
  "Keep calm and carry on",
  "A life lived in fear is a life half lived",
  "Aren't you worried?  Would that help?",
  "Don't worry 'bout a thing, cause every little thing's gonna be alright.",
  "Better to be busy than to be busy worrying",
  "Life isn't about waiting for the storm to pass. It's about learning how to dance in the rain.",
  "When the world is running down, you make the best of what's still around.",
  "You can't always get what you want. But if you try sometime, you'll find, you get what you need",
  "The simple bare necessities. Forget about your worries and your strife ... The bare necessities of life will come to you",
  "Let everyone sweep in front of his own door, and the whole world will be clean",
  "That which does not kill us, makes us stronger",
  "Life will give you whatever experience is most helpful for the evolution of your consciousness"
  ];
function startSession() {
  var pulser = document.getElementById("breath-pulser");
  pulser.style.animationPlayState = "running";
  
  //total 60 second session
  changeQuote();
  for (i=0; i<5; i++) {
    setTimeout(changeQuote, i*10000);
  }
}

function changeQuote() {
  var quote = document.getElementById("quote");
  var quoteAuthor = document.getElementById("quote-author");

  var randomNumber = Math.floor(Math.random() * (quotes.length-1))
  
  var randomQuote = quotes[randomNumber];
  if (randomQuote.length >= 75) {quote.style.fontSize="1.25rem";} else {quote.style.fontSize="1.5rem";}
  quote.innerHTML = "\"" + randomQuote + "\"";
  
  var randomAuthor = quoteAuthors[randomNumber];
  if (quoteAuthors != "") {
    quoteAuthor.innerHTML = "- " + randomAuthor;
  }

  //setTimeout(, i*10000);
}