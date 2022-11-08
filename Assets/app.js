var timeEl = document.querySelector("#timer");
var mainSection = document.querySelectorAll(".main-container");
var options = document.querySelectorAll(".option");
var bottomMessage = document.querySelectorAll(".wright-wrong");

var secondsLeft = 50;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

var questions = [
  {
    question: "Can a local scope variable be used in any function?",
    options: {
      a: "Yes!",
      b: "No!",
      c: "If you ask nicely",
      d: "In certain circumstances",
    },
    answer: "b",
  },
  {
    question: "What is a variable for?",
    options: {
      a: "To vary the code",
      b: "To ensure proper loading time",
      c: "To store data",
      d: "To just be there because they look cool",
    },
    answer: "c",
  },
  {
    question: "What language was JavaScript named after?",
    options: {
      a: "Script Type",
      b: "Coffee Time",
      c: "Java",
      d: "JavaScript 2: Electric Boogaloo",
    },
    answer: "c",
  },
  {
    question: "A true or false value is represented by",
    options: {
      a: "Number",
      b: "String",
      c: "Boolean",
      d: "Object",
    },
    answer: "c",
  },
  {
    question: "Console.log allows you to view javascript in the:",
    options: {
      a: "Window",
      b: "Browser",
      c: "Safari",
      d: "Console",
    },
    answer: "d",
  },
];
// wrongChoice() {
//   secondsLeft = secondsLeft
// }

// nextQuestion();

//When I click the 'true' answer, the 'correct' message will show in the h6,
//then the next question will pop up.
//if wrong, the "wrong" message will show in the h6 and 3 seconds will come off the timer

function chooseAnswer(event) {
  var element = event.target;
  if (element.matches(".option")) {
    var state = element.getAttribute("data-state");

    if (state === "true") {
      bottomMessage.textContent = "correct!";
    } else {
      bottomMessage.textContent = "wrong!";
    }
    // nextQuestion();
  }
}

setTime();
options.addEventListener("click", chooseAnswer());
