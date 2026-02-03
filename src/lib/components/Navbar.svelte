<script>
	import { onMount } from 'svelte';
	import { personalInfo } from '$lib/data';
	import ThemedAsset from './ThemedAsset.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let isScrolled = false;

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Check initial state

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<nav class="navbar" class:scrolled={isScrolled}>
	<div class="navbar-content">
		<div class="navbar-left">
			<a href="/" class="logo-link">
				<ThemedAsset src="/logo/Keanu/black.svg" alt="Logo" className="logo" />
			</a>
			<span class="name">{personalInfo.fullName}</span>
		</div>

		<div class="navbar-right">
			<ThemeToggle />
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
		z-index: 1000;
		transition: all 0.4s var(--easing-emphasized);
	}

	/* Default state: edge-to-edge, near-transparent */
	.navbar-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 64px;
		padding: 0 24px;
		background: transparent;
		border-bottom: 1px solid transparent;
		transition: all 0.4s var(--easing-emphasized);
		max-width: 100%;
		margin: 0;
		border-radius: 0;
	}

	/* Scrolled state: floating pill, solid background */
	.navbar.scrolled {
		top: 12px;
		left: 50%;
		right: auto;
		transform: translateX(-50%);
		width: min(900px, calc(100vw - 32px));
	}

	.navbar.scrolled .navbar-content {
		border-radius: 9999px;
		padding: 0 8px 0 16px;
		height: 56px;
		background: rgba(255, 255, 255, 0.92);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		box-shadow: var(--md-shadow-lg);
		border: 1px solid var(--md-outline-variant);
	}

	/* Dark mode - transparent initial, solid when scrolled */
	:global([data-theme='dark']) .navbar-content {
		background: transparent;
		border-color: transparent;
	}

	:global([data-theme='dark']) .navbar.scrolled .navbar-content {
		background: rgba(33, 31, 38, 0.95);
		border-color: var(--md-outline-variant);
	}

	.navbar-left {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.logo-link {
		display: flex;
		align-items: center;
		transition: transform 0.3s var(--easing-bounce);
	}

	.logo-link:hover {
		transform: scale(1.05);
	}

	:global(.logo) {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		border: 2px solid var(--md-primary);
		padding: 2px;
		transition: all 0.3s var(--easing-standard);
	}

	.navbar.scrolled :global(.logo) {
		width: 32px;
		height: 32px;
	}

	.name {
		font-family: 'Outfit', sans-serif;
		font-weight: 600;
		font-size: 1.1rem;
		color: var(--md-on-surface);
		letter-spacing: -0.01em;
		transition: font-size 0.3s var(--easing-standard);
	}

	.navbar.scrolled .name {
		font-size: 1rem;
	}

	.navbar-right {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.navbar.scrolled .navbar-right {
		gap: 8px;
	}

	.profile-image {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		object-fit: cover;
		border: 2px solid var(--md-tertiary);
		transition: all 0.3s var(--easing-bounce);
	}

	.navbar.scrolled .profile-image {
		width: 36px;
		height: 36px;
	}

	.profile-image:hover {
		transform: scale(1.08);
		border-color: var(--md-secondary);
	}

	@media (max-width: 768px) {
		.navbar-content {
			padding: 0 16px;
			height: 56px;
		}

		.navbar.scrolled {
			top: 8px;
			width: calc(100vw - 24px);
		}

		.navbar.scrolled .navbar-content {
			padding: 0 6px 0 12px;
			height: 52px;
		}

		.name {
			font-size: 1rem;
		}

		.navbar.scrolled .name {
			font-size: 0.9rem;
		}

		:global(.logo),
		.profile-image {
			width: 32px;
			height: 32px;
		}

		.navbar.scrolled :global(.logo),
		.navbar.scrolled .profile-image {
			width: 28px;
			height: 28px;
		}
	}

	@media (max-width: 480px) {
		.name {
			display: none;
		}

		.navbar-content {
			padding: 0 12px;
		}

		.navbar.scrolled .navbar-content {
			padding: 0 8px;
		}
	}
</style>
