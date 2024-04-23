const questions = [

    {
        question:"What is our national animal?",
        answer:[
            {text:"Lion" , correct:"false"},
            {text:"Tiger" , correct:"true"},
            {text:"Elephant" , correct:"false"},
            {text:"Cat" , correct:"false"}
        ]

    },
    {
        question:"What is our national fruit?",
        answer:[
            {text:"Mango" , correct:"true"},
            {text:"Guava" , correct:"false"},
            {text:"Graps" , correct:"false"},
            {text:"Apple" , correct:"false"}
        ]

    },
    {
        question:"What is the name of pink city?",
        answer:[
            {text:"West Bengal" , correct:"false"},
            {text:"Delhi" , correct:"false"},
            {text:"Jaipur" , correct:"true"},
            {text:"Kolkata" , correct:"false"}
        ]

    },
    {
        question:"What is the name of highest place of the world?",
        answer:[
            {text:"Mariyana" , correct:"false"},
            {text:"Mount Everest" , correct:"true"},
            {text:"Tibbat" , correct:"false"},
            {text:"Dargiling" , correct:"false"}
        ]

    }


]

const questionElement = document.getElementById("question")
const answerBtn = document.getElementById("answer-buttons")
const nextBtn = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0
    score =0
    nextBtn.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    const currentQuestion = questions[currentQuestionIndex]
    const questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + '.' + currentQuestion.question


currentQuestion.answer.forEach(answer => {
    const button = document.createElement('button')
    button.innerHTML = answer.text
    button.classList.add('btn')
    answerBtn.appendChild(button)
    if(answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click'  , selectAnswer)
});
}
function resetState(){
nextBtn.style.display = 'none'
while(answerBtn.firstChild){
    answerBtn.removeChild (answerBtn.firstChild)
}

}
function selectAnswer(e){
    const selectedBtn =  e.target
    const isCorrect = selectedBtn.dataset.correct === 'true'
    if(isCorrect){
        selectedBtn.classList.add('correct')
        score++;
    }else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerBtn.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct')
        }
        button.disabled = 'true'
    })
    nextBtn.style.display = 'block'
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`
    nextBtn.innerHTML = "Play Again"
    nextBtn.style.display = 'block'
}
function handleNext(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }
}

nextBtn.addEventListener('click' , () =>{
    if(currentQuestionIndex < questions.length){
        handleNext();
    }else{
        startQuiz();
    }
})
startQuiz();



// another method
// const questions = [
//     {
//         question: "What is our national animal?",
//         answers: ["Lion", "Tiger", "Elephant", "Cat"],
//         correctAnswer: 1,
//     },
//     {
//         question: "What is our national fruit?",
//         answers: ["Mango", "Guava", "Grapes", "Apple"],
//         correctAnswer: 0,
//     },
//     {
//         question: "What is the name of the pink city?",
//         answers: ["West Bengal", "Delhi", "Jaipur", "Kolkata"],
//         correctAnswer: 2,
//     },
//     {
//         question: "What is the name of the highest place on earth?",
//         answers: ["Mariyana", "Mount Everest", "Tibet", "Darjeeling"],
//         correctAnswer: 1,
//     },
// ];

// const questionElement = document.getElementById("question");
// const answerBtn = document.getElementById("answer-buttons");
// const nextBtn = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     nextBtn.innerHTML = "Next";
//     showQuestion();
// }

// function showQuestion() {
//     resetState();
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

//     currentQuestion.answers.forEach((answer, index) => {
//         const button = document.createElement("button");
//         button.innerHTML = answer;
//         button.classList.add("btn");
//         answerBtn.appendChild(button);
//         if (index === currentQuestion.correctAnswer) {
//             button.dataset.correct = "true";
//         }
//         button.addEventListener("click", selectAnswer);
//     });
// }

// function resetState() {
//     nextBtn.style.display = "none";
//     while (answerBtn.firstChild) {
//         answerBtn.removeChild(answerBtn.firstChild);
//     }
// }

// function selectAnswer(e) {
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if (isCorrect) {
//         selectedBtn.classList.add("correct");
//         score++;
//     } else {
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answerBtn.children).forEach((button) => {
//         if (button.dataset.correct === "true") {
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     nextBtn.style.display = "block";
// }

// function showScore() {
//     resetState();
//     questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
//     nextBtn.innerHTML = "Play Again";
//     nextBtn.style.display = "block";
// }

// function handleNext() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         showQuestion();
//     } else {
//         showScore();
//     }
// }

// nextBtn.addEventListener("click", () => {
//     if (currentQuestionIndex < questions.length) {
//         handleNext();
//     } else {
//         startQuiz();
//     }
// });

// startQuiz();
