<script>
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	let isOpen = false;
	let currentTheme = 'system';

	// Subscribe to theme changes
	theme.subscribe((value) => {
		currentTheme = value;
	});

	onMount(() => {
		theme.init();
	});

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function selectTheme(/** @type {string} */ selectedTheme) {
		theme.set(selectedTheme);
		isOpen = false;
	}

	function handleClickOutside(/** @type {MouseEvent} */ event) {
		const target = /** @type {Element} */ (event.target);
		const dropdown = document.querySelector('.theme-toggle');
		if (dropdown && !dropdown.contains(target)) {
			isOpen = false;
		}
	}

	function getThemeIcon(/** @type {string} */ themeValue) {
		switch (themeValue) {
			case 'light':
				return '☀️';
			case 'dark':
				return '🌙';
			case 'system':
				return '⚙️';
			default:
				return '⚙️';
		}
	}

	function getThemeLabel(/** @type {string} */ themeValue) {
		switch (themeValue) {
			case 'light':
				return 'Light';
			case 'dark':
				return 'Dark';
			case 'system':
				return 'System';
			default:
				return 'System';
		}
	}
</script>

<svelte:window on:click={handleClickOutside} />

<div class="theme-toggle">
	<button
		class="theme-button"
		on:click={toggleDropdown}
		aria-label="Toggle theme"
		aria-expanded={isOpen}
		aria-haspopup="true"
	>
		<span class="theme-icon">{getThemeIcon(currentTheme)}</span>
		<span class="theme-label">{getThemeLabel(currentTheme)}</span>
		<span class="dropdown-arrow" class:rotated={isOpen}>▼</span>
	</button>

	{#if isOpen}
		<div class="theme-dropdown">
			<button
				class="theme-option"
				class:active={currentTheme === 'light'}
				on:click={() => selectTheme('light')}
			>
				<span class="option-icon">☀️</span>
				<span>Light</span>
			</button>
			<button
				class="theme-option"
				class:active={currentTheme === 'dark'}
				on:click={() => selectTheme('dark')}
			>
				<span class="option-icon">🌙</span>
				<span>Dark</span>
			</button>
			<button
				class="theme-option"
				class:active={currentTheme === 'system'}
				on:click={() => selectTheme('system')}
			>
				<span class="option-icon">⚙️</span>
				<span>System</span>
			</button>
		</div>
	{/if}
</div>

<style>
	.theme-toggle {
		position: relative;
		display: inline-block;
	}

	.theme-button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 0.75rem;
		background: var(--background-color);
		border: 1px solid var(--footer-border);
		border-radius: 6px;
		color: var(--text-color);
		font-size: 0.875rem;
		cursor: pointer;
		transition: all 0.2s ease;
		min-width: 100px;
	}

	.theme-button:hover {
		background: var(--background-light);
		border-color: var(--primary-color);
	}

	.theme-button:focus {
		outline: 2px solid var(--primary-color);
		outline-offset: 2px;
	}

	.theme-icon {
		font-size: 1rem;
	}

	.theme-label {
		flex: 1;
		text-align: left;
	}

	.dropdown-arrow {
		font-size: 0.75rem;
		transition: transform 0.2s ease;
	}

	.dropdown-arrow.rotated {
		transform: rotate(180deg);
	}

	.theme-dropdown {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		margin-top: 0.25rem;
		background: var(--background-color);
		border: 1px solid var(--footer-border);
		border-radius: 6px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		z-index: 1000;
		overflow: hidden;
	}

	:global([data-theme='dark']) .theme-dropdown {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
	}

	.theme-option {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
		padding: 0.75rem;
		background: transparent;
		border: none;
		color: var(--text-color);
		font-size: 0.875rem;
		cursor: pointer;
		transition: background-color 0.2s ease;
		text-align: left;
	}

	.theme-option:hover {
		background: var(--social-link-hover);
	}

	.theme-option.active {
		background: var(--primary-color);
		color: white;
	}

	.theme-option.active:hover {
		background: var(--primary-color);
	}

	.option-icon {
		font-size: 1rem;
		width: 1.25rem;
		text-align: center;
	}

	@media (max-width: 768px) {
		.theme-button {
			min-width: 90px;
			font-size: 0.8rem;
			padding: 0.4rem 0.6rem;
		}

		.theme-option {
			padding: 0.6rem;
			font-size: 0.8rem;
		}
	}
</style>
