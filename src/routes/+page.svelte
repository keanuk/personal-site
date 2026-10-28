<script>
	import { asset } from '$app/paths';
	import Navbar from '#lib/components/Navbar.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import ThemedAsset from '#lib/components/ThemedAsset.svelte';
	import {
		personalInfo,
		socialLinks,
		education,
		skills,
		professionalExperience,
		openSourceContributions,
		aboutMe
	} from '#lib/data.ts';
	import '../styles/page.css';

	const skillCategories = [
		{ title: 'Languages', items: skills.languages, colorClass: 'chip-primary' },
		{
			title: 'Distributed Systems & APIs',
			items: skills.distributedSystemsAndApis,
			colorClass: 'chip-secondary'
		},
		{
			title: 'Cloud & Infrastructure',
			items: skills.cloudAndInfrastructure,
			colorClass: 'chip-tertiary'
		},
		{ title: 'Data & Storage', items: skills.dataAndStorage, colorClass: 'chip-primary' }
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
	<section class="hero">
		<div class="hero-background">
			<div class="hero-content">
				<span class="hero-greeting">Hello, I'm</span>
				<h1 class="hero-title">{personalInfo.fullName}</h1>
				<p class="hero-subtitle">{personalInfo.jobTitle}</p>
			</div>
		</div>
	</section>

	<section class="quick-links" aria-label="Social links">
		<div class="cards-container">
			<a class="link-button" href={socialLinks.github} target="_blank" rel="noreferrer external">
				<ThemedAsset src="/logo/GitHub/black.svg" alt="" className="link-icon" />
				<span class="link-text">GitHub</span>
			</a>
			<a class="link-button" href={socialLinks.linkedin} target="_blank" rel="noreferrer external">
				<ThemedAsset src="/logo/LinkedIn/black.png" alt="" className="link-icon" />
				<span class="link-text">LinkedIn</span>
			</a>
			<a class="link-button" href={socialLinks.email} rel="external">
				<ThemedAsset src="/icons/Email/black.svg" alt="" className="link-icon" />
				<span class="link-text">Email</span>
			</a>
		</div>
	</section>

	<div class="main-content">
		<section class="content-section">
			<h2>About Me</h2>
			<div class="about-content">
				<p class="about-text">{aboutMe}</p>
				<a href={asset(socialLinks.resume)} class="resume-button" download>
					<ThemedAsset src="/icons/Attachment/black.svg" alt="" className="button-icon" />
					Download My Resume
				</a>
			</div>
		</section>

		<section class="content-section section-tinted scalloped-section">
			<div class="section-content">
				<h2>Education</h2>
				<div class="education-grid">
					{#each education as edu (edu.institution)}
						<div class="education-card">
							<h3 class="edu-institution">{edu.institution}</h3>
							<p class="edu-degree">{edu.degree}</p>
							<p class="edu-additional">{edu.period}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section class="content-section">
			<h2>Technical Skills</h2>
			<div class="skills-section">
				{#each skillCategories as category (category.title)}
					<div class="skill-category">
						<h3 class="skill-category-title">{category.title}</h3>
						<div class="chips-container">
							{#each category.items as skill (skill)}
								<span class="chip {category.colorClass}">{skill}</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</section>

		<section class="content-section section-tinted scalloped-section">
			<div class="section-content">
				<h2>Professional Experience</h2>
				<div class="timeline">
					{#each professionalExperience as job (job.company)}
						<div class="timeline-item">
							<div class="timeline-marker"></div>
							<div class="timeline-content">
								<div class="timeline-header">
									<div>
										<h3 class="timeline-title">{job.title}</h3>
										<span class="timeline-company">{job.company} · {job.location}</span>
									</div>
									<span class="timeline-period">{job.period}</span>
								</div>
								<ul class="timeline-list">
									{#each job.responsibilities as responsibility (responsibility)}
										<li>{responsibility}</li>
									{/each}
								</ul>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section class="content-section">
			<div class="section-content">
				<h2>Open Source Contributions</h2>
				{#each openSourceContributions as involvement (involvement.organization)}
					<div class="involvement-card">
						<div class="involvement-header">
							<div>
								<h3 class="involvement-title">{involvement.role}</h3>
								<a
									class="involvement-org"
									href={involvement.url}
									target="_blank"
									rel="noreferrer external">{involvement.organization}</a
								>
							</div>
							<span class="involvement-period">{involvement.period}</span>
						</div>
						<ul class="involvement-list">
							{#each involvement.activities as activity (activity)}
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
