const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "Which language runs in a browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System"
    ],
    answer: "Cascading Style Sheets"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

let selectedAnswer = null;

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";
  selectedAnswer = null;

  current.options.forEach(option => {
    const btn = document.createElement("div");
    btn.textContent = option;
    btn.classList.add("option");

    btn.addEventListener("click", () => {
      selectedAnswer = option;

      document.querySelectorAll(".option").forEach(opt => {
        opt.style.background = "#eee";
        opt.style.color = "#000";
      });
      btn.style.background = "#000";
      btn.style.color = "#fff";
    });

    optionsEl.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  if (!selectedAnswer) {
    alert("Please select an answer!");
    return;
  }

  if (selectedAnswer === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.querySelector(".quiz-container").classList.add("hidden");
  resultEl.classList.remove("hidden");

  resultEl.innerHTML = `
    <h2>Your Score: ${score} / ${quizData.length}</h2>
    <p>${score >= 2 ? "Good job!" : "Try again!"}</p>
  `;
}

loadQuestion();