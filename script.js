 const quizzes = {
      blood: {
        title: "Blood Collection Equipment Quiz",
        questions: [
                
        ]
      },
      capi: {
        title: "Capillary Puncture",
        questions: [

        ]
      },
      veni: {
        title: "Venipuncture",
        questions: [
        
        ]
      },
      hemo: {
        title: "Hemoglobin Determination",
        questions: [
   
        ]
      },
      hema: {
        title: "Hematocrit Determination",
        questions: [

        ]
      }
    };

    let currentQuiz = null;
    let currentIndex = 0;
    let score = 0;
    let userAnswers = [];

    function selectQuiz(key) {
      currentQuiz = quizzes[key];
      startQuiz();
    }

    function startQuiz() {
      currentIndex = 0;
      score = 0;
      userAnswers = [];
      showQuestions();
    }

    function showQuestions() {
      const container = document.getElementById('app');
      container.innerHTML = '';

      // Header with Exit button
      const header = document.createElement('div');
      header.className = 'clearfix';
      header.innerHTML = `
        <h2 style="float:left">${currentQuiz.title}</h2>
        <button class="btn exit-btn" onclick="exitQuiz()">Exit Quiz ✖</button>
      `;
      container.appendChild(header);

      const quizDiv = document.createElement('div');
      const end = Math.min(currentIndex + 3, currentQuiz.questions.length);

      for (let i = currentIndex; i < end; i++) {
        const qDiv = document.createElement('div');
        qDiv.className = 'question';
        qDiv.innerHTML = `<h3>Q${i+1}. ${currentQuiz.questions[i].q}</h3>`;
        const optsDiv = document.createElement('div');
        optsDiv.className = 'options';
        currentQuiz.questions[i].options.forEach((opt, idx) => {
          optsDiv.innerHTML += `
            <label>
              <input type="radio" name="q${i}" value="${idx}">
              ${opt}
            </label>`;
        });
        qDiv.appendChild(optsDiv);
        quizDiv.appendChild(qDiv);
      }

      const btn = document.createElement('button');
      btn.className = 'btn';
      btn.textContent = (end === currentQuiz.questions.length) ? 'Finish Quiz' : 'Next';
      btn.onclick = () => submitAnswers(end);
      quizDiv.appendChild(btn);

      const progress = document.createElement('div');
      progress.className = 'progress';
      progress.textContent = `Question ${end} of ${currentQuiz.questions.length}`;
      quizDiv.appendChild(progress);

      container.appendChild(quizDiv);
    }

    function submitAnswers(end) {
      for (let i = currentIndex; i < end; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        const answer = selected ? parseInt(selected.value) : -1;
        userAnswers[i] = answer;
        if (answer === currentQuiz.questions[i].answer) {
          score++;
        }
      }
      currentIndex = end;
      if (currentIndex >= currentQuiz.questions.length) {
        showResults();
      } else {
        showQuestions();
      }
    }

    function showResults() {
      const container = document.getElementById('app');
      container.innerHTML = `
        <div class="clearfix">
          <h2 style="float:left">${currentQuiz.title} Complete!</h2>
          <button class="btn exit-btn" onclick="exitQuiz()">Exit Quiz ✖</button>
        </div>
        <p>Your Score: ${score} / ${currentQuiz.questions.length}</p>
        <div class="review">
          <h3>Review:</h3>
          ${currentQuiz.questions.map((q, i) => {
            const correct = q.answer;
            const user = userAnswers[i];
            return `
              <div>
                <strong>Q${i+1}:</strong> ${q.q}<br>
                Your Answer: ${user>=0?q.options[user]:"<em>Not answered</em>"}<br>
                Correct Answer: <span class="correct">${q.options[correct]}</span>
                ${user===correct?'<span class="correct"> ✔</span>':'<span class="wrong"> ✖</span>'}
              </div>
              <hr>`;
          }).join('')}
        </div>
        <button class="btn" onclick="location.reload()">🔙 Back to Quiz List</button>
      `;
    }

    function exitQuiz() {
      location.reload();
    }