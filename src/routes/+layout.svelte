<script>
	import '../app.css';
	import { theme } from '#lib/stores/theme.js';
	import { initPlausible } from '#lib/utils/plausible.ts';
	import { onMount } from 'svelte';

	onMount(() => {
		theme.init();
		initPlausible();
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
