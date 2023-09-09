const questions=[
    {
        question:"What is JavaScript primarily used for?",
        answers:[
            {text:"Styling web pages" ,correct:false},
            {text:"Enhancing the layout of web pages" ,correct:false},
            {text:"Adding interactivity to web pages" ,correct:true},
            {text:" Creating web page content" ,correct:false}
        ]
    },
    {
        question:" What will the following code output: `console.log(2 + '2');`?",
        answers:[
            {text:"22" ,correct:true},
            {text:"4" ,correct:false},
            {text:"NaN" ,correct:false},
            {text:"TypeError" ,correct:false}
        ]
    },
    {
        question:"What does the addEventListener method do in JavaScript?",
        answers:[
            {text:"Adds a new element to the DOM" ,correct:false},
            {text:"Adds a click event to an element" ,correct:false},
            {text:" Listens for changes in the browser's history" ,correct:false},
            {text:"Adds a function to run when an event occurs on an element" ,correct:true}
        ]
    },
    {
        question:"what will be the output of this code?  3>2>1===false",
        answers:[
            {text:"true" ,correct:true},
            {text:"false" ,correct:false}
        ]
    }, {
        question:"Javascript is a _____ -side programming language.",
        answers:[
            {text:"Client" ,correct:false},
            {text:"Server" ,correct:false},
            {text:"Both" ,correct:true},
            {text:"None" ,correct:false}
        ]
    },
    {
        question:"Which of the following event raised when key is pushed?",
        answers:[
            {text:"keyup" ,correct:false},
            {text:"keypress" ,correct:false},
            {text:"keydown" ,correct:true},
            {text:"none of the above" ,correct:false}
        ]
    },
    {
        question:"When mouseup event will be raised?",
        answers:[
            {text:"When mouse performs a click" ,correct:false},
            {text:"When the mouse button is pressed down" ,correct:false},
            {text:"When the mouse cursor moves over an HTML element" ,correct:false},
            {text:"When the mouse button is released" ,correct:true}
        ]
    },
    {
        question:"what will be the output of this code?     let a=this;  console.log(a);",
        answers:[
            {text:"this" ,correct:false},
            {text:"Window" ,correct:true},
            {text:"undefined" ,correct:false},
            {text:"NaN" ,correct:false}
        ]
    },
    {
        question:"Which of the following variables takes precedence over the others if the names are the same?",
        answers:[
            {text:"Global variable" ,correct:false},
            {text:"The local variable" ,correct:true},
            {text:"Both" ,correct:false},
            {text:"None of the above" ,correct:false}
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
