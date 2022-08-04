const username =document.getElementById("username");
const saveScoreButton =document.getElementById("saveScoreButton");
const finalScore =document.getElementById("finalScore");
const mostRecentScore =localStorage.getItem("mostRecentScore");
finalScore.innerText=mostRecentScore;

finalScore.innerHTML = "Score: "+ mostRecentScore + "/100" ;





username.addEventListener("keyup",()=>{
    //console.log(username.value);
   
    saveScoreBtn.disabled=!username.value;
});

saveHighScore=(e)=>{
    check=()=>{
        const HighScore =JSON.parse(localStorage.getItem("HighScores") )|| [];
        return HighScore;
    }
    if(check()){
            
        // console.log("Clicked the save button!")
        e.preventDefault();
        const HighScore =JSON.parse(localStorage.getItem("HighScores") )|| [];

        const score={
            score:mostRecentScore,
            name:username.value
        };
        //console.log(score);
        HighScore.push(score);
        // console.log(HighScore);
        HighScore.sort((a,b)=> b.score-a.score)
        HighScore.splice(5);
        localStorage.setItem("HighScores",JSON.stringify(HighScore));
        window.location.assign("highscores.html")

        console.log(HighScore);
    }else{
        localStorage.setItem("HighScores",JSON.stringify([]));
        const HighScore =JSON.parse(localStorage.getItem("HighScores") )|| []; 

        e.preventDefault();

        const score={
            score:mostRecentScore,
            name:username.value
        };

        HighScore.push(score);
        HighScore.sort((a,b)=> b.score-a.score)
        HighScore.splice(5);
        localStorage.setItem("HighScores",JSON.stringify(HighScore));
        window.location.assign("highscores.html")
    }


};
