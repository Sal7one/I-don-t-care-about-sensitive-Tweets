

Get().then(savedData=>{
    let userChoice = savedData['userOption']
      if(userChoice == null){
          Set("userOption", true);
          observeTweets();
      }
      else{
          if(userChoice == true)
          observeTweets();
      }
    })

    function observeTweets(){
        var arriveOptions = {
          fireOnAttributesModification: true, // Tweet ViewHolder element data changed
          onceOnly: false, // for every Tweet
          existing: true  // If Tweet is already loaded when this code ran
      };
      
      // Use Arrive js to obeserve all tweets (around 25 max are loaded and if the data changes this code will also run)
        try {
     document.arrive(`[data-testid="tweet"]`, arriveOptions, (tweet)=>{

      try {
        let senstiveList =  document.querySelectorAll(".css-1dbjc4n.r-drfeu3.r-1867qdf.r-1p0dtai.r-eqz5dr.r-16y2uox.r-1777fci.r-1d2f490.r-ymttw5.r-1f1sjgu.r-u8s1d.r-zchlnj.r-ipm5af")
        senstiveList.forEach(singleTweet =>{
          singleTweet.children[0].children[1].children[0].click()
        })
      } catch (error) {
        console.log("children error")
        console.log(error)
      }
          })
        } catch (error) {
          console.log("parent error")
          console.log(error)
        }
}