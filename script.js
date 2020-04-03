var breatheStatus = "Breathe out...";
var quoteAuthors = [
  "",
  "President Franklin Roosevelt",
  "Baz Luhrmann",
  "Matt Charman",
  "Erma Bombeck",
  "Marie Curie",
  "Bobby McFerrin",
  "Bob Marley",
  "Marla Gibbs",
  "\"I Heart Huckabees\"",
  "Eddie Izzard",
  "Fred Rogers",
  "Angela Lansbury",
  "Vivian Greene",
  "Sting",
  "The Rolling Stones",
  "Baloo the Bear, \"The Jungle Book\"",
  "Johann Wolfgang von Goethe",
  "Friedrich Nietzsche",
  "Eckhart Tolle",
  "Etienne de Grellet",
  "Winston Churchill",
  "Matthew McConaughey in \"Dazed and Confused\"",
  "Persian adage",
  "Buddha",
  "Lisa Wingate",
  "Chuck Noland, \"Cast Away\"",
  "John Lennon",
  "Eleanor Roosevelt",
  "Mattie Stepanek",
  "Mother Teresa",
  "Theordore Roosevelt",
  "Allen Klein"
];
var quotes = [
  "Keep calm and carry on",
  "The only thing we have to fear is fear itself",
  "A life lived in fear is a life half lived:",
  "Aren't you worried? Would that help?",
  "Worry is like a rocking chair: It gives you something to do but never gets you anywhere",
  "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
  "Don't worry, be happy",
  "Don't worry 'bout a thing, cause every little thing's gonna be alright.",
  "Things could always be better, but things could always be worse",
  "Nothing's okay. So it's okay.",
  "I like to think of life as an adventure, like a roller coaster. It helps with the ups and downs.",
  "Often when you think you're at the end of something, you're at the beginning of something else.",
  "Better to be busy than to be busy worrying",
  "Life isn't about waiting for the storm to pass. It's about learning how to dance in the rain.",
  "When the world is running down, you make the best of what's still around.",
  "You can't always get what you want. But if you try sometime, you'll find, you get what you need",
  "The simple bare necessities. Forget about your worries and your strife ... The bare necessities of life will come to you",
  "Let everyone sweep in front of his own door, and the whole world will be clean.",
  "That which does not kill us, makes us stronger",
  "Life will give you whatever experience is most helpful for the evolution of your consciousness.",
  "I shall pass this way but once; any good that I can do or any kindness I can show to any human being; let me do it now",
  "If you're going through hell, keep going",
  "You just gotta keep livin' man, L-I-V-I-N",
  "This too shall pass",
  "Praise and blame, gain and loss, pleasure and sorrow come and go like the wind.",
  "Dawn comes after the darkness",
  "I know what I have to do now, I've got to keep breathing because tomorrow the sun will rise. Who knows what the tide could bring?",
  "Everything will be okay in the end. If it's not okay, it's not the end.",
  "With the new day comes new strength and new thoughts.",
  "Unity is strength... when there is teamwork and collaboration, wonderful things can be achieved.",
  "Be faithful in small things because it is in them that your strength lies.",
  "Do what you can, with what you have, where you are.",
  "Your attitude is like a box of crayons that color your world. Constantly color your picture gray, and your picture will always be bleak. Try adding some bright colors to the picture by including humor, and your picture begins to lighten up."
];

var quote = document.getElementById("quote");
var quoteAuthor = document.getElementById("quote-author");
var breathe = document.getElementById("breathe");
var startBtn = document.getElementById("startBtn");
 var pulser = document.getElementById("breath-pulser");
var sessionRunning = false;
//startBtn.object.addEventListener("click", checkRunning());
function checkRunning() {
  if (sessionRunning == false) {
    startSession();
  } else {
    stopSession();
  }
}

function startSession() {
  sessionRunning = true;
  pulser.style.animation = "10s infinite pulse";
  breathe.style.animation = "fadeInUp 1s";
  quote.style.animation = "fadeInUp 1s";
  quoteAuthor.style.animation = "fadeInUp 1s";
  startBtn.classList.remove("btn-primary");
  startBtn.classList.add("btn-secondary");
  startBtn.innerHTML = "<i class='fas fa-stop'></i> Stop session";

  changeQuote();
  for (i=0; i<6; i++) {
    window.setTimeout(function() {
      if (sessionRunning == true) {
        changeQuote();
        changeBreathe();
      }
      window.setTimeout(changeBreathe, 4000);
    }, i*10000);
  }
  /*for (i=0; i<5; i++) {
    if (sessionRunning == true)
    window.setTimeout(changeQuote, i*10000);
  }
  for (i = 0; i < 13; i++) {
    if (sessionRunning == true)
    window.setTimeout(changeBreathe, i*5000);
  }*/
  //End Session
  window.setTimeout(
    function(){endSession()}, 60000);
}
function stopSession() {
  sessionRunning = false;
  pulser.style.animation = "5s ease-in-out infinite idle";
  breathe.innerHTML = "Breathe calmly...";
  quote.innerHTML = "";
  quoteAuthor.innerHTML = "";
  startBtn.classList.remove("btn-secondary");
  startBtn.classList.add("btn-primary");
  startBtn.innerHTML = "Start session now <i class='fas fa-arrow-right'></i>";
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
  setTimeout(function() {
    quote.style.animation = "fadeInUp 0.5s";
    quoteAuthor.style.animation = "fadeInUp 0.5s";
  }, 500);*/
  //setTimeout(, i*10000);
}

function endSession() {
  if (sessionRunning == true) {
    pulser.style.animation = "5s ease-in-out infinite idle";
    breathe.innerHTML = "Great job! You're done!";
    quote.innerHTML = "Click \"Restart session\" if you need more peace!";
    quoteAuthor.innerHTML = "";
    startBtn.classList.remove("btn-secondary");
    startBtn.classList.add("btn-primary");
    startBtn.innerHTML = "Restart session <i class='fas fa-arrow-right'></i>";
    /*quote.style.animation = "fadeInUp reverse 0.5s";
    quoteAuthor.style.animation = "fadeInUp reverse 0.5s"*/
  }
}
