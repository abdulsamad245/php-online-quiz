const highScoresList =document.getElementById("highscoresList");
const highScores=JSON.parse(localStorage.getItem("HighScores")) || {};
console.log(highScores);

highScoresList.innerHTML=highScores.map(score=> {
   // console.log(`<li class="high-score">$(score.name)-$(score.score)</li>`)
    return("<li class=high-score>"+(score.name)+"-"+(score.score)+"</li>");
}).join("");

//console.log(highScores.map(score=> {
    // console.log(`<li>$(score.name)-$(score.score)</li>`)
     //return("<li class=high-score>"+(score.name)+"-"+(score.score)+"</li>")
 //}).join( "" ));