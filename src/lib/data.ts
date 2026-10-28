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
	resume: 'documents/Keanu_Kerr_Resume.pdf',
	sourceCode: 'https://github.com/keanuk/personal-site',
	reportIssue: 'https://github.com/keanuk/personal-site/issues/new'
} as const;

export const education = [
	{
		institution: 'University of Edinburgh',
		degree: 'MSc in Informatics (Computer Science)',
		period: 'Nov 2019'
	},
	{
		institution: 'University of Florida',
		degree: 'BSc in Computer Science',
		period: 'May 2018'
	}
];

export const skills = {
	languages: ['Go', 'Java', 'Rust', 'Python', 'C', 'C++', 'TypeScript', 'Bash'],
	distributedSystemsAndApis: [
		'Microservices',
		'gRPC',
		'Protobuf',
		'RESTful APIs',
		'Event-Driven Architecture'
	],
	cloudAndInfrastructure: [
		'Kubernetes (K8s)',
		'Docker',
		'AWS',
		'Azure (AKS)',
		'Linux',
		'CI/CD',
		'Git'
	],
	dataAndStorage: [
		'PostgreSQL',
		'Oracle DB',
		'Snowflake',
		'Elasticsearch',
		'Distributed Caching & Search Indexing'
	]
};

export const professionalExperience = [
	{
		title: 'Software Engineer',
		company: 'Bread Financial',
		period: 'Mar 2023 – Present',
		location: 'Philadelphia, PA',
		responsibilities: [
			'Architect, build, and scale low-latency REST and gRPC microservices in Go powering core loan servicing and high-volume digital payment workflows.',
			'Spearheaded the modernization of credit bureau reporting pipelines and financial settlement workflows backed by Snowflake, enforcing strict ACID transactional integrity and auditability.',
			'Standardized inter-service communication across engineering teams by designing unified Protocol Buffer schemas and decoupled, contract-first API architectures.',
			'Orchestrate containerized workloads using Docker and Kubernetes, improving deployment reliability, fault isolation, and horizontal scalability across production environments.'
		]
	},
	{
		title: 'Software Engineer',
		company: 'General Motors',
		period: 'Feb 2020 – Mar 2023',
		location: 'Austin, TX',
		responsibilities: [
			'Engineered high-availability enterprise backend services in Java (Spring Framework, JAX-RS) integrated with high-volume Oracle relational databases.',
			'Architected and tuned a distributed Elasticsearch cluster, redesigning indexing strategies and query execution paths to substantially reduce search API latency.',
			'Established automated CI/CD pipelines and Test-Driven Development (TDD) workflows deploying to Azure Kubernetes Service (AKS), markedly reducing release-cycle defects and deployment friction.'
		]
	}
];

export const openSourceContributions = [
	{
		role: 'Contributor',
		organization: 'Noctalia (Wayland Desktop Shell)',
		period: 'Aug 2026 – Sep 2026',
		url: 'https://github.com/noctalia-dev/noctalia',
		activities: [
			'Engineered an asynchronous ModemManager D-Bus integration to expose real-time cellular state (5G/LTE) and signal-strength telemetry directly within the Wayland shell UI.',
			'Implemented NetworkManager mobile-data state controls and authored comprehensive unit tests covering dynamic glyph rendering and connection state fallbacks.'
		]
	},
	{
		role: 'Contributor',
		organization: 'NixOS (nixpkgs & nixos-hardware)',
		period: 'Jan 2024 – Jun 2025',
		url: 'https://github.com/NixOS',
		activities: [
			'Authored and upstreamed declarative hardware configuration profiles for the Lenovo ThinkPad P14s AMD Gen 5 and HP EliteBook 845 G8, optimizing kernel parameters and power management.',
			'Expanded validation test coverage in nixpkgs-check-by-name to reliably detect and report concurrent schema validation failures in CI.'
		]
	}
];

export const aboutMe = `Backend Software Engineer with 6+ years of experience architecting low-latency distributed systems, high-throughput financial services, and cloud-native infrastructure in Go and Java. Proven track record in schema-first API design, transactional data integrity, and systems-level Linux open-source development.`;
