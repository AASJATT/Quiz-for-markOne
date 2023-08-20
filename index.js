var readlineSync = require('readline-sync');
var score=0;

var userName = readlineSync.question("May I know your name? ");

console.log("Welcome! ",userName," to DO YOU KNOW AASTHA!" );

function play(question,answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer===answer){
    console.log("right")
    score=score+1
    
  }else{
    console.log("wrong")}
  
   console.log("score:",score)}
  

var questionOne= {
  question:"Where do I live? ",
  answer:"delhi",
}
var questionTwo= {
  question:"What is my favourite food? ",
  answer:"biryani",
}
var questionThree= {
  question: "Who is my favourite bollywood actor? ",
  answer:"amir khan"
}
var questionFour={
  question:"what is my favourite bollywood movie? ",
  answer: "three idiots"
}
var questionFive={
  question:"Who is my favourite singer? ",
  answer:"arijit singh"
}

var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive];
for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer)
}
console.log("Well played! Your final score is: ",score)