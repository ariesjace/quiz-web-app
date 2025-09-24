let quizzes = {
  quiz1: [
    {
      question: "Placeholder Q1 (Quiz 1)?",
      options: ["A", "B", "C", "D"],
      answer: 0
    },
    {
      question: "Placeholder Q2 (Quiz 1)?",
      options: ["A", "B", "C", "D"],
      answer: 1
    },
    {
      question: "Placeholder Q3 (Quiz 1)?",
      options: ["A", "B", "C", "D"],
      answer: 2
    },
    {
      question: "Placeholder Q4 (Quiz 1)?",
      options: ["A", "B", "C", "D"],
      answer: 3
    },
    {
      question: "Placeholder Q5 (Quiz 1)?",
      options: ["A", "B", "C", "D"],
      answer: 1
    }
  ],
  quiz2: [
    {
      question: "Placeholder Q1 (Quiz 2)?",
      options: ["A", "B", "C", "D"],
      answer: 2
    },
    {
      question: "Placeholder Q2 (Quiz 2)?",
      options: ["A", "B", "C", "D"],
      answer: 0
    }
  ],
  quiz3: [
    {
      question: "Placeholder Q1 (Quiz 3)?",
      options: ["A", "B", "C", "D"],
      answer: 1
    },
    {
      question: "Placeholder Q2 (Quiz 3)?",
      options: ["A", "B", "C", "D"],
      answer: 3
    }
  ]
};

let currentQuiz = [];
let userAnswers = [];
let currentPage = 0;
const pageSize = 5;

function selectQuiz(key) {
  currentQuiz = quizzes[key];
  userAnswers = new Array(currentQuiz.length).fill(null);
  currentPage = 0;
  document.getElementById("quizSelection").style.display = "none";
  document.getElementById("quizScreen").style.display = "block";
  loadPage();
}

function loadPage() {
  const start = currentPage * pageSize;
  const end = Math.min(start + pageSize, currentQuiz.length);
  const questionsArea = document.getElementById("questionsArea");
  questionsArea.innerHTML = "";
  document.getElementById("progress").innerText =
    `Questions ${start + 1}-${end} of ${currentQuiz.length}`;

  for (let i = start; i < end; i++) {
    const q = currentQuiz[i];
    const div = document.createElement("div");
    div.classList.add("question-block");
    div.innerHTML = `<p><strong>Q${i + 1}:</strong> ${q.question}</p>`;
    q.options.forEach((opt, idx) => {
      const checked = userAnswers[i] === idx ? "checked" : "";
      div.innerHTML += `
        <label class="option">
          <input type="radio" name="q${i}" value="${idx}" ${checked} 
            onchange="userAnswers[${i}] = ${idx}">
          ${opt}
        </label>
      `;
    });
    questionsArea.appendChild(div);
  }
}

function nextPage() {
  if ((currentPage + 1) * pageSize < currentQuiz.length) {
    currentPage++;
    loadPage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    loadPage();
  }
}

function finishQuiz() {
  let score = 0;
  let reviewHTML = "";
  currentQuiz.forEach((q, idx) => {
    const userAns = userAnswers[idx];
    if (userAns === q.answer) score++;
    const correct = q.options[q.answer];
    const userText = userAns !== null ? q.options[userAns] : "Not answered";
    const cls = userAns === q.answer ? "correct" : "incorrect";
    reviewHTML += `
      <p><strong>Q${idx + 1}:</strong> ${q.question}<br>
      Your Answer: <span class="${cls}">${userText}</span><br>
      Correct Answer: <span class="correct">${correct}</span></p>
    `;
  });

  document.getElementById("quizScreen").style.display = "none";
  document.getElementById("resultScreen").style.display = "block";
  document.getElementById("score").innerText =
    `You scored ${score} out of ${currentQuiz.length}`;
  document.getElementById("review").innerHTML = reviewHTML;
}

function restartQuiz() {
  document.getElementById("resultScreen").style.display = "none";
  document.getElementById("quizSelection").style.display = "block";
}

function exitQuiz() {
  if (confirm("Are you sure you want to exit? Progress will be lost.")) {
    document.getElementById("quizScreen").style.display = "none";
    document.getElementById("quizSelection").style.display = "block";
  }
}