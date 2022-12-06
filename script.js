var questions = 0;

var score = 0;

var generateBtn = document.querySelector("#generate");

function generateQuestion () {
    // if startQuiz button is clicked
    start_btn.onclick = ()=>{}
}
function beginQuiz() {
    /*Show questions after we click the button
  Create a timer to start the clock when start quiz button is clicked*/
  var x = setInterval(function() {

    // Time calculations for minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element 
    document.getElementById("time").innerHTML = minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
   
}
 
// Use Array Index to navigate between questions
    const question= [question1, question2, question3, question4, question5]
    let txt = questions.forEach(answerSolved);
    function questions(answer, options, questions) {
}

// Click button for start quiz
generateBtn.onclick = function() {

  console.log("starting quiz");
}
//start quiz
var questions = [
  {
    number: 1,
    question: "What function is used to generate output to the console",
    answer: "console.log();",
    options: [
      "console.log",
      "log.console()",
      "console.log()",
      "console.log();"
    ]
  },
    {
    number: 2,
    question: "Which of these is an example of an Arithmatic Operator in JS",
    answer: "**",
    options: [
      "&",
      "@",
      "/",
      "**"
    ]
  },
    {
    number: 3,
    question: "When using the if statement is it in lowercase or uppercase",
    answer: "lowercase",
    options: [
      "lowercase",
      "uppercase",
    ]
  },
    {
    number: 4,
    question: "When do you use document.getElementById",
    answer: "All The Above",
    options: [
      "Everytime you want to read or edit an HTML element.",
      "When returning an element with a specified value.",
      "All The Above",
    ]
  },
    {
    number: 5,
    question: " What is the purpose of This operator in JavaScript?",
    answer: "In JS the 'this' keyword refers to the object it belongs to",
    options: [
      "In JS the 'this' keyword refers to the string.",
      "In JS the 'this' keyword refers to the Varible.",
      "In JS the 'this' keyword refers to Function.",
      "In JS the 'this' keyword refers to the object it belongs to."
    ]
  },

]

