var breatheStatus = "Breathe out...";
var pulser = document.getElementById("breath-pulser");
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
  "Eckhart Tolle"];
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
  "Life will give you whatever experience is most helpful for the evolution of your consciousness"];

var quote = document.getElementById("quote");
var quoteAuthor = document.getElementById("quote-author");
var breathe = document.getElementById("breathe");

function startSession() {
  pulser.style.animation = "10s infinite pulse";
  breathe.style.animation = "fadeInUp 1s";
  quote.style.animation = "fadeInUp 1s";
  quoteAuthor.style.animation = "fadeInUp 1s";

  changeQuote();
  for (i=0; i<5; i++) {
    window.setTimeout(changeQuote, i*10000);
  }
  for (i = 0; i < 13; i++) {
    window.setTimeout(changeBreathe, i*5000); //One thing - is it possible for you to say breathe in during the first 4 seconds then breathe out for the next 6 seconds?
  }
  window.setTimeout(function() {pulser.style.animation = "5s ease-in-out infinite idle"}, 60000);
  window.setTimeout(function() breathe.innerHTML = "Great job!  You're done!", 60000)
}
function changeBreathe() {
  if (breatheStatus.localeCompare("Breathe in...") == 0) {
    breatheStatus = "Breathe out...";
  } else {
    breatheStatus = "Breathe in...";
  }
  breathe.innerHTML = breatheStatus;
}
function changeQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length-1))
  
  var randomQuote = quotes[randomNumber];
  if (randomQuote.length >= 75) {quote.style.fontSize="1.25rem";} else {quote.style.fontSize="1.5rem";}
  quote.innerHTML = "\"" + randomQuote + "\"";
  
  var randomAuthor = quoteAuthors[randomNumber];
  if (randomAuthor.localeCompare("") == 0) {
    quoteAuthor.innerHTML = "";
  }
    else {
    quoteAuthor.innerHTML = "- " + randomAuthor;
  }
  /*quote.style.animation = "fadeInUp reverse 0.5s";
  quoteAuthor.style.animation = "fadeInUp reverse 0.5s";
  quote.style.animation = "fadeInUp 0.5s";
  quoteAuthor.style.animation = "fadeInUp 0.5s";*/
  //setTimeout(, i*10000);
}