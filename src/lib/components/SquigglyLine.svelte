<script>
	/**
	 * Animated squiggly line SVG component for decorative accents
	 * @prop {string} color - CSS color value or CSS variable
	 * @prop {number} strokeWidth - Stroke width in pixels
	 * @prop {'horizontal' | 'vertical'} orientation - Line orientation
	 * @prop {string} className - Additional CSS classes
	 */

	/** @type {string} */
	export let color = 'var(--md-primary)';

	/** @type {number} */
	export let strokeWidth = 3;

	/** @type {'horizontal' | 'vertical'} */
	export let orientation = 'horizontal';

	/** @type {string} */
	export let className = '';

	/** @type {number} */
	export let amplitude = 8;
</script>

{#if orientation === 'horizontal'}
	<svg
		class="squiggly-line squiggly-horizontal {className}"
		viewBox="0 0 200 30"
		preserveAspectRatio="none"
		aria-hidden="true"
	>
		<path
			d="M0,15 Q10,{15 - amplitude} 20,15 Q30,{15 + amplitude} 40,15 Q50,{15 -
				amplitude} 60,15 Q70,{15 + amplitude} 80,15 Q90,{15 - amplitude} 100,15 Q110,{15 +
				amplitude} 120,15 Q130,{15 - amplitude} 140,15 Q150,{15 + amplitude} 160,15 Q170,{15 -
				amplitude} 180,15 Q190,{15 + amplitude} 200,15"
			fill="none"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			class="squiggly-path"
		/>
	</svg>
{:else}
	<svg
		class="squiggly-line squiggly-vertical {className}"
		viewBox="0 0 30 200"
		preserveAspectRatio="none"
		aria-hidden="true"
	>
		<path
			d="M15,0 Q{15 - amplitude},10 15,20 Q{15 + amplitude},30 15,40 Q{15 -
				amplitude},50 15,60 Q{15 + amplitude},70 15,80 Q{15 - amplitude},90 15,100 Q{15 +
				amplitude},110 15,120 Q{15 - amplitude},130 15,140 Q{15 + amplitude},150 15,160 Q{15 -
				amplitude},170 15,180 Q{15 + amplitude},190 15,200"
			fill="none"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			class="squiggly-path"
		/>
	</svg>
{/if}

<style>
	.squiggly-line {
		overflow: visible;
		pointer-events: none;
	}

	.squiggly-horizontal {
		width: 100%;
		height: 30px;
	}

	.squiggly-vertical {
		width: 30px;
		height: 100%;
	}

	.squiggly-path {
		animation: squiggle 3s ease-in-out infinite;
		transform-origin: center;
	}

	@keyframes squiggle {
		0%,
		100% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-3px);
		}
		75% {
			transform: translateX(3px);
		}
	}

	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.squiggly-path {
			animation: none;
		}
	}
</style>
