var readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question('Whats your name?');

console.log('Welcome '+ userName+ '! Do you know Jowel!')

const play = (question, answer) =>{
var userAnswer = readlineSync.question(question)
  if(userAnswer === answer){
    console.log('Right!')
    score = score + 1; 
  }else{
    console.log('Wrong!')
  }
  console.log('Current score = '+ score);
  console.log('--------------')
}

var questionOne = {
  question: 'Where do I live? ',
  answer:"Guwahati"
}
var questionTwo = {
  question: 'My superhero would be? ',
  answer:"Ironman"
}
var questionThree = {
  question: 'What is my favourite fastfood? ',
  answer:"Momo"
}

var questions = [questionOne, questionTwo, questionThree]


for(var i = 0; i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log('YAAY, You scored = '+score)

