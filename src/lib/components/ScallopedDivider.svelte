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

	$: scallopWidth = 1200 / scallops;
	$: bottomPath = `M0,0 ${Array.from({ length: scallops })
		.map((_, i) => `Q${i * scallopWidth + scallopWidth / 2},40 ${(i + 1) * scallopWidth},0`)
		.join(' ')} L1200,40 L0,40 Z`;

	$: topPath = `M0,40 ${Array.from({ length: scallops })
		.map((_, i) => `Q${i * scallopWidth + scallopWidth / 2},0 ${(i + 1) * scallopWidth},40`)
		.join(' ')} L1200,0 L0,0 Z`;
</script>

<div class="scalloped-divider scalloped-{position} {className}" aria-hidden="true">
	<svg viewBox="0 0 1200 40" preserveAspectRatio="none" class="scallop-svg">
		{#if position === 'bottom'}
			<!-- Scallop facing down (for bottom of sections) -->
			<path d={bottomPath} fill={fillColor} />
		{:else}
			<!-- Scallop facing up (for top of sections) -->
			<path d={topPath} fill={fillColor} />
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
