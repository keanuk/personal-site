<script>
	import { resolve } from '$app/paths';
	import { personalInfo } from '#lib/data.ts';
	import ThemedAsset from './ThemedAsset.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<nav class="navbar" aria-label="Main navigation">
	<div class="navbar-content">
		<a href={resolve('/')} class="logo-link">
			<span class="logo-frame">
				<ThemedAsset src="/logo/Keanu/black.svg" alt="" className="logo" />
			</span>
			<span class="name">{personalInfo.fullName}</span>
		</a>

		<div class="navbar-right">
			<ThemeToggle />
			<img src="/image/keanu/profile.jpg" alt="" class="profile-image" />
		</div>
	</div>
</nav>

<style>
	.navbar {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		z-index: 10;
		color: var(--header-text);
	}

	.navbar-content {
		display: flex;
		max-width: 960px;
		height: 72px;
		align-items: center;
		justify-content: space-between;
		padding: 0 1.5rem;
		margin: 0 auto;
	}

	.logo-link,
	.navbar-right {
		display: flex;
		align-items: center;
	}

	.logo-link {
		gap: 0.75rem;
		color: var(--header-text);
	}

	.logo-link:hover {
		color: var(--header-text);
		opacity: 0.75;
	}

	.logo-frame {
		display: inline-flex;
		flex-shrink: 0;
		padding: 2px;
		border: 2px solid var(--accent);
		border-radius: 50%;
	}

	.logo-link :global(.logo) {
		display: block;
		width: 28px;
		height: 28px;
		border-radius: 50%;
		object-fit: cover;
	}

	.name {
		font-family: 'Outfit', sans-serif;
		font-size: 1.05rem;
		font-weight: 600;
	}

	.navbar-right {
		gap: 0.85rem;
	}

	.profile-image {
		width: 38px;
		height: 38px;
		border-radius: 50%;
		object-fit: cover;
	}

	@media (max-width: 600px) {
		.navbar-content {
			height: 64px;
			padding: 0 1rem;
		}

		.name {
			display: none;
		}
	}
</style>
