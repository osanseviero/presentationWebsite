var skills = [
	{
		'name' : 'Web Development',
		'description' : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate perferendis quos architecto reprehenderit quam pariatur dolor obcaecati veritatis ad soluta impedit reiciendis, eos nulla officia similique, voluptatum esse quas magnam.",
		'skills' : ['HTML', 'CSS'],
		'image' : 'http://placehold.it/300x150/FFC107/000000'
		
	},
	{
		'name' : 'Video Game Development',
		'description' : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate perferendis quos architecto reprehenderit quam pariatur dolor obcaecati veritatis ad soluta impedit reiciendis, eos nulla officia similique, voluptatum esse quas magnam.",
		'skills' : ['Unity', 'Vuforia'],
		'image' : 'http://placehold.it/300x150/55E1FF/000000'
		
	},
	{
		'name' : 'Video Game Development',
		'description' : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate perferendis quos architecto reprehenderit quam pariatur dolor obcaecati veritatis ad soluta impedit reiciendis, eos nulla officia similique, voluptatum esse quas magnam.",
		'skills' : ['Unity', 'Vuforia'],
		'image' : 'http://placehold.it/300x150/63FF51/000000'
	},

];


var cardOpening = '<paper-card class="skill" heading="%data%" image="%img%" alt="%data%"></paper-card>';
var cardContent = '<div class="card-content">%data%</div>';


var skillSection = document.getElementById('skills')

var skillElement, formattedOpening, contentElement, skill, formattedHTML;

for(var i = 0; i < skills.length; i++) {
	skill = skills[i];
	skillElement = document.createElement('div');

	formattedOpening = cardOpening.replace('%data%', skill.name);
	formattedOpening = formattedOpening.replace('%img%', skill.image);
	skillElement.innerHTML = formattedOpening;

	contentElement = document.createElement('div');
	contentElement.innerHTML = cardContent.replace('%data%', skill.description);

	skillElement.firstChild.appendChild(contentElement);

	skillSection.appendChild(skillElement);
}