const quiz = [
	{
		question: 'Сколько стоит талончик?',
		answer: ['10рублей', '20рублей', '30рублей', '60копеек'],
		rightAnswer: '60копеек'
	},
	{
		question: 'Какой сейчас год?',
		answer: ['2019', '2001', '2219', '2039'],
		rightAnswer: '2019'
	},
	{
		question: 'Что зайцы косили на поляне?',
		answer: ['Доллары', 'Евро', 'Трын-траву', 'Рубли'],
		rightAnswer: 'Трын-траву'
	},
	{
		question: 'Кто хочет стать миллионером?',
		answer: ['Я', 'Не я', 'Он', 'Ты'],
		rightAnswer: 'Я'
	},
	{
		question: 'К скольки нужно было придти на собеседывание?',
		answer: ['к 18:00', 'к 20:00', 'к 17:00', 'к 10:00'],
		rightAnswer: 'к 17:00'
	}
];

export function newQuiz() {
	let newQuiz = quiz.sort(function() {
		return 0.5 - Math.random();
	});
	newQuiz.map(item => {
	
		item.answer.sort(function() {
			return 0.5 - Math.random();
		});
	});
	return newQuiz;
}
