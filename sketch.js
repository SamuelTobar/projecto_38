
var canvas, backgroundImage;

var gamestate = 0;
var contestcount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestcount === 2){
    quiz.update(1);
  }
  if(gamestate === 1){
    clear();
    quiz.play();
  }
}