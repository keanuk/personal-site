/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// M3 Expressive Primary - Violet
				primary: {
					DEFAULT: 'var(--md-primary)',
					light: 'var(--md-primary-light)',
					dark: 'var(--md-primary-dark)',
					container: 'var(--md-primary-container)',
					'on-container': 'var(--md-on-primary-container)'
				},
				// M3 Expressive Secondary - Coral
				secondary: {
					DEFAULT: 'var(--md-secondary)',
					light: 'var(--md-secondary-light)',
					dark: 'var(--md-secondary-dark)',
					container: 'var(--md-secondary-container)',
					'on-container': 'var(--md-on-secondary-container)'
				},
				// M3 Expressive Tertiary - Teal
				tertiary: {
					DEFAULT: 'var(--md-tertiary)',
					light: 'var(--md-tertiary-light)',
					dark: 'var(--md-tertiary-dark)',
					container: 'var(--md-tertiary-container)',
					'on-container': 'var(--md-on-tertiary-container)'
				},
				// Surface colors
				surface: {
					DEFAULT: 'var(--md-surface)',
					dim: 'var(--md-surface-dim)',
					bright: 'var(--md-surface-bright)',
					'container-lowest': 'var(--md-surface-container-lowest)',
					'container-low': 'var(--md-surface-container-low)',
					container: 'var(--md-surface-container)',
					'container-high': 'var(--md-surface-container-high)',
					'container-highest': 'var(--md-surface-container-highest)'
				},
				// On-surface colors
				'on-surface': {
					DEFAULT: 'var(--md-on-surface)',
					variant: 'var(--md-on-surface-variant)'
				},
				// Outline colors
				outline: {
					DEFAULT: 'var(--md-outline)',
					variant: 'var(--md-outline-variant)'
				},
				// Background
				background: {
					DEFAULT: 'var(--md-background)',
					light: 'var(--md-surface-container)'
				},
				// Legacy compatibility
				accent: 'var(--md-tertiary)',
				text: {
					DEFAULT: 'var(--md-on-surface)',
					light: 'var(--md-on-surface-variant)'
				},
				footer: {
					bg: 'var(--md-surface-container)',
					border: 'var(--md-outline-variant)'
				}
			},
			fontFamily: {
				sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				display: ['Outfit', 'Inter', 'sans-serif']
			},
			spacing: {
				15: '60px',
				45: '180px'
			},
			maxWidth: {
				content: 'var(--max-content-width)'
			},
			borderRadius: {
				custom: 'var(--border-radius)',
				sm: 'var(--border-radius-sm)',
				lg: 'var(--border-radius-lg)',
				scallop: '24px'
			},
			boxShadow: {
				'md-sm': 'var(--md-shadow-sm)',
				md: 'var(--md-shadow)',
				'md-md': 'var(--md-shadow-md)',
				'md-lg': 'var(--md-shadow-lg)',
				'md-xl': 'var(--md-shadow-xl)',
				card: 'var(--md-shadow)',
				'card-hover': 'var(--md-shadow-lg)'
			},
			animation: {
				spectrum: 'spectrum 15s ease-in-out infinite',
				shimmer: 'shimmer 2s infinite',
				wiggle: 'wiggle 3s ease-in-out infinite',
				'wiggle-slow': 'wiggle 5s ease-in-out infinite',
				'bounce-soft': 'bounce-soft 0.5s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				float: 'float 6s ease-in-out infinite'
			},
			keyframes: {
				spectrum: {
					'0%': { backgroundPosition: '0% 0%, 0% 50%' },
					'50%': { backgroundPosition: '100% 100%, 100% 50%' },
					'100%': { backgroundPosition: '0% 0%, 0% 50%' }
				},
				shimmer: {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' }
				},
				wiggle: {
					'0%, 100%': { transform: 'translateX(0)' },
					'25%': { transform: 'translateX(-5px)' },
					'75%': { transform: 'translateX(5px)' }
				},
				'bounce-soft': {
					'0%': { transform: 'scale(0.95)' },
					'50%': { transform: 'scale(1.02)' },
					'100%': { transform: 'scale(1)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			backgroundImage: {
				'hero-gradient': 'var(--hero-gradient)',
				'shimmer-gradient':
					'linear-gradient(90deg, var(--md-surface-container) 0%, var(--md-surface) 50%, var(--md-surface-container) 100%)'
			},
			backgroundSize: {
				shimmer: '200% 100%'
			},
			transitionTimingFunction: {
				standard: 'var(--easing-standard)',
				emphasized: 'var(--easing-emphasized)',
				bounce: 'var(--easing-bounce)'
			},
			transitionDuration: {
				fast: 'var(--duration-fast)',
				normal: 'var(--duration-normal)',
				slow: 'var(--duration-slow)'
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		function ({ addUtilities }) {
			const newUtilities = {
				'.text-shadow-hero': {
					textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
				},
				'.text-shadow-hero-dark': {
					textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)'
				},
				'.text-gradient': {
					background: 'var(--primary-gradient)',
					backgroundClip: 'text',
					'-webkit-background-clip': 'text',
					'-webkit-text-fill-color': 'transparent'
				}
			};
			addUtilities(newUtilities);
		}
	],
	darkMode: ['class', '[data-theme="dark"]']
};
