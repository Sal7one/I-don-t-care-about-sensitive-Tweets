

try {
    let optionButton = document.querySelector("#optionButton");
    optionButton.addEventListener("click", (e)=>{
      Set("userOption",  optionButton.checked);
      document.querySelector(".hiddenMessage").innerHTML = "Please Refresh Twitter to see changes";
    })

    Get().then(savedData=>{

        let userChoice = savedData['userOption']

        console.log("user choice ")
        console.log(userChoice)
          if(userChoice != null && userChoice == true)
            document.querySelector("#optionButton").checked = userChoice;
        })
 } catch (error) {
     console.log("Error in updating value");
     console.log(error);
    }


