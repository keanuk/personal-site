<script>
	import { personalInfo, socialLinks } from '$lib/data';
	import ThemedAsset from './ThemedAsset.svelte';
	import SquigglyLine from './SquigglyLine.svelte';

	const currentYear = new Date().getFullYear();

	// Social link colors for colorful hover states
	const socialColors = {
		github: 'var(--md-on-surface)',
		gitlab: 'var(--md-secondary)',
		linkedin: 'var(--md-tertiary)',
		email: 'var(--md-primary)',
		resume: 'var(--md-secondary-dark)'
	};
</script>

<footer class="footer">
	<div class="footer-content">
		<!-- Decorative squiggly line -->
		<div class="squiggly-accent">
			<SquigglyLine color="var(--md-primary)" strokeWidth={2} />
		</div>

		<div class="social-links">
			<a href={socialLinks.github} title="GitHub" class="social-link social-github">
				<ThemedAsset src="/logo/GitHub/black.svg" alt="GitHub" className="icon" />
				<span class="social-label">GitHub</span>
			</a>
			<a href={socialLinks.gitlab} title="GitLab" class="social-link social-gitlab">
				<ThemedAsset src="/logo/GitLab/black.svg" alt="GitLab" className="icon" />
				<span class="social-label">GitLab</span>
			</a>
			<a href={socialLinks.linkedin} title="LinkedIn" class="social-link social-linkedin">
				<ThemedAsset src="/logo/LinkedIn/black.png" alt="LinkedIn" className="icon" />
				<span class="social-label">LinkedIn</span>
			</a>
			<a href={socialLinks.email} title="Email" class="social-link social-email">
				<ThemedAsset src="/icons/Email/black.svg" alt="Email" className="icon" />
				<span class="social-label">Email</span>
			</a>
			<a href={socialLinks.resume} title="Resume" class="social-link social-resume" download>
				<ThemedAsset src="/icons/Attachment/black.svg" alt="Resume" className="icon" />
				<span class="social-label">Resume</span>
			</a>
		</div>

		<div class="footer-links">
			<a href={socialLinks.sourceCode} class="footer-link">
				<span class="link-icon">⌨️</span>
				View Source
			</a>
			<span class="divider">•</span>
			<a href={socialLinks.reportIssue} class="footer-link">
				<span class="link-icon">🐛</span>
				Report Issue
			</a>
		</div>

		<div class="copyright">
			<span class="copyleft">©</span>
			{currentYear}
			{personalInfo.fullName}
			<span class="location-dot">·</span>
			<span class="location">{personalInfo.location}</span>
		</div>
	</div>
</footer>

<style>
	.footer {
		position: relative;
		background-color: var(--md-surface-container-highest);
		padding: 2rem 1rem 1.5rem;
		text-align: center;
		margin-top: auto;
	}

	.footer-content {
		max-width: 900px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.25rem;
	}

	.squiggly-accent {
		width: 120px;
		opacity: 0.6;
	}

	.social-links {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.social-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		border-radius: 999px;
		background: var(--md-surface-container-high);
		transition: all 0.3s var(--easing-bounce);
		text-decoration: none;
	}

	.social-label {
		font-size: 0.85rem;
		font-weight: 500;
		color: var(--md-on-surface);
		transition: color 0.3s var(--easing-standard);
	}

	/* Colorful hover states */
	.social-github:hover {
		background: var(--md-surface-container-highest);
		transform: translateY(-2px);
	}

	.social-gitlab:hover {
		background: var(--md-secondary-container);
		transform: translateY(-2px);
	}
	.social-gitlab:hover .social-label {
		color: var(--md-on-secondary-container);
	}

	.social-linkedin:hover {
		background: var(--md-tertiary-container);
		transform: translateY(-2px);
	}
	.social-linkedin:hover .social-label {
		color: var(--md-on-tertiary-container);
	}

	.social-email:hover {
		background: var(--md-primary-container);
		transform: translateY(-2px);
	}
	.social-email:hover .social-label {
		color: var(--md-on-primary-container);
	}

	.social-resume:hover {
		background: var(--md-secondary-container);
		transform: translateY(-2px);
	}
	.social-resume:hover .social-label {
		color: var(--md-on-secondary-container);
	}

	:global(.icon) {
		width: 20px;
		height: 20px;
	}

	.footer-links {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.85rem;
	}

	.footer-link {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		color: var(--md-primary);
		text-decoration: none;
		padding: 0.25rem 0.5rem;
		border-radius: 8px;
		transition: all 0.2s var(--easing-standard);
	}

	.footer-link:hover {
		background: var(--md-primary-container);
		color: var(--md-on-primary-container);
	}

	.link-icon {
		font-size: 0.9rem;
	}

	.divider {
		color: var(--md-outline);
	}

	.copyright {
		font-size: 0.8rem;
		color: var(--md-on-surface-variant);
		display: flex;
		align-items: center;
		gap: 0.25rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.copyleft {
		display: inline-block;
		transform: scaleX(-1);
	}

	.location-dot {
		color: var(--md-outline);
	}

	.location {
		color: var(--md-tertiary);
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.footer {
			padding: 1.5rem 1rem 1rem;
		}

		.social-links {
			gap: 0.375rem;
		}

		.social-link {
			padding: 0.4rem 0.75rem;
		}

		.social-label {
			font-size: 0.75rem;
		}

		:global(.icon) {
			width: 18px;
			height: 18px;
		}

		.footer-links {
			flex-direction: column;
			gap: 0.5rem;
		}

		.divider {
			display: none;
		}
	}

	@media (max-width: 480px) {
		.social-label {
			display: none;
		}

		.social-link {
			padding: 0.5rem;
		}
	}
</style>
