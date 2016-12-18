var questions = [
	{
		'question' : 'Who are you?',
		'answer' : "I'm a software developer" 
	},
	{
		'question' : 'What can you do?',
		'answer' : 'Solve your technical problems'
	}
];


var questionElement = '<h3>%data%</h3>';
var answerElement = '<p>%data%</p>'

var faq = document.getElementById('faq')

var question, formattedQuestion, formattedAnswer, elem;
for(var i = 0; i < questions.length; i++) {
	question = questions[i];
	formattedQuestion = document.createElement('div');
	formattedQuestion.innerHTML = questionElement.replace('%data%', question.question);

	formattedAnswer = document.createElement('p');
	formattedAnswer.innerHTML = answerElement.replace('%data%', question.answer);


	faq.appendChild(formattedQuestion)
	faq.appendChild(formattedAnswer);
}