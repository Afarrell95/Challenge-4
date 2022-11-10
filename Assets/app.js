var timeEl = document.querySelector("#timer");

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
    options: [
      {
        a: "Yes!",
        b: "No!",
        c: "If you ask nicely",
        d: "In certain circumstances",
      },
    ],
    answer: "b",
  },
  {
    question: "What is a variable for?",
    options: [
      {
        a: "To vary the code",
        b: "To ensure proper loading time",
        c: "To store data",
        d: "To just be there because they look cool",
      },
    ],
    answer: "c",
  },
  {
    question: "What language was JavaScript named after?",
    options: [
      {
        a: "Script Type",
        b: "Coffee Time",
        c: "Java",
        d: "JavaScript 2: Electric Boogaloo",
      },
    ],
    answer: "c",
  },
  {
    question: "A true or false value is represented by",
    options: [
      {
        a: "Number",
        b: "String",
        c: "Boolean",
        d: "Object",
      },
    ],
    answer: "c",
  },
  {
    question: "Console.log allows you to view javascript in the:",
    options: [
      {
        a: "Window",
        b: "Browser",
        c: "Safari",
        d: "Console",
      },
    ],
    answer: "d",
  },
];

function play() {
  setTime();
  for (i = 0; i < questions.length; i++) {
    document.querySelector(".question").innerHTML = questions[i].question;
    console.log(questions[i].question);
  }
}

play();
