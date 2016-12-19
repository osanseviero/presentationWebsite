var skills = [
	{
		'name' : 'Web Develpment',
		'description' : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate perferendis quos architecto reprehenderit quam pariatur dolor obcaecati veritatis ad soluta impedit reiciendis, eos nulla officia similique, voluptatum esse quas magnam.",
		'skills' : ['HTML', 'CSS'] 
		
	},
	{
		'name' : 'Video Game Devopment',
		'description' : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate perferendis quos architecto reprehenderit quam pariatur dolor obcaecati veritatis ad soluta impedit reiciendis, eos nulla officia similique, voluptatum esse quas magnam.",
		'skills' : ['Unity', 'Vuforia'] 
		
	},
	{
		'name' : 'Video Game Devopment',
		'description' : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate perferendis quos architecto reprehenderit quam pariatur dolor obcaecati veritatis ad soluta impedit reiciendis, eos nulla officia similique, voluptatum esse quas magnam.",
		'skills' : ['Unity', 'Vuforia'] 
		
	}
];


var cardOpening = '<paper-card class="skill" heading="%data%" image="http://placehold.it/300x150/FFC107/000000" alt="%data%"></paper-card>';
var cardContent = '<div class="card-content">%data%</div>';


var skillSection = document.getElementById('skills')

var formattedOpening, formattedContent, skill;

for(var i = 0; i < skills.length; i++) {
	skill = skills[i];
	formattedOpening = document.createElement('div');
	formattedOpening.innerHTML = cardOpening.replace('%data%', skill.name);

	formattedContent = document.createElement('div');
	formattedContent.innerHTML = cardContent.replace('%data%', skill.description);

	formattedOpening.firstChild.appendChild(formattedContent);

	skillSection.appendChild(formattedOpening);
}