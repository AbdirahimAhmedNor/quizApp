// window.addEventListener('contentLoaded',loadquiz)
const questions = [
  {
    question: 'who is the president of somalia?',
    a: 'mohamed abdulahi',
    b: 'hasan ali',
    c: 'mohamed siyad',
    d: 'abdirahim',
    correct: 'a',
  },
  {
    question: 'who is the last prophet in islam?',
    a: 'moses',
    b: 'jesus',
    c: 'mohamed',
    d: 'noah',
    correct: 'c',
  },
  {
    question: 'How old is Abdirahim?',
    a: '10',
    b: '15',
    c: '17',
    d: '23',
    correct: 'd',
  },
  {
    question: 'who is my best friend?',
    a: 'Abdullahi',
    b: 'jelaani',
    c: 'Abdulqadir',
    d: 'Abdirahim',
    correct: 'c',
  },
];
//loading DOM objects.
const lists = document.querySelectorAll('.list');
const submitBtn = document.querySelector('.submit');
const question_input = document.querySelector('.question-input');
const answer1 = document.querySelector('.a');
const answer2 = document.querySelector('.b');
const answer3 = document.querySelector('.c');
const answer4 = document.querySelector('.d');
let currentquiz = 0;
let currentquestion = questions[currentquiz]
loadquiz();
function loadquiz() {
  currentquestion = questions[currentquiz];
  question_input.innerText = questions[currentquiz].question;
  answer1.innerText = questions[currentquiz].a;
  answer2.innerText = questions[currentquiz].b;
  answer3.innerText = questions[currentquiz].c;
  answer4.innerText = questions[currentquiz].d;
  // answerValidation(currentquestion);
}
//changing the background color.
lists.forEach(list => {
  list.addEventListener('click', function () {
    removecolor();
    list.classList.toggle('color');
  });
});
function removecolor() {
  lists.forEach(list => {
    list.classList.remove('color');
  });
}

function nextQuestion () {
  const answer = document.querySelector('.color');
  console.log(answer.id)
  if (currentquestion.correct !== answer.id) return;
  console.log('question length: ', questions.length);
  console.log('currentquiz: ', currentquiz)
  if (currentquiz >= questions.length - 1) {
    const promp = prompt('you completed type R to repeat or cancel');
    if (promp.toLowerCase() === 'r') location.reload()
  }
  else {
    currentquiz++;
    currentquestion = questions[currentquiz]
    loadquiz();
  }
}
