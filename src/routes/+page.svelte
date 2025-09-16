<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ThemedAsset from '$lib/components/ThemedAsset.svelte';
	import {
		personalInfo,
		socialLinks,
		education,
		skills,
		workExperience,
		projects,
		communityInvolvement,
		aboutMe
	} from '$lib/data';

	/**
	 * @param {string} url
	 */
	function goTo(url) {
		window.open(url, '_blank');
	}
</script>

<svelte:head>
	<title>{personalInfo.fullName} - Software Engineer</title>
	<meta
		name="description"
		content="Personal portfolio of {personalInfo.fullName}, Software Engineer at {personalInfo.company}"
	/>
</svelte:head>

<Navbar />

<div class="page-content">
	<!-- Hero Section -->
	<section class="hero">
		<div class="hero-background">
			<h1 class="hero-title">{personalInfo.fullName}</h1>
		</div>
	</section>

	<!-- Quick Links Cards -->
	<section class="quick-links">
		<div class="cards-container">
			<div
				class="card"
				tabindex="0"
				role="button"
				on:click={() => goTo(socialLinks.github)}
				on:keydown={(e) => e.key === 'Enter' && goTo(socialLinks.github)}
			>
				<div class="card-content">
					<ThemedAsset src="/logo/GitHub/black.svg" alt="GitHub" className="card-icon" />
					<span>View my work on</span>
					<span class="card-highlight">GitHub</span>
				</div>
			</div>

			<div
				class="card"
				tabindex="0"
				role="button"
				on:click={() => goTo(socialLinks.linkedin)}
				on:keydown={(e) => e.key === 'Enter' && goTo(socialLinks.linkedin)}
			>
				<div class="card-content">
					<ThemedAsset src="/logo/LinkedIn/black.png" alt="LinkedIn" className="card-icon" />
					<span>View my profile on</span>
					<span class="card-highlight">LinkedIn</span>
				</div>
			</div>

			<div
				class="card"
				tabindex="0"
				role="button"
				on:click={() => goTo(socialLinks.email)}
				on:keydown={(e) => e.key === 'Enter' && goTo(socialLinks.email)}
			>
				<div class="card-content">
					<ThemedAsset src="/icons/Email/black.svg" alt="Email" className="card-icon" />
					<span>Send me an</span>
					<span class="card-highlight">Email</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Main Content -->
	<div class="main-content">
		<!-- About Me -->
		<section class="content-section">
			<h2>About Me</h2>
			<div class="about-content">
				<p class="about-text">{aboutMe}</p>
			</div>
		</section>

		<!-- Resume Download -->
		<section class="content-section center-text">
			<a href={socialLinks.resume} class="resume-link" download>
				<ThemedAsset src="/icons/Attachment/black.svg" alt="Resume" className="attachment-icon" />
				Download My Resume
			</a>
		</section>

		<!-- Education -->
		<section class="content-section gray-background">
			<div class="section-content">
				<h2>Education</h2>
				<ul class="no-dot-list center-text">
					{#each education as edu}
						<li class="subtitle">{edu.institution}</li>
						<li>{edu.degree}</li>
						{#if edu.additional}
							<li>{edu.additional}</li>
						{/if}
					{/each}
				</ul>
			</div>
		</section>

		<!-- Skills -->
		<section class="content-section">
			<h2>Skills</h2>
			<div class="skills-container">
				<div class="skill-category">
					<span class="subtitle">Programming Languages</span>
					<ul class="no-dot-list">
						{#each skills.programmingLanguages as lang}
							<li>{lang}</li>
						{/each}
					</ul>
				</div>
				<div class="skill-category">
					<span class="subtitle">Frameworks & Libraries</span>
					<ul class="no-dot-list">
						{#each skills.frameworksAndLibraries as framework}
							<li>{framework}</li>
						{/each}
					</ul>
				</div>
				<div class="skill-category">
					<span class="subtitle">Technologies & Services</span>
					<ul class="no-dot-list">
						{#each skills.technologiesAndServices as tech}
							<li>{tech}</li>
						{/each}
					</ul>
				</div>
			</div>
		</section>

		<!-- Work Experience -->
		<section class="content-section gray-background">
			<div class="section-content">
				<h2>Work Experience</h2>
				{#each workExperience as job}
					<div class="experience-item">
						<div class="experience-header">
							<span class="subtitle">{job.title}, {job.company}</span>
							<span class="sub-year">{job.period}</span>
						</div>
						<ul class="dot-list">
							{#each job.responsibilities as responsibility}
								<li>{responsibility}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</section>

		<!-- Projects -->
		<section class="content-section">
			<h2>Projects</h2>
			{#each projects as project}
				<div class="experience-item">
					<div class="experience-header">
						<span class="subtitle">{project.title}</span>
						<span class="sub-year">{project.period}</span>
					</div>
					<ul class="dot-list">
						{#each project.description as desc}
							<li>{desc}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</section>

		<!-- Community Involvement -->
		<section class="content-section gray-background">
			<div class="section-content">
				<h2>Community Involvement</h2>
				{#each communityInvolvement as involvement}
					<div class="experience-item">
						<div class="experience-header">
							<span class="subtitle">{involvement.role}, {involvement.organization}</span>
							<span class="sub-year">{involvement.period}</span>
						</div>
						<ul class="dot-list">
							{#each involvement.activities as activity}
								<li>{activity}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</section>
	</div>
</div>

<Footer />

<style>
	.page-content {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	/* Hero Section */
	.hero {
		position: relative;
		height: 480px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.hero-background {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--primary-gradient);
		color: white;
	}

	.hero-title {
		font-size: 9rem;
		font-weight: bold;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
		margin: 0;
		text-align: center;
	}

	/* Quick Links */
	.quick-links {
		padding: 3rem 1rem;
		background: var(--background-color);
		display: flex;
		justify-content: center;
	}

	.cards-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: clamp(1rem, 3vw, 2rem);
		max-width: min(950px, 95vw);
		width: 100%;
		padding: 0 1rem;
	}

	.card {
		background: var(--background-color);
		border-radius: var(--border-radius);
		box-shadow: var(--card-shadow);
		padding: 2rem 1rem;
		text-align: center;
		cursor: pointer;
		transition:
			box-shadow 0.3s ease,
			transform 0.2s ease,
			background-color 0.2s ease;
		min-height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card:hover,
	.card:focus {
		box-shadow: var(--card-shadow-hover);
		transform: translateY(-2px);
		outline: none;
	}

	.card-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.25rem;
		font-weight: 300;
	}

	.card-highlight {
		font-weight: 500;
	}

	/* Main Content */
	.main-content {
		flex: 1;
	}

	.content-section {
		width: 100%;
		padding: 2rem 1rem;
	}

	.section-content {
		max-width: var(--max-content-width);
		margin: 0 auto;
	}

	.content-section:not(.gray-background) .section-content,
	.content-section:not(.gray-background) > * {
		max-width: var(--max-content-width);
		margin-left: auto;
		margin-right: auto;
	}

	/* About Section */
	.about-content {
		max-width: var(--max-content-width);
		margin: 0 auto;
	}

	.about-text {
		font-size: 1.1rem;
		font-weight: 400;
		text-align: justify;
		line-height: 1.8;
		margin: 0 5% 0 5%;
	}

	/* Resume Link */
	.resume-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.1rem;
		font-weight: 500;
		color: var(--primary-color);
		text-decoration: none;
		padding: 0.75rem 1.5rem;
		border: 2px solid var(--primary-color);
		border-radius: 8px;
		transition: all 0.2s ease;
	}

	.resume-link:hover {
		background-color: var(--primary-color);
		color: white;
	}

	:global(.card-icon) {
		width: 60px;
		height: 60px;
		margin-bottom: 1rem;
	}

	:global(.attachment-icon) {
		width: 24px;
		height: 24px;
	}

	/* Skills */
	.skills-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: clamp(1rem, 3vw, 2rem);
		margin: 2rem auto;
		max-width: min(1200px, 95vw);
		padding: 0 1rem;
	}

	/* Move to 2-column layout for skills */
	@media (max-width: 1100px) {
		.skills-container {
			grid-template-columns: repeat(2, 1fr);
			max-width: min(900px, 90vw);
			gap: clamp(1rem, 2.5vw, 1.5rem);
		}
	}

	/* Center third skill item in ALL 2-column scenarios - higher specificity */
	@media (max-width: 1100px) {
		.skills-container .skill-category:nth-child(3):nth-last-child(1) {
			grid-column: 1 / -1 !important;
			max-width: 300px !important;
			margin: 0 auto !important;
		}
	}

	.skill-category {
		text-align: center;
	}

	.skill-category .subtitle {
		display: block;
		margin-bottom: 1rem;
	}

	/* Experience Items */
	.experience-item {
		margin-bottom: 2rem;
		max-width: var(--max-content-width);
		margin-left: auto;
		margin-right: auto;
	}

	.experience-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.5rem;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	/* Tablet Responsive Design */
	@media (max-width: 1024px) {
		.hero-title {
			font-size: 3.5rem;
		}

		.cards-container {
			grid-template-columns: repeat(2, 1fr);
			max-width: min(600px, 90vw);
			gap: clamp(1rem, 2.5vw, 1.5rem);
		}

		/* Center third card when in 2+1 layout - maintain card size */
		.cards-container .card:nth-child(3):nth-last-child(1) {
			grid-column: 1 / -1;
			width: 250px;
			margin: 0 auto;
		}
	}

	/* Tablet Portrait and Small Desktop */
	@media (max-width: 768px) {
		.hero-title {
			font-size: 3rem;
		}

		.cards-container {
			grid-template-columns: 1fr;
			gap: clamp(1rem, 3vw, 1.5rem);
			max-width: 100%;
		}

		.card {
			min-height: 180px;
		}

		.card-content {
			font-size: 1.1rem;
		}

		:global(.card-icon) {
			width: 50px;
			height: 50px;
		}

		/* Reset grid column spanning for mobile */
		.cards-container .card:nth-child(3):nth-last-child(1),
		.skills-container .skill-category:nth-child(3):nth-last-child(1) {
			grid-column: auto;
			max-width: none;
			width: auto;
			margin: 0;
		}

		.about-text {
			margin: 0 2% 0 2%;
			text-align: left;
		}

		.experience-header {
			flex-direction: column;
			align-items: flex-start;
		}

		.sub-year {
			float: none;
		}
	}

	/* Mobile Landscape and Small Tablets */
	@media (max-width: 640px) {
		.skills-container {
			grid-template-columns: 1fr;
			gap: clamp(1rem, 3vw, 1.5rem);
			max-width: 100%;
			padding: 0;
		}

		/* Only reset centering when actually in single column */
		.skills-container .skill-category:nth-child(3):nth-last-child(1) {
			grid-column: auto !important;
			max-width: none !important;
			margin: 0 !important;
		}

		.hero-title {
			font-size: 2.75rem;
		}
	}

	/* Mobile Portrait */
	@media (max-width: 480px) {
		.hero-title {
			font-size: 2.5rem;
		}

		.content-section {
			padding: 1.5rem 0.5rem;
		}

		.skills-container {
			gap: 1rem;
			margin: 1.5rem auto;
			padding: 0;
		}

		.skill-category .subtitle {
			font-size: 1rem;
		}
	}

	/* Small Mobile */
	@media (max-width: 360px) {
		.hero-title {
			font-size: 2.25rem;
		}

		.content-section {
			padding: 1rem 0.25rem;
		}

		.cards-container {
			gap: 1rem;
		}

		.skills-container {
			gap: 0.75rem;
			margin: 1rem auto;
		}

		.skill-category .subtitle {
			font-size: 0.95rem;
			margin-bottom: 0.75rem;
		}

		.skill-category li {
			font-size: 0.9rem;
			margin-bottom: 0.375rem;
		}
	}
</style>
