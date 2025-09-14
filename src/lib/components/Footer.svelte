<script>
	import { personalInfo, socialLinks } from '$lib/data';
	import ThemeToggle from './ThemeToggle.svelte';
	import ThemedAsset from './ThemedAsset.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer-content">
		<div class="theme-toggle-container">
			<ThemeToggle />
		</div>

		<div class="social-links">
			<a href={socialLinks.github} title="GitHub" class="social-link">
				<ThemedAsset src="/logo/GitHub/black.svg" alt="GitHub" className="icon" />
			</a>
			<a href={socialLinks.gitlab} title="GitLab" class="social-link">
				<ThemedAsset src="/logo/GitLab/black.svg" alt="GitLab" className="icon" />
			</a>
			<a href={socialLinks.linkedin} title="LinkedIn" class="social-link">
				<ThemedAsset src="/logo/LinkedIn/black.png" alt="LinkedIn" className="icon" />
			</a>
			<a href={socialLinks.email} title="Email" class="social-link">
				<ThemedAsset src="/icons/Email/black.svg" alt="Email" className="icon" />
			</a>
			<a href={socialLinks.resume} title="Resume" class="social-link">
				<ThemedAsset src="/icons/Attachment/black.svg" alt="Resume" className="icon" />
			</a>
		</div>

		<div class="footer-links">
			<a href={socialLinks.sourceCode} title="Source Code">View Source</a>
		</div>

		<div class="footer-links">
			<a href={socialLinks.reportIssue} title="Report Issue">Report an Issue</a>
		</div>

		<div class="copyright">
			<span class="copyleft">©</span>
			{currentYear}
			{personalInfo.fullName}. Made in {personalInfo.location}.
		</div>
	</div>
</footer>

<style>
	.footer {
		background-color: var(--footer-background);
		padding: 2rem 1rem;
		text-align: center;
		margin-top: auto;
		border-top: 1px solid var(--footer-border);
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}

	.copyright {
		font-size: 0.9rem;
		color: var(--text-light);
	}

	.copyleft {
		display: inline-block;
		transform: scaleX(-1);
	}

	.theme-toggle-container {
		display: flex;
		justify-content: center;
	}

	.social-links {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.social-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		border-radius: 8px;
		transition: background-color 0.2s ease;
	}

	.social-link:hover {
		background-color: var(--social-link-hover);
	}

	:global(.icon) {
		width: 24px;
		height: 24px;
	}

	.footer-links {
		font-size: 0.9rem;
	}

	.footer-links a {
		color: var(--primary-color);
		text-decoration: underline;
	}

	.footer-links a:hover {
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.footer {
			padding: 1.5rem 1rem;
		}

		.social-links {
			gap: 0.75rem;
		}

		:global(.icon) {
			width: 20px;
			height: 20px;
		}
	}
</style>
