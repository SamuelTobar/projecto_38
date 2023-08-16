class Quiz {
  constructor(){}

  getState(){
    var gamestateRef  = database.ref('gamestate');
    gamestateRef.on("value",function(data){
       gamestate = data.val();
    })

  }

  update(state){
    
    database.ref('/').update({
      gamestate: state
    });

  }

 start(){
    
      contestant = new Contestant();
      
        contestant.getCount();
      
      question = new Question()
      question.display();
    
  }

  play(){
    question.hide();
    background("Yellow");
   
  }
}