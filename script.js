let questions = [
  {
    q: "What is 2 + 2?",
    options: ["1", "2", "4", "5"],
    answer: 2
  },
  {
    q: "Java is a?",
    options: ["Language", "Car", "Animal", "Food"],
    answer: 0
  },
  {
    q: "HTML stands for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Tool Markup Language"],
    answer: 1
  }
];

let index = 0;
let score = 0;
let time = 10;
let timer;

function loadQuestion() {
    clearInterval(timer);
    time = 10;

    let q = questions[index];

    document.getElementById("question").innerText = q.q;
    document.getElementById("timer").innerText = "Time: " + time;

    // Progress bar
    let progress = (index / questions.length) * 100;
    document.getElementById("bar").style.width = progress + "%";

    // Load options
    let optionsHTML = "";
    q.options.forEach((opt, i) => {
        optionsHTML += `<button onclick="checkAnswer(${i})">${opt}</button>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;

    // Timer logic
    timer = setInterval(() => {
        time--;
        document.getElementById("timer").innerText = "Time: " + time;

        if (time === 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function checkAnswer(ans) {
    if (ans === questions[index].answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);

    document.getElementById("question").innerText = "Quiz Finished!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("timer").innerText = "";
    document.getElementById("score").innerText = "Your Score: " + score;

    document.getElementById("bar").style.width = "100%";
}

loadQuestion();