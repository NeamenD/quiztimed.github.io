






var startBtn = document.getElementById("startBtn");
var submitBtn = document.querySelector("button.submitBtn")
var timerElement = document.getElementById("timer");
var submitScoreElement = document.querySelector("#submit-score");
var userScoreElement = document.getElementById("user-score");
var userNameInput;
var questionHead = document.getElementById("questions");
var answerChoices = document.getElementById("answers");

var startBtn = document.getElementById ("startBtn");
var quizBlock = document.getElementById ("quiz");
var Home = document.getElementById ("home");

var currentQuestionNumber = 0;
var curentquestion = "";

const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "ESLint",
      b: "jQuery",
      c: "RequireJS",
      
    },
    correctAnswer: "a"
  }
];
var secondsLeft = (myQuestions.length * 20 + 1);
var countingStarted = false
var countdown = setInterval(function () {
    if(countingStarted){
        timerElement.textContent = "Time: left " + secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(countdown)
        }
        secondsLeft--;
    }

}, 1000);



function displayquestions (question){

    questionHead.textContent = curentquestion.question;

    console.log(myQuestions[currentQuestionNumber].answers["a"]);
    
            var liA = document.createElement('li');     // create li element.
            liA.innerHTML = "A)  "  + myQuestions[currentQuestionNumber].answers['a'];      // assigning text to li using array value.
            liA.setAttribute('style', 'display: block;');    // remove the bullets.

            var liB = document.createElement('li');     // create li element.
            liB.innerHTML = "B)  " + myQuestions[currentQuestionNumber].answers['b'];      // assigning text to li using array value.
            liB.setAttribute('style', 'display: block;');  

            var liC = document.createElement('li');     // create li element.
            liC.innerHTML  = "C)  " + myQuestions[currentQuestionNumber].answers['c'];      // assigning text to li using array value.
            liC.setAttribute('style', 'display: block;');  

        answerChoices.appendChild(liA);  
        answerChoices.appendChild(liB);  
        answerChoices.appendChild(liC);  

    }   

startBtn.addEventListener("click", function() {
    quizBlock.setAttribute("class", "d-block");
    Home.setAttribute("class", "d-none"  );

     curentquestion = myQuestions[currentQuestionNumber];  
    displayquestions(curentquestion);
    countingStarted = true;
    
});

answerChoices.onclick = function(event) {
    
    if(myQuestions.length - 1 > currentQuestionNumber){

        console.log(myQuestions.length + "  " + currentQuestionNumber );
        var target = getEventTarget(event);
        var userAnswer =  target.innerHTML;
    curentquestion = myQuestions[currentQuestionNumber];
    checksAnswer(userAnswer, curentquestion);
    }else{
        document.getElementById('QA-block').innerHTML = '';
        var AllDone = document.createElement('H3');     // create li element.
            AllDone.innerHTML = 'All Done';      // assigning text to li using array value.
            AllDone.setAttribute('style', 'display: block;');    // remove the bullets.
            document.getElementById('QA-block').appendChild(AllDone);

            clearInterval(countdown);
    }
    


















    
};













// function getCurentQuestion() {

//     for(var i in listOfQuestions){

//     listOfQuestions[i].forEach(function(x){
//         return x.question;
//     }); 
function checksAnswer(userAnswer) {

    console.log(userAnswer);
    userAnswer = userAnswer.split("")[0].toLowerCase();
    console.log(userAnswer);

    console.log(curentquestion.correctAnswer);
    if(userAnswer === curentquestion.correctAnswer){
        console.log("correct answer");
        currentQuestionNumber = currentQuestionNumber + 1;

         curentquestion = myQuestions[currentQuestionNumber];  
        answerChoices.innerHTML = '';
        displayquestions(curentquestion)
        
    }else{
        Element.innerHTML = "wrong";
        
        if(secondsLeft-20 < 0) secondsLeft = 0;
        else secondsLeft = secondsLeft-20

        
        // subtract 20 seconds for the timmer.
    }

}
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

// 120 second countdown















// main js restart





















