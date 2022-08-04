const question =document.getElementById("question");
const choices =Array.from(document.getElementsByClassName("choice-text"));
const progressText =document.getElementById("progress-text");
const ScoreText =document.getElementById("score");
const loader =document.getElementById("loader");
const gamer =document.getElementById("game");
loader.classList.add('hidden');

let currentQuestion={};
let acceptinganswers=false;
let score=0;
let questioncounter=0;
let availableQuestion=[];




let questions=[];
fetch("openApi.json")
.then(res=>{//console.log(res);
    return res.json();



})


.then(loadedQuestion=>{//console.log(loadedQuestions.results);
        questions=loadedQuestion.results.map(loadedQuestion=>{const formattedQuestion={
            question:loadedQuestion.question
            
        };
    //   console.log(questions);
    const answerChoices=[...loadedQuestion.incorrect_answers];

   answerChoices.push(
        loadedQuestion.correct_answer
    );

    answerChoices.forEach((choice,index)=>{formattedQuestion["choice"+(index+1)]=choice;
  });
    // console.log(formattedQuestion);
    return formattedQuestion;
   
    });
    gamer.classList.add("hidden");
    loader.classList.remove("hidden");

    startGame();



})
.catch(err=>{console.error(err);});

//CONSTANTS
const CORRECT_BONUS=10
const MAX_QUESTIONS=10


startGame = ()=> {
    questioncounter=0;
    score=0;
    availableQuestion=[...questions];
    // availableQuestion=[...formattedQuestion];
    // console.log(availableQuestion)
    getNewQuestion();
    loader.classList.add("hidden");
    gamer.classList.remove("hidden");
    
};

getNewQuestion=()=>{
  
    localStorage.setItem("mostRecentScore",score);
    if (availableQuestion.length===0 || questioncounter>= MAX_QUESTIONS){
        return window.location.assign("end.php");};
    

    questioncounter++;
    //console.log(questioncounter);
    progressText.innerText=("Question"+questioncounter +"/"+ MAX_QUESTIONS);
    //console.log(questioncounter/MAX_QUESTIONS);
    if( questioncounter===10){progressBarFull.style.width=101+"%"}
    else {progressBarFull.style.width=(((questioncounter/MAX_QUESTIONS)*100)+"%")};
    const questionIndex =Math.floor(Math.random()*availableQuestion.length);

    currentQuestion=availableQuestion[questionIndex];
    console.log(currentQuestion);
    console.log(availableQuestion);
    question.innerText=currentQuestion.question;

    choicesIndices = [0,1,2,3,4];
    choicesIndices.splice(0,1);
    choicesList = [];

    choices.forEach(choice=>{

        console.log(choicesIndices);
         const choiceIndex =Math.floor(Math.random()*choicesIndices.length);
         const choiceIndexRandom = choicesIndices[choiceIndex];
         const choiceIndexRandomString = choiceIndexRandom.toString();
         choice.dataset['number'] = choiceIndexRandomString;
         console.log(choiceIndexRandomString);
         choice.innerText=currentQuestion["choice"+choiceIndexRandomString];
         choicesIndices.splice(choiceIndex,1);

    });



    availableQuestion.splice(questionIndex,1);
    acceptinganswers=true;
    
};

choices.forEach(choice=>{
    
    choice.addEventListener("click",e =>{
     console.log(e.target)
     if (!acceptinganswers)
     return;  
     acceptinganswers=false;
      
      const selectedChoice=e.target;
      const selectedAnswer=selectedChoice.dataset["number"];
      console.log(selectedAnswer);
      const correctAnswer = "4";

      const classToApply=selectedAnswer==correctAnswer? "correct" :"incorrect";
      if( classToApply==="correct"){
          IncrementScore(CORRECT_BONUS);
      }
     selectedChoice.parentElement.classList.add(classToApply);
    

     setTimeout (()=>{ 
         selectedChoice.parentElement.classList.remove(classToApply);
         getNewQuestion();
    },100);

   
     
    
    });
    });
    IncrementScore=num=>{
        score+=num;
        ScoreText.innerText=score;
    }
