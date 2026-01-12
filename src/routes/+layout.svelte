<script>
	import '../app.css';
	import { theme } from '$lib/stores/theme';
	import { enableAutoPageviews } from '$lib/utils/plausible';
	import { onMount, onDestroy } from 'svelte';

	/** @type {(() => void) | undefined} */
	let cleanupPageviews;

	onMount(() => {
		theme.init();

		// Initialize Plausible analytics with automatic pageview tracking
		// This tracks initial pageview and subsequent SPA navigations
		enableAutoPageviews().then((cleanup) => {
			cleanupPageviews = cleanup;
		});
	});

	onDestroy(() => {
		if (cleanupPageviews) cleanupPageviews();
	});
</script>

<main>
	<slot />
</main>

<style>
	main {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>
