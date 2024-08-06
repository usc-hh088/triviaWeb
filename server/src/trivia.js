let Questions = [];
const ques = document.getElementById("ques");
const timerDisplay = document.getElementById("timeDisplay");
const messageBox = document.getElementById("messageBox");
let startTime;
let endTime;

// Retrieve userName from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('userName');

async function fetchQuestions() {
    try {
        const response = await fetch('https://04742444-a6ef-4aa8-83c4-03c8c2a64639.mock.pstmn.io/qCars');
        if (!response.ok) {
            throw new Error(`Error! Unable to fetch the data`);
        }
        const data = await response.json();
        Questions = data;
        if (Questions.length > 0) {
            loadQues();
            startTimer();
            console.log("Questions load success");
        } else {
            throw new Error("No questions fetched from the API.");
        }
    } catch (error) {
        console.log(error);
        ques.innerHTML = `<h5 style='color: red'>
        ${error}</h5>`;
    }
}

let currQuestionInd = 0;
let score = 0;

function loadQues() {
    const opt = document.getElementById("opt");
    let currentQuestion = Questions[currQuestionInd].question;
    ques.innerText = currentQuestion;
    opt.innerHTML = "";
    const options = Object.values(Questions[currQuestionInd].options);
    options.forEach((option, index) => {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
        choice.type = "radio";
        choice.name = "answer";
        choice.value = String.fromCharCode(65 + index);
        choiceLabel.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    });
}

function startTimer() {
    startTime = Date.now();
    setInterval(updateTimerDisplay, 1000);
}

function stopTimer() {
    endTime = Date.now();
}


function updateTimerDisplay() {
    if (currQuestionInd <= Questions.length -1){
       const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
       const minutes = Math.floor(elapsedTime / 60);
       const seconds = elapsedTime % 60;
       timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
       }
    //    else{
    //    const elapsedTimeInSeconds = Math.floor((endTime - startTime) / 1000);
    //    const minutes = Math.floor(elapsedTimeInSeconds / 60);
    //    const seconds = elapsedTimeInSeconds % 60;
    
    //    }
}



function nextQuestion() {
    //<div id="messageBox" class="message-box d-none"></div>
   
    messageBox.classList.add("d-none");
    if (currQuestionInd < Questions.length - 1) {
        currQuestionInd++;
        loadQues();
        console.log(currQuestionInd)
    } else {
        stopTimer();
        document.getElementById("opt").remove();
        document.getElementById("ques").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}

function checkAns() {
    const selectedAns = document.querySelector('input[name="answer"]:checked');
    //Hidden 
    messageBox.classList.remove("d-none");
    if (!selectedAns) {
        return;
    }
    
    if (selectedAns.value === Questions[currQuestionInd].answer) {
        score++;
    }

    nextQuestion();
}
const timerTag = document.getElementById("timerTag")
function loadScore() {
   
    timerTag.classList.add("d-none"); 
    const totalScore = document.getElementById("score");
    totalScore.textContent = `${userName}</p> scored ${score} out of ${Questions.length}`;
    //Rewrite innerHtml 
    const resultDiv = document.getElementById("cardBody");
    resultDiv.innerHTML = `<h2>Quiz Result</h2>
                           <p>Name: ${userName}</p>
                           <p>Time taken: ${timerDisplay.textContent}</p>
                           <p>Total score: ${score} out of ${Questions.length}</p>`;
}

// fetching questions
fetchQuestions();
if (Questions.length === 0) {
	ques.innerHTML = `<h5>Please Wait!! 
	Loading Questions...</h5>`
}
console.log(userName)