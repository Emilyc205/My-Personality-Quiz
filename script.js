/*Add your JavaScript here*/
var moonScore = 0; //store moon score
var sunScore = 0; //store sun score
var questionCount = 0; //store number of questions clicked 
//store HTML elements using DOM
var result = document.getElementById("result");
var restart = document.getElementById("reset");
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
//listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click",sun);
q1a2.addEventListener("click",moon);

q2a1.addEventListener("click",moon);
q2a2.addEventListener("click", sun);

q3a1.addEventListener("click",moon);
q3a2.addEventListener("click", sun);
//track moon score and check if quiz is complete
restart.addEventListener("click", resetQuiz);
function moon() {
  moonScore +=1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " moonScore = " + moonScore);
  updateResult();
}

function sun() {
  sunScore +=1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " sunScore = " + sunScore);
  updateResult();
}

function updateResult() {
  if (questionCount == 3) {
    console.log("The quiz is done!")
  if (sunScore >= 2) {
    result.innerHTML = "You are a sun person!";
    console.log ("You are a sun person!");
  } else if (moonScore >=2) {
    result.innerHTML = "You are a moon person!";
    console.log ("You are a moon person!");
}
  }
}
function resetQuiz() {
result.innerHTML = "You result is...";
sunScore =0;
moonScore =0;
questionCount =0;
console.log ("Reset:", sunScore, moonScore, questionCount);
}