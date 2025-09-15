import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Create the theme store
function createThemeStore() {
	const { subscribe, set } = writable('system');

	return {
		subscribe,
		set: (/** @type {string} */ theme) => {
			if (browser) {
				localStorage.setItem('theme-preference', theme);
				applyTheme(theme);
			}
			set(theme);
		},
		init: () => {
			if (browser) {
				const stored = localStorage.getItem('theme-preference');
				const theme = stored || 'system';
				applyTheme(theme);
				set(theme);
			}
		},
	};
}

export const theme = createThemeStore();

// Apply theme to document
function applyTheme(/** @type {string} */ selectedTheme) {
	if (!browser) return;

	const root = document.documentElement;

	if (selectedTheme === 'system') {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
	} else {
		root.setAttribute('data-theme', selectedTheme);
	}
}

// Listen for system theme changes
if (browser) {
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	mediaQuery.addEventListener('change', () => {
		theme.subscribe((currentTheme) => {
			if (currentTheme === 'system') {
				applyTheme('system');
			}
		})();
	});
}

// Get the current effective theme (resolves 'system' to actual theme)
export function getEffectiveTheme() {
	if (!browser) return 'light';

	const root = document.documentElement;
	return root.getAttribute('data-theme') || 'light';
}
