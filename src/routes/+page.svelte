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

	// Import external stylesheets
	import '../styles/page.css';
	import '../styles/components.css';

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

<!-- Styles are now imported from separate CSS files -->
