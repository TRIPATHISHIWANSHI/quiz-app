const questions=[
    {
        question:"what will be the output of this code?",
        answers:[
            {text:"122" ,correct:true},
            {text:"32" ,correct:false},
            {text:"NaN2" ,correct:false},
            {text:"NaN" ,correct:false}
        ]
    },
    {
        question:"what will be the output of this code?",
        answers:[
            {text:"number" ,correct:false},
            {text:"1" ,correct:false},
            {text:"string" ,correct:true},
            {text:"true" ,correct:false}
        ]
    },
    {
        question:"what will be the output of this code?",
        answers:[
            {text:"122" ,correct:true},
            {text:"32" ,correct:false},
            {text:"NaN2" ,correct:false},
            {text:"NaN" ,correct:false}
        ]
    },
    {
        question:"what will be the output of this code?",
        answers:[
            {text:"122" ,correct:true},
            {text:"32" ,correct:false},
            {text:"NaN2" ,correct:false},
            {text:"NaN" ,correct:false}
        ]
    }, {
        question:"what will be the output of this code?",
        answers:[
            {text:"122" ,correct:true},
            {text:"32" ,correct:false},
            {text:"NaN2" ,correct:false},
            {text:"NaN" ,correct:false}
        ]
    },
    {
        question:"what will be the output of this code?",
        answers:[
            {text:"122" ,correct:true},
            {text:"32" ,correct:false},
            {text:"NaN2" ,correct:false},
            {text:"NaN" ,correct:false}
        ]
    },
    {
        question:"what will be the output of this code?",
        answers:[
            {text:"122" ,correct:true},
            {text:"32" ,correct:false},
            {text:"NaN2" ,correct:false},
            {text:"NaN" ,correct:false}
        ]
    },
    {
        question:"what will be the output of this code?",
        answers:[
            {text:"122" ,correct:true},
            {text:"32" ,correct:false},
            {text:"NaN2" ,correct:false},
            {text:"NaN" ,correct:false}
        ]
    },
    {
        question:"what will be the output of this code?",
        answers:[
            {text:"122" ,correct:true},
            {text:"32" ,correct:false},
            {text:"NaN2" ,correct:false},
            {text:"NaN" ,correct:false}
        ]
    }    
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score=0;
function StartQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNumber=currentQuestionIndex+1;
    questionElement.innerHTML=questionNumber+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");//create a button
        button.innerHTML=answer.text;//we will add the answer
        button.classList.add("btn");//adding the class in the button
        answerButton.appendChild(button);//display button inside the div answer-buttons
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;//store the selected answer
    const isCorrect=selectedBtn.dataset.correct==="true";//compare the selected button with true
    if(isCorrect){
        selectedBtn.classList.add("correct");//add className correct
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");//add className incorrect
    }
    Array.from(answerButton.children).forEach(button=>{//for each button will check the dataset if it is true will mark it green if it is false then it will be red and further marking is disbaled
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="PLAY AGAIN";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex< questions.length ) {
    handleNextButton();
    }
    else{
        StartQuiz();
    }
});
StartQuiz();