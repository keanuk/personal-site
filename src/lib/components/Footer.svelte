<script>
	import { asset } from '$app/paths';
	import { personalInfo, socialLinks } from '#lib/data.ts';
	import ThemedAsset from './ThemedAsset.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer-content">
		<div class="social-links">
			<a href={socialLinks.github} class="social-link" rel="external">
				<ThemedAsset src="/logo/GitHub/black.svg" alt="" className="icon" />
				<span>GitHub</span>
			</a>
			<a href={socialLinks.gitlab} class="social-link" rel="external">
				<ThemedAsset src="/logo/GitLab/black.svg" alt="" className="icon" />
				<span>GitLab</span>
			</a>
			<a href={socialLinks.linkedin} class="social-link" rel="external">
				<ThemedAsset src="/logo/LinkedIn/black.png" alt="" className="icon" />
				<span>LinkedIn</span>
			</a>
			<a href={socialLinks.email} class="social-link" rel="external">
				<ThemedAsset src="/icons/Email/black.svg" alt="" className="icon" />
				<span>Email</span>
			</a>
			<a href={asset(socialLinks.resume)} class="social-link" download>
				<ThemedAsset src="/icons/Attachment/black.svg" alt="" className="icon" />
				<span>Resume</span>
			</a>
		</div>

		<div class="footer-links">
			<a href={socialLinks.sourceCode} rel="external">View Source</a>
			<span aria-hidden="true">·</span>
			<a href={socialLinks.reportIssue} rel="external">Report Issue</a>
		</div>

		<div class="copyright">
			© {currentYear}
			{personalInfo.fullName}
			<span aria-hidden="true">·</span>
			<span>{personalInfo.location}</span>
		</div>
	</div>
</footer>

<style>
	.footer {
		padding: 3rem 1rem 2rem;
		border-top: 1px solid var(--border);
		background: var(--surface);
		text-align: center;
	}

	.footer-content {
		display: flex;
		max-width: 900px;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		margin: 0 auto;
	}

	.social-links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem 1.25rem;
	}

	.social-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.25rem;
		color: var(--muted);
		font-size: 0.85rem;
	}

	.social-link:hover {
		color: var(--accent);
	}

	.social-link :global(.icon) {
		width: 19px;
		height: 19px;
	}

	.footer-links {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		color: var(--muted);
		font-size: 0.8rem;
	}

	.footer-links a {
		color: var(--muted);
	}

	.footer-links a:hover {
		color: var(--accent);
	}

	.copyright {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.25rem;
		color: var(--muted);
		font-size: 0.78rem;
	}

	@media (max-width: 480px) {
		.social-links {
			gap: 0.75rem 1rem;
		}

		.social-link span {
			display: none;
		}

		.social-link :global(.icon) {
			width: 22px;
			height: 22px;
		}
	}
</style>
