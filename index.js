const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
  const qDiv = document.querySelector('.question-container');
  qDiv.innerHTML = question.questionText;
}

function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question);

  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

function removeQuestion() {
  const qDiv = document.querySelector('.question-container');
  qDiv.innerHTML = '';
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time)
    .then(() => { removeQuestion() });
}

function trueAndFalseButtons() {
  return [document.querySelector('.btn.green'), document.querySelector('.btn.red')];
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(btn => { 
    btn.classList.contains('hide') ? btn.classList.remove('hide') : btn.classList.add('hide');
  });
}

function displayQuestionOnClick() {
  const askBtn = document.querySelector('.waves-effect');

  askBtn.addEventListener('click', () => {
    toggleTrueAndFalseButtons();
    askQuestionThenRemoveQuestion(10000);
  });
}