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
  }
];

let index = 0;
let score = 0;
let time = 10;
let timer;

function loadQuestion() {
    clearInterval(timer);
    time = 10;
    document.getElementById("timer").innerText = "Time: " + time;

    let q = questions[index];
    document.getElementById("question").innerText = q.q;

    let optionsHTML = "";
    q.options.forEach((opt, i) => {
        optionsHTML += `<button onclick="checkAnswer(${i})">${opt}</button><br>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;

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
        document.getElementById("question").innerText = "Quiz Finished!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("score").innerText = "Score: " + score;
        document.getElementById("timer").innerText = "";
    }
}

loadQuestion();