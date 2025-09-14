<script>
	import { onMount } from 'svelte';
	import { personalInfo } from '$lib/data';
	import ThemedAsset from './ThemedAsset.svelte';

	let navbar;
	let isVisible = false;

	onMount(() => {
		const handleScroll = () => {
			if (window.scrollY > 640) {
				isVisible = true;
			} else {
				isVisible = false;
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<nav bind:this={navbar} class="navbar" class:visible={isVisible}>
	<div class="navbar-content">
		<div class="navbar-left">
			<a href="/" class="logo-link">
				<ThemedAsset src="/logo/Keanu/black.svg" alt="Logo" className="logo" />
			</a>
			<span class="name">{personalInfo.fullName}</span>
		</div>

		<div class="navbar-center">
			<!-- Hidden social links (as in original) -->
		</div>

		<div class="navbar-right">
			<img src="/image/keanu/profile.jpg" alt={personalInfo.fullName} class="profile-image" />
		</div>
	</div>
</nav>

<style>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: var(--footer-background);
		z-index: 1000;
		opacity: 0;
		transition:
			opacity 0.3s ease,
			background-color 0.2s ease;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		height: 64px;
		border-bottom: 1px solid var(--footer-border);
	}

	.navbar.visible {
		opacity: 1;
	}

	.navbar-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 16px;
	}

	.navbar-left {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.logo-link {
		display: flex;
		align-items: center;
	}

	:global(.logo) {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	.name {
		font-weight: 500;
		font-size: 1.1rem;
		color: var(--text-color);
	}

	.navbar-center {
		flex: 1;
	}

	.navbar-right {
		display: flex;
		align-items: center;
	}

	.profile-image {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		object-fit: cover;
	}

	@media (max-width: 768px) {
		.navbar-content {
			padding: 0 12px;
		}

		.name {
			font-size: 1rem;
		}

		:global(.logo),
		.profile-image {
			width: 36px;
			height: 36px;
		}
	}
</style>
