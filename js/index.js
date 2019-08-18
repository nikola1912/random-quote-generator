const quotes = {
  1: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
  2: "Get busy living or get busy dying.",
  3: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
  4: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
  5: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
  6: "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
  7: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
  8: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
  9: "Those who dare to fail miserably can achieve greatly.",
  10: "I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time."
};
  
const authors = {
  1: "Dr. Suess",
  2: "Stephen King",
  3: "Mark Caine",
  4: "Helen Keller",
  5: "Mark Twain",
  6: "Audre Lorde",
  7: "Eleanor Roosevelt",
  8: "David Brinkley",
  9: "John F. Kennedy",
  10: "Herbert Bayard Swope"
};

const colors = {
  1: "#f39c12", //orange
  2: "#800000", //dark red
  3: "#133337", //navy
  4: "#5ac18e", //bright green
  5: "#e74c3c", //bright red
  6: "#660066", //purple
  7: "#2c3e50", //navy #2
  8: "#bfa87c", //bright oak
  9: "#e35d73", //bright pink
  10: "#333333" //dark grey
};
  
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

var randNum = getRndInteger(1, Object.keys(quotes).length);
var randColorNum = getRndInteger(1, Object.keys(colors).length);

function clickFunc() {
  let newRandNum = getRndInteger(1, Object.keys(quotes).length);
  let newRandColorNum = getRndInteger(1, Object.keys(colors).length);
  while (newRandNum === randNum) {
    newRandNum = getRndInteger(1, Object.keys(quotes).length);
  };
  while (newRandColorNum === randColorNum) {
    newRandColorNum = getRndInteger(1, Object.keys(colors).length);
  };
  randNum = newRandNum;
  randColorNum = newRandColorNum;
  $(":root").css("--main-color", colors[randColorNum]);

  $("#text").animate(
    { opacity: 0 },
    500,
    function() {
      $(this).animate({ opacity: 1}, 1000);
      $("#quote-text").text(quotes[randNum]);
    }
  );

  $("#author").animate(
    { opacity: 0 },
    500,
    function() {
      $(this).animate({ opacity: 1}, 1000);
      $("#author").text("-"+authors[randNum]);
    }
  );
};

function onLoad() {
  $("#quote-text").text(quotes[randNum]);
  $("#author").text("-"+authors[randNum]);
  $(":root").css("--main-color", colors[randColorNum]);
};

$(document).ready(onLoad);