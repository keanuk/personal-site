import { browser } from '$app/environment';

/**
 * Gets the current effective theme from the DOM
 */
export function getCurrentTheme() {
	if (!browser) return 'light';

	const theme = document.documentElement.getAttribute('data-theme');
	return theme === 'dark' ? 'dark' : 'light';
}

/**
 * Assets that should use CSS filter inversion for dark mode
 * These are typically monochrome icons that look good when inverted
 */
export const INVERTIBLE_ASSETS = [
	'/logo/GitHub/black.svg',
	'/logo/Keanu/black.svg',
	'/icons/Email/black.svg',
	'/icons/Attachment/black.svg'
];

/**
 * Check if an asset should use CSS filter inversion
 */
export function shouldInvertAsset(/** @type {string} */ assetPath) {
	return INVERTIBLE_ASSETS.includes(assetPath);
}

/**
 * Gets the appropriate logo/icon path based on the current theme
 * @param basePath - The base path with 'black' in the filename
 * @returns The appropriate path for the current theme
 */
export function getThemedAssetPath(/** @type {string} */ basePath) {
	if (shouldInvertAsset(basePath)) {
		// For assets that should use CSS filter inversion, return the base path
		return basePath;
	}

	// For assets with separate black/white versions, switch based on theme
	const currentTheme = getCurrentTheme();
	if (currentTheme === 'dark') {
		return basePath.replace('/black.', '/white.');
	}

	return basePath;
}

/**
 * Get the appropriate CSS class for an asset based on theme handling strategy
 */
export function getAssetThemeClass(/** @type {string} */ assetPath) {
	return shouldInvertAsset(assetPath) ? 'theme-invertible' : '';
}
