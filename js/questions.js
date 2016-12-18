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

var question, formattedQuestion, formattedAnswer;
for(var i = 0; i < questions.length; i++) {
	question = questions[i];
	formattedQuestion = questionElement.replace('%data%', question.question)
	formattedAnswer = answerElement.replace('%data%', question.answer);
	$('#faq').append(formattedQuestion + formattedAnswer);
}