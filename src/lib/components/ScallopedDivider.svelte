<script>
	/**
	 * Scalloped edge divider for section transitions
	 * @prop {'top' | 'bottom'} position - Whether scallop faces up or down
	 * @prop {string} fillColor - CSS color or variable for the scallop fill
	 * @prop {string} className - Additional CSS classes
	 */
	
	/** @type {'top' | 'bottom'} */
	export let position = 'bottom';
	
	/** @type {string} */
	export let fillColor = 'var(--md-surface-container)';
	
	/** @type {string} */
	export let className = '';
	
	/** @type {number} */
	export let scallops = 12;
</script>

<div class="scalloped-divider scalloped-{position} {className}" aria-hidden="true">
	<svg
		viewBox="0 0 1200 40"
		preserveAspectRatio="none"
		class="scallop-svg"
	>
		{#if position === 'bottom'}
			<!-- Scallop facing down (for bottom of sections) -->
			<path
				d="M0,0 
				   {#each Array(scallops) as _, i}
				   Q{(i * (1200 / scallops)) + (600 / scallops)},40 {(i + 1) * (1200 / scallops)},0
				   {/each}
				   L1200,40 L0,40 Z"
				fill={fillColor}
			/>
		{:else}
			<!-- Scallop facing up (for top of sections) -->
			<path
				d="M0,40 
				   {#each Array(scallops) as _, i}
				   Q{(i * (1200 / scallops)) + (600 / scallops)},0 {(i + 1) * (1200 / scallops)},40
				   {/each}
				   L1200,0 L0,0 Z"
				fill={fillColor}
			/>
		{/if}
	</svg>
</div>

<style>
	.scalloped-divider {
		position: relative;
		width: 100%;
		height: 40px;
		overflow: hidden;
		line-height: 0;
	}

	.scallop-svg {
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.scalloped-bottom .scallop-svg {
		top: 0;
	}

	.scalloped-top .scallop-svg {
		bottom: 0;
	}
</style>
