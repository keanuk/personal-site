// Personal information and data for the portfolio website

export const personalInfo = {
	firstName: 'Keanu',
	lastName: 'Kerr',
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
	email: 'keanu@kerr.us',
	alternateEmail: 'keanukerr@gmail.com',
	location: 'Philadelphia, Pennsylvania',
	jobTitle: 'Software Engineer',
	company: 'Bread Financial'
};

export const socialLinks = {
	github: 'https://github.com/keanuk',
	linkedin: 'https://www.linkedin.com/in/keanukerr/',
	gitlab: 'https://gitlab.com/keanuk',
	email: `mailto:${personalInfo.email}`,
	resume: '/documents/Keanu_Kerr_Resume.pdf',
	sourceCode: 'https://github.com/keanuk/personal-site',
	reportIssue: 'https://github.com/keanuk/personal-site/issues/new'
};

export const education = [
	{
		institution: 'University of Edinburgh',
		degree: 'MSc in Informatics',
		type: 'Master of Science'
	},
	{
		institution: 'University of Florida',
		degree: 'BSc in Computer Science',
		type: 'Bachelor of Science',
		additional: 'Minor in Studio Art'
	}
];

export const skills = {
	programmingLanguages: [
		'Go',
		'Java',
		'Rust',
		'Python',
		'TypeScript',
		'JavaScript',
		'C++',
		'C',
		'Bash'
	],
	frameworksAndLibraries: ['Protobuf', 'Spring', 'JAX-RS', 'Node', 'Angular', 'Elasticsearch'],
	technologiesAndServices: [
		'Linux',
		'Git',
		'REST',
		'gRPC',
		'PostgreSQL',
		'Docker',
		'Kubernetes',
		'AWS',
		'Azure'
	]
};

export const workExperience = [
	{
		title: 'Software Engineer',
		company: 'Bread Financial',
		period: 'March 2023 - Present',
		responsibilities: [
			'Developed REST and gRPC APIs in Go, integrating with PostgreSQL databases for financial services',
			'Implemented features for loan processing, payment systems, and credit bureau reporting workflows',
			'Containerized and deployed microservices using Docker on Kubernetes infrastructure'
		]
	},
	{
		title: 'Software Engineer',
		company: 'General Motors',
		period: 'February 2020 - March 2023',
		responsibilities: [
			'Developed REST APIs using Spring Framework and JAX-RS with Oracle database integration',
			'Improved search API performance with Elasticsearch cluster implementation and optimization',
			'Implemented TDD methodology and CI/CD pipelines using Docker on Azure Kubernetes Service'
		]
	},
	{
		title: 'Software Engineer Intern',
		company: 'Elgato',
		period: 'May 2016 - August 2016',
		responsibilities: [
			'Developed JavaScript test overlays for Game Capture software to improve QA testing efficiency',
			'Built internal metrics dashboard using Angular for real-time application monitoring',
			'Collaborated across development teams using Git workflows for internal web application development'
		]
	}
];

export const projects = [
	{
		title: "Master's Dissertation Project",
		period: 'April 2019 - August 2019',
		description: [
			'Developed multiplayer RPG in Java using JavaFX GUI and peer-to-peer networking architecture',
			'Implemented OO design patterns to create an educational framework for computer science students',
			'Authored comprehensive documentation including setup guides and extensibility framework'
		]
	},
	{
		title: 'Senior Project',
		period: 'January 2018 - May 2018',
		description: [
			'Developed Angular web application for custom game character creation with dynamic form validation',
			'Built Go backend service with REST API for user profile management and character data persistence',
			'Deployed full-stack application on self-managed Linux server infrastructure'
		]
	}
];

export const communityInvolvement = [
	{
		role: 'Contributor',
		organization: 'Nixpkgs',
		period: '2024 - Present',
		activities: [
			'Contributed unit tests and bug fixes to improve package reliability',
			'Add nixos-hardware configurations to improve device compatibility'
		]
	}
];

export const aboutMe = `My name is Keanu Kerr and I am currently a software engineer at Bread Financial.
I am an alumni of the University of Edinburgh where I graduated with a master of
science in informatics. I previously graduated from the University of Florida where
I obtained a bachelor of science in computer science along with a minor in studio art.`;
