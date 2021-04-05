// window.addEventListener('contentLoaded',loadquiz)
const questions = [
{
	question:'who is the president of somalia?',
	a:'mohamed abdulahi',
	b:'hasan ali',
	c:'mohamed siyad',
	d:'abdirahim',
	correct:'a'
},{
	question:'who is the last prophet in islam?',
	a:'moses',
	b:'jesus',
	c:'mohamed',
	d:'noah',
	correct:'c'
},{
	question:'How old is Abdirahim?',
	a:'10',
	b:'15',
	c:'17',
	d:'23',
	correct:'d'
},{
	question:'who is my best friend?',
	a:'Abdullahi',
	b:'jelaani',
	c:'Abdulqadir',
	d:'Abdirahim',
	correct:'c'
}
]
//loading DOM objects.
const submitBtn = document.querySelector('.submit');
const question_input = document.querySelector('.question-input');
const answer1 = document.querySelector('.a');
const answer2 = document.querySelector('.b');
const answer3 = document.querySelector('.c');
const answer4 = document.querySelector('.d');
let currentquiz = 0;
loadquiz();

function loadquiz(){
	let currentquestion = questions[currentquiz].question;
	question_input.innerText = currentquestion
	answer1.innerText = questions[currentquiz].a;
	answer2.innerText = questions[currentquiz].b;
	answer3.innerText = questions[currentquiz].c;
	answer4.innerText = questions[currentquiz].d;
}
//changing the background color.
const lists = document.querySelectorAll('.list');
lists.forEach(list =>{
	list.addEventListener('click',function(){
		removecolor();
		list.classList.toggle('color');
	})
})
function removecolor(){
	lists.forEach(list =>{
		list.classList.remove('color')
	})
}
//for the submit button

function checkingCorrect(){
	lists.forEach(list =>{
		list.addEventListener('click',function(){
			let correctAnswer = list.id;
			correValue(correctAnswer);
			submitBtn.addEventListener('click',function(){
				removecolor();
				let answer = correValue(correctAnswer);
				if(answer === questions[currentquiz].correct){
					if (currentquiz < questions.length) {
						currentquiz++;
						loadquiz();
					}else if(currentquiz > questions.length){
						console.log('hi')
					}
					
				}else{return}
})
		})
	})


}
	checkingCorrect();
function correValue(correctAnswer) {
	let final = correctAnswer;
	return final
}
