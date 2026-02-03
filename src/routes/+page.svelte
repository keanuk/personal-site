<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ThemedAsset from '$lib/components/ThemedAsset.svelte';
	import SquigglyLine from '$lib/components/SquigglyLine.svelte';
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

	// Import external stylesheets
	import '../styles/page.css';
	import '../styles/components.css';

	/**
	 * @param {string} url
	 */
	function goTo(url) {
		window.open(url, '_blank');
	}

	// Skill categories with colors
	const skillCategories = [
		{ title: 'Languages', items: skills.programmingLanguages, colorClass: 'chip-primary' },
		{ title: 'Frameworks', items: skills.frameworksAndLibraries, colorClass: 'chip-secondary' },
		{ title: 'Technologies', items: skills.technologiesAndServices, colorClass: 'chip-tertiary' }
	];
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
			<div class="hero-content">
				<span class="hero-greeting">Hello, I'm</span>

				<!-- Squiggly line above title -->
				<div class="hero-squiggle-row">
					<SquigglyLine color="rgba(255,255,255,0.4)" strokeWidth={3} amplitude={8} />
				</div>

				<h1 class="hero-title">{personalInfo.fullName}</h1>

				<!-- Squiggly line below title -->
				<div class="hero-squiggle-row">
					<SquigglyLine color="rgba(255,255,255,0.3)" strokeWidth={2} amplitude={6} />
				</div>

				<p class="hero-subtitle">{personalInfo.jobTitle}</p>
			</div>
		</div>
	</section>

	<!-- Quick Links - M3 Tonal Button Style -->
	<section class="quick-links">
		<div class="cards-container">
			<button class="link-button link-github" on:click={() => goTo(socialLinks.github)}>
				<ThemedAsset src="/logo/GitHub/black.svg" alt="GitHub" className="link-icon" />
				<span class="link-text">GitHub</span>
			</button>

			<button class="link-button link-linkedin" on:click={() => goTo(socialLinks.linkedin)}>
				<ThemedAsset src="/logo/LinkedIn/black.png" alt="LinkedIn" className="link-icon" />
				<span class="link-text">LinkedIn</span>
			</button>

			<button class="link-button link-email" on:click={() => goTo(socialLinks.email)}>
				<ThemedAsset src="/icons/Email/black.svg" alt="Email" className="link-icon" />
				<span class="link-text">Email</span>
			</button>
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
			<a href={socialLinks.resume} class="resume-button" download>
				<ThemedAsset src="/icons/Attachment/black.svg" alt="Resume" className="button-icon" />
				Download My Resume
			</a>
		</section>

		<!-- Education with scalloped section -->
		<section class="content-section section-tinted scalloped-section">
			<div class="section-content">
				<h2>Education</h2>
				<div class="education-grid">
					{#each education as edu}
						<div class="education-card">
							<h3 class="edu-institution">{edu.institution}</h3>
							<p class="edu-degree">{edu.degree}</p>
							{#if edu.additional}
								<p class="edu-additional">{edu.additional}</p>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Skills as chips -->
		<section class="content-section">
			<h2>Skills</h2>
			<div class="skills-section">
				{#each skillCategories as category}
					<div class="skill-category">
						<h3 class="skill-category-title">{category.title}</h3>
						<div class="chips-container">
							{#each category.items as skill}
								<span class="chip {category.colorClass}">{skill}</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Work Experience -->
		<section class="content-section section-tinted scalloped-section">
			<div class="section-content">
				<h2>Work Experience</h2>
				<div class="timeline">
					{#each workExperience as job, i}
						<div class="timeline-item">
							<div
								class="timeline-marker"
								style="--accent: var(--md-{i % 2 === 0 ? 'primary' : 'secondary'})"
							></div>
							<div class="timeline-content">
								<div class="timeline-header">
									<div class="timeline-title-group">
										<h3 class="timeline-title">{job.title}</h3>
										<span class="timeline-company">{job.company}</span>
									</div>
									<span class="timeline-period">{job.period}</span>
								</div>
								<ul class="timeline-list">
									{#each job.responsibilities as responsibility}
										<li>{responsibility}</li>
									{/each}
								</ul>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Projects -->
		<section class="content-section">
			<h2>Projects</h2>
			<div class="projects-grid">
				{#each projects as project}
					<div class="project-card">
						<div class="project-header">
							<h3 class="project-title">{project.title}</h3>
							<span class="project-period">{project.period}</span>
						</div>
						<ul class="project-list">
							{#each project.description as desc}
								<li>{desc}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</section>

		<!-- Community Involvement -->
		<section class="content-section section-tinted scalloped-section">
			<div class="section-content">
				<h2>Community Involvement</h2>
				{#each communityInvolvement as involvement}
					<div class="involvement-card">
						<div class="involvement-header">
							<div class="involvement-title-group">
								<h3 class="involvement-title">{involvement.role}</h3>
								<span class="involvement-org">{involvement.organization}</span>
							</div>
							<span class="involvement-period">{involvement.period}</span>
						</div>
						<ul class="involvement-list">
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
