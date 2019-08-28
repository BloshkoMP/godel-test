import {newQuiz} from './quiz.js';
let counter = 0,
	id = 0,
	score = 0;
const quiz = newQuiz();
const question = document.querySelector('.question-text');
const result = document.querySelector('.result');
const answers = [
	document.querySelector('.first'),
	document.querySelector('.second'),
	document.querySelector('.third'),
	document.querySelector('.fourth')
];
answers.forEach((element, index) => {
	element.addEventListener('click', () => {
		event.stopPropagation();
		check(element);
	});
});

temp();

function temp(element) {
	if (id < 4) {
		question.innerHTML = quiz[id].question;
		answers.forEach((element, index) => {
			element.value = quiz[id].answer[index];
		});
	} else {
		result.innerText = `Score is ${score}`;
		id = 0;
		setTimeout(_ => {
			location.reload();
		}, 5000);
	}
}

function check(element) {
	console.log(id);
	console.log(element);

	if (element.value === quiz[id].rightAnswer) {
		element.classList.add('done');

		setTimeout(_ => {
			id++;
			score += 20;

			element.classList.remove('done');
			temp();
		}, 2000);
	} else {
		element.classList.add('nope');
		setTimeout(_ => {
			id++;

			element.classList.remove('nope');
			temp();
		}, 2000);
	}
}
