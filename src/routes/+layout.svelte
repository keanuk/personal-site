<script>
	import '../app.css';
	import { theme } from '$lib/stores/theme';
	import { initPlausible } from '$lib/utils/plausible';
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
