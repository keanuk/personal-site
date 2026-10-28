<script>
	import { onMount } from 'svelte';
	import { theme } from '#lib/stores/theme.js';

	let currentTheme = 'system';
	let effectiveTheme = 'light';

	$: themeLabel = currentTheme === 'system' ? 'Auto' : currentTheme === 'dark' ? 'Dark' : 'Light';

	theme.subscribe((value) => {
		currentTheme = value;
		updateEffectiveTheme();
	});

	function updateEffectiveTheme() {
		if (typeof window === 'undefined') return;

		effectiveTheme =
			currentTheme === 'system'
				? window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light'
				: currentTheme;
	}

	onMount(() => {
		updateEffectiveTheme();
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', updateEffectiveTheme);

		return () => mediaQuery.removeEventListener('change', updateEffectiveTheme);
	});

	function toggleTheme() {
		theme.set(currentTheme === 'light' ? 'dark' : currentTheme === 'dark' ? 'system' : 'light');
	}
</script>

<button
	class="theme-toggle"
	onclick={toggleTheme}
	aria-label="Theme: {themeLabel}. Activate to change"
	title="Theme: {themeLabel}"
>
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.8"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		{#if effectiveTheme === 'dark'}
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		{:else}
			<circle cx="12" cy="12" r="4" />
			<path
				d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"
			/>
		{/if}
	</svg>
	<span>{themeLabel}</span>
</button>

<style>
	.theme-toggle {
		display: inline-flex;
		height: 36px;
		align-items: center;
		gap: 0.4rem;
		padding: 0 0.75rem;
		border: 1px solid var(--border);
		border-radius: 999px;
		background: transparent;
		color: inherit;
		cursor: pointer;
		font-size: 0.8rem;
		font-weight: 500;
	}

	.theme-toggle:hover {
		opacity: 0.7;
	}

	svg {
		width: 17px;
		height: 17px;
	}
</style>
