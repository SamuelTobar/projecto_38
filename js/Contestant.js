class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestcountRef = database.ref('contestcount');

    contestcountRef.on("value",(data)=>{
      contestcount = data.val();
    })


    // contestcountRef.on("value",()=>{
    //   contestcount = data.val();
    // })

    // contestcountRef.on("value",(data)=>{
    //   contestcount = data();
    // })

  }

  updateCount(count){
    // database.ref('/').update({
    //   count: contestcount
    // });


    // database.ref('/').update({
    //   contestcount: 0
    // });


    // database.ref('').update({
    //   contestcount: counts
    // });


    database.ref('/').update({
      contestcount: count
    });

  }

 
}