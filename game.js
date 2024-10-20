function play(){
    // home screen section
    
    AddElementById('home_screen')
     AddElementById('final_score')
    // PlayGround section
    
    removeElementById('play_ground')
    setTextElementValueById('Current_life',5)
    setTextElementValueById('Current_score',0)

        // create alphabet string
    const alphabetString ='abcdefghijklmnopqrstuvwxyz'
    const alphabet =alphabetString.split('')
    console.log(alphabet)

    // get a random Number
    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber)
    console.log(index);

    
    const randomIndex = alphabet[index]
    console.log(randomIndex)

    const screenAlphabet=document.getElementById('current_alphabet')
    screenAlphabet.innerText=randomIndex
    console.log(screenAlphabet);


    const addBackgroundColor = document.getElementById(randomIndex)
    addBackgroundColor.classList.add('bg-orange-400')
     
}

    function handleKeyboardButtonPress(event){
        const playerPressed =event.key;
        console.log('Player Pressed',playerPressed)


        const currentAlphabetsElement =document.getElementById('current_alphabet')
        const Current_alphabet =currentAlphabetsElement.innerText
    const expectedAlphabet =Current_alphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet)


    if(playerPressed===expectedAlphabet){
        console.log('You are win the Game')

        //Update Score:
        //1:Get the current score
        // const currentScoreElement =document.getElementById('Current_score')
        // const currentScoreText = currentScoreElement.innerText
        // const currentScore =parseInt(currentScoreText)

        //console.log("My game score",typeof(currentScore));
        // 2:increase the score by 1
       // const UpdateScore = currentScore+1;
       // 3:Show the update score
        // currentScoreElement.innerText=UpdateScore;
         
        const currentScore = getTextElementValueById('Current_score')
        const updateScore = currentScore + 1;
        setTextElementValueById('Current_score',updateScore)

        // create alphabets string
    const alphabetString ='abcdefghijklmnopqrstuvwxyz'
    const alphabet =alphabetString.split('');
    // console.log(alphabet)

    // get a random Number

    const randomNumber =Math.random()*25
    const index =Math.round(randomNumber)
    // console.log(index);


    const randomIndex =alphabet[index];
    // console.log(randomIndex)


    const screenAlphabet=document.getElementById('current_alphabet')
    screenAlphabet.innerText=randomIndex;
    // console.log(screenAlphabet);


    const addBackgroundColor = document.getElementById(randomIndex)
    addBackgroundColor.classList.add('bg-orange-400')
     
    // remove background color
    
    const removeBackgroundColor=document.getElementById(expectedAlphabet)
    removeBackgroundColor.classList.remove('bg-orange-400')


    }
    else{
        console.log('You can not win the game')

        //step-1:get the current life
     const currentLife = getTextElementValueById('Current_life')
     const updateLife = currentLife-1;
     setTextElementValueById('Current_life',updateLife)
        //step-2:reduce the life count
        // const updateLife =currentLife-1;
        //step-3: display the update life;
        // currentLifeElement.innerText=updateLife;
        if(updateLife===0){
            console.log('Game over')
            // PlayGround section
        AddElementById('play_ground')
        removeElementById('final_score')

        
        const lastScore = getTextElementValueById('Current_score')
        console.log("Last score",lastScore);
        setTextElementValueById('last_Score',lastScore)


        // clear the last selected alphabet highlight
        
        const removeBackgroundColor=document.getElementById(expectedAlphabet)
        removeBackgroundColor.classList.remove('bg-orange-400')

        }
    }
        
  } 
    document.addEventListener('keyup',handleKeyboardButtonPress)