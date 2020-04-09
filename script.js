// https://www.cnn.com/2020/03/26/health/inspirational-quotes-coronavirus-wisdom-project-wellness/index.html
var opt1 = 2;
var opt2 = 5;
var time = 1;
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

// https://obscurejavascript.tumblr.com/post/183031058225/how-to-clear-all-timeouts-in-javascript
function createClearAllTimeouts() {
  const noop = () => {};
  let firstId = setTimeout(noop, 0);

  return () => {
    const lastId = setTimeout(noop, 0);
    while (firstId !== lastId) {
      firstId += 1;
      clearTimeout(firstId);
    }
  };
};
const clearAllTimeouts = createClearAllTimeouts();

var quote = document.getElementById("quote");
var quoteAuthor = document.getElementById("quote-author");
var breathe = document.getElementById("breathe-svg");
var breatheText = document.getElementById("breathe-text");
var breatheDone = document.getElementById("breathe-done");
var startBtn = document.getElementById("startBtn");
var pulser = document.getElementById("breath-pulser");
var leftEye = document.getElementById("left-eye");
var rightEye = document.getElementById("right-eye");
var smile = document.getElementById("smile");
var sessionRunning = false;
var dropBtn = document.getElementById("dropBtn");
function checkRunning() {
  if (sessionRunning == false) {
    startSession();
  } else {
    stopSession();
  }
}

function startSession() {
  sessionRunning = true;
  dropBtn.style.display = "none";
  breathe.style.display = "block";
  pulser.style.animation = "10s infinite pulse";
  leftEye.style.animation = "pulse-eyes 10s infinite";
  rightEye.style.animation = "pulse-eyes 10s infinite";
  smile.classList.add("smile-animated");
  startBtn.classList.remove("btn-primary");
  startBtn.classList.add("btn-secondary");
  startBtn.innerHTML = "<i class='fas fa-stop'></i> Stop session";
  changeQuote();
  for (i = 0; i < time * 6; i++) {
    window.setTimeout(function () {
      if (sessionRunning == true) {
        changeQuote();
        changeBreathe();
      }
      window.setTimeout(changeBreathe, 4000);
    }, i * 10000);
  }
  //End Session
  window.setTimeout(
    function () { endSession() }, time * 6 * 10000);
}
function stopSession() {
  sessionRunning = false;
  clearAllTimeouts();
  breatheStatus = "breathe out...";
  pulser.style.animation = "5s ease-in-out infinite idle";
  leftEye.style.animation = "idle-eyes 8s infinite";
  rightEye.style.animation = "idle-eyes 8s infinite";
  smile.classList.remove("smile-animated");
  dropBtn.style.display = "inline-block";
  breathe.style.display = "none";
  breatheText.textContent = "";
  breatheDone.style.display = "none";
  quote.innerHTML = "";
  quoteAuthor.innerHTML = "";
  startBtn.classList.remove("btn-secondary");
  startBtn.classList.add("btn-primary");
  startBtn.innerHTML = "Start session now <i class='fas fa-arrow-right'></i>";
}

var breatheStatus = "breathe out...";
function changeBreathe() {
  if (breatheStatus.localeCompare("breathe in...") == 0) {
    breatheStatus = "breathe out...";
    breathe.style.animation = "fadeIn 0.5s";
    setTimeout(function() {
      breathe.style.animation = "fadeOutDown 0.5s";
    }, 5500);
  } else {
    breatheStatus = "breathe in...";
    breathe.style.animation = "fadeInUp 0.5s";
    setTimeout(function() {
      breathe.style.animation = "fadeOut 0.5s";
    }, 3500);
  }
  breatheText.textContent = breatheStatus;
}
function changeQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length - 1))

  var randomQuote = quotes[randomNumber];
  if (randomQuote.length >= 75) { quote.style.fontSize = "1.25rem"; } else { quote.style.fontSize = "1.5rem"; }
  quote.innerHTML = "\"" + randomQuote + "\"";

  var randomAuthor = quoteAuthors[randomNumber];
  if (randomAuthor.localeCompare("") == 0) {
    quoteAuthor.innerHTML = "";
  }
  else {
    quoteAuthor.innerHTML = "- " + randomAuthor;
  }
  quote.style.animation = "fadeInUp 0.5s";
  quoteAuthor.style.animation = "fadeInUp 0.5s";
  setTimeout(function() {
    quote.style.animation = "fadeOutDown 0.5s";
    quoteAuthor.style.animation = "fadeOutDown 0.5s";
  }, 9500);
}

function endSession() {
  if (sessionRunning == true) {
    pulser.style.animation = "5s ease-in-out infinite idle";
    breathe.style.display = "none";
    leftEye.style.animation = "idle-eyes 8s infinite";
    rightEye.style.animation = "idle-eyes 8s infinite";
    smile.classList.remove("smile-animated");
    breatheDone.style.display = "block";
    quote.innerHTML = "Click \"Restart session\" if you need more peace!";
    quoteAuthor.innerHTML = "";
    startBtn.classList.remove("btn-secondary");
    startBtn.classList.add("btn-primary");
    startBtn.innerHTML = "Restart session <i class='fas fa-arrow-right'></i>";
    /*quote.style.animation = "fadeOutDown 0.5s";
    quoteAuthor.style.animation = "fadeOutDown 0.5s"*/
  }
}


function changeTime(opt) {
  if (opt == 1) time = opt1;
  else time = opt2;
  if (time == 1)
  dropBtn.innerHTML = time + "  Minute  <i class='fas fa-caret-down'></i>";
  else 
  dropBtn.innerHTML = time + "  Minutes  <i class='fas fa-caret-down'></i>";
  if (time == 1) {
    document.getElementById("opt1").innerHTML = "2 Minutes"; opt1 = 2;
    document.getElementById("opt2").innerHTML = "5 Minutes"; opt2 = 5;
  }
  else if (time == 2) {
    document.getElementById("opt1").innerHTML = "1 Minute"; opt1 = 1;
    document.getElementById("opt2").innerHTML = "5 Minutes"; opt2 = 5;
  }
  else {
    document.getElementById("opt1").innerHTML = "1 Minute"; opt1 = 1;
    document.getElementById("opt2").innerHTML = "2 Minutes"; opt2 = 2;
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

