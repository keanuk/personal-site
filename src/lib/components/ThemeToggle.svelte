<script>
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	let currentTheme = 'system';
	let effectiveTheme = 'light';

	// Subscribe to theme changes
	theme.subscribe((value) => {
		currentTheme = value;
		updateEffectiveTheme();
	});

	function updateEffectiveTheme() {
		if (typeof window === 'undefined') return;

		if (currentTheme === 'system') {
			effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		} else {
			effectiveTheme = currentTheme;
		}
	}

	onMount(() => {
		theme.init();
		updateEffectiveTheme();

		// Listen for system theme changes
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', updateEffectiveTheme);

		return () => {
			mediaQuery.removeEventListener('change', updateEffectiveTheme);
		};
	});

	function toggleTheme() {
		// Cycle through: light -> dark -> system -> light
		if (currentTheme === 'light') {
			theme.set('dark');
		} else if (currentTheme === 'dark') {
			theme.set('system');
		} else {
			theme.set('light');
		}
	}

	function getLabel() {
		switch (currentTheme) {
			case 'light':
				return 'Light';
			case 'dark':
				return 'Dark';
			case 'system':
				return 'Auto';
			default:
				return 'Auto';
		}
	}
</script>

<button
	class="theme-toggle"
	on:click={toggleTheme}
	aria-label="Toggle theme, currently {getLabel()}"
	title="Theme: {getLabel()}"
>
	<div class="toggle-track" class:dark={effectiveTheme === 'dark'}>
		<div class="toggle-icons">
			<span class="icon sun" class:active={effectiveTheme === 'light'}>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<circle cx="12" cy="12" r="5" />
					<line x1="12" y1="1" x2="12" y2="3" />
					<line x1="12" y1="21" x2="12" y2="23" />
					<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
					<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
					<line x1="1" y1="12" x2="3" y2="12" />
					<line x1="21" y1="12" x2="23" y2="12" />
					<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
					<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
				</svg>
			</span>
			<span class="icon moon" class:active={effectiveTheme === 'dark'}>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
				</svg>
			</span>
		</div>
		<div class="toggle-thumb" class:dark={effectiveTheme === 'dark'}>
			{#if currentTheme === 'system'}
				<span class="system-indicator">A</span>
			{/if}
		</div>
	</div>
</button>

<style>
	.theme-toggle {
		display: flex;
		align-items: center;
		padding: 0;
		background: transparent;
		border: none;
		cursor: pointer;
		outline: none;
		-webkit-tap-highlight-color: transparent;
	}

	.theme-toggle:focus-visible {
		outline: 2px solid var(--md-primary);
		outline-offset: 4px;
		border-radius: 999px;
	}

	.toggle-track {
		position: relative;
		width: 56px;
		height: 32px;
		border-radius: 999px;
		background: linear-gradient(
			135deg,
			var(--md-secondary-container) 0%,
			var(--md-tertiary-container) 100%
		);
		transition: background 0.4s var(--easing-standard);
		overflow: hidden;
	}

	.toggle-track.dark {
		background: linear-gradient(
			135deg,
			var(--md-primary-container) 0%,
			var(--md-secondary-container) 100%
		);
	}

	.toggle-icons {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 6px;
		pointer-events: none;
	}

	.icon {
		width: 16px;
		height: 16px;
		opacity: 0.4;
		transition:
			opacity 0.3s var(--easing-standard),
			transform 0.3s var(--easing-bounce);
		color: var(--md-on-surface);
	}

	.icon.active {
		opacity: 1;
		transform: scale(1.1);
	}

	.icon svg {
		width: 100%;
		height: 100%;
	}

	.toggle-thumb {
		position: absolute;
		top: 4px;
		left: 4px;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: var(--md-surface);
		box-shadow: var(--md-shadow-sm);
		transition:
			transform 0.4s var(--easing-bounce),
			background 0.3s var(--easing-standard);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.toggle-thumb.dark {
		transform: translateX(24px);
	}

	.system-indicator {
		font-family: 'Outfit', sans-serif;
		font-size: 11px;
		font-weight: 700;
		color: var(--md-primary);
		line-height: 1;
	}

	/* Hover effect */
	.theme-toggle:hover .toggle-thumb {
		box-shadow: var(--md-shadow);
		transform: scale(1.05);
	}

	.theme-toggle:hover .toggle-thumb.dark {
		transform: translateX(24px) scale(1.05);
	}

	/* Active press effect */
	.theme-toggle:active .toggle-thumb {
		transform: scale(0.95);
	}

	.theme-toggle:active .toggle-thumb.dark {
		transform: translateX(24px) scale(0.95);
	}

	@media (max-width: 768px) {
		.toggle-track {
			width: 48px;
			height: 28px;
		}

		.toggle-thumb {
			width: 20px;
			height: 20px;
			top: 4px;
			left: 4px;
		}

		.toggle-thumb.dark {
			transform: translateX(20px);
		}

		.theme-toggle:hover .toggle-thumb.dark {
			transform: translateX(20px) scale(1.05);
		}

		.icon {
			width: 14px;
			height: 14px;
		}

		.system-indicator {
			font-size: 10px;
		}
	}
</style>
