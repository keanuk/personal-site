<script>
	import { shouldInvertAsset } from '$lib/utils/theme';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	/** @type {string} */
	export let src;
	/** @type {string} */
	export let alt;
	/** @type {string} */
	export let className = '';
	/** @type {number | undefined} */
	export let width = undefined;
	/** @type {number | undefined} */
	export let height = undefined;

	// Determine if this asset should use CSS inversion or file switching
	const useInvert = shouldInvertAsset(src);
	const themeClass = useInvert ? 'theme-invertible' : '';

	/** @type {string} */
	let currentSrc = src;

	function updateSrc() {
		if (!browser || useInvert) {
			currentSrc = src;
			return;
		}

		const theme = document.documentElement.getAttribute('data-theme');
		if (theme === 'dark') {
			currentSrc = src.replace('/black.', '/white.');
		} else {
			currentSrc = src;
		}
	}

	// Set up mutation observer to watch for theme changes
	onMount(() => {
		updateSrc();

		if (!browser || useInvert) return;

		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
					updateSrc();
				}
			});
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme']
		});

		return () => observer.disconnect();
	});
</script>

<img src={currentSrc} {alt} class="{className} {themeClass}" {width} {height} loading="lazy" />

<style>
	img {
		transition: filter 0.2s ease;
	}
</style>
