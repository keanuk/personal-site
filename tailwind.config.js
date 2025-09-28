/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'var(--primary-color)',
					light: '#9f4fff',
					dark: '#7700ff'
				},
				blue: {
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af'
				},
				purple: {
					600: '#7c3aed',
					700: '#6d28d9',
					800: '#5b21b6',
					900: '#4c1d95'
				},
				accent: 'var(--accent-color)',
				text: {
					DEFAULT: 'var(--text-color)',
					light: 'var(--text-light)'
				},
				background: {
					DEFAULT: 'var(--background-color)',
					light: 'var(--background-light)'
				},
				footer: {
					bg: 'var(--footer-background)',
					border: 'var(--footer-border)'
				},
				white: '#ffffff',
				gray: {
					300: '#d1d5db',
					500: '#6b7280'
				},
				green: {
					50: '#f0fdf4',
					200: '#bbf7d0',
					400: '#4ade80',
					600: '#16a34a',
					800: '#166534',
					900: '#14532d'
				},
				yellow: {
					50: '#fefce8',
					200: '#fef08a',
					400: '#facc15',
					600: '#ca8a04',
					800: '#854d0e',
					900: '#713f12'
				},
				red: {
					50: '#fef2f2',
					200: '#fecaca',
					400: '#f87171',
					600: '#dc2626',
					800: '#991b1b',
					900: '#7f1d1d'
				}
			},
			fontFamily: {
				sans: [
					'Roboto',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'sans-serif'
				]
			},
			spacing: {
				15: '60px',
				45: '180px'
			},
			maxWidth: {
				content: 'var(--max-content-width)'
			},
			borderRadius: {
				custom: 'var(--border-radius)'
			},
			boxShadow: {
				card: 'var(--card-shadow)',
				'card-hover': 'var(--card-shadow-hover)'
			},
			animation: {
				spectrum: 'spectrum 15s ease-in-out infinite',
				shimmer: 'shimmer 2s infinite'
			},
			keyframes: {
				spectrum: {
					'0%': {
						backgroundPosition: '0% 0%, 0% 50%'
					},
					'16.67%': {
						backgroundPosition: '0% 0%, 20% 30%'
					},
					'33.33%': {
						backgroundPosition: '0% 0%, 40% 70%'
					},
					'50%': {
						backgroundPosition: '0% 0%, 60% 20%'
					},
					'66.67%': {
						backgroundPosition: '0% 0%, 80% 80%'
					},
					'83.33%': {
						backgroundPosition: '0% 0%, 100% 40%'
					},
					'100%': {
						backgroundPosition: '0% 0%, 0% 50%'
					}
				},
				shimmer: {
					'0%': {
						backgroundPosition: '200% 0'
					},
					'100%': {
						backgroundPosition: '-200% 0'
					}
				}
			},
			backgroundImage: {
				'hero-gradient':
					'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffd93d, #ff9ff3, #6c5ce7)',
				'hero-dots-1':
					'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
				'shimmer-gradient':
					'linear-gradient(90deg, var(--background-light) 0%, var(--background-color) 50%, var(--background-light) 100%)'
			},
			backgroundSize: {
				'hero-pattern': '20px 20px, 600% 600%',
				'hero-dots': '15px 15px, 25px 25px',
				shimmer: '200% 100%'
			},
			textShadow: {
				hero: '0 1px 2px rgba(0, 0, 0, 0.3)',
				'hero-dark': '0 1px 2px rgba(0, 0, 0, 0.8)'
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		function ({ addUtilities }) {
			const newUtilities = {
				'.text-shadow-hero': {
					textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
				},
				'.text-shadow-hero-dark': {
					textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)'
				}
			};
			addUtilities(newUtilities);
		}
	],
	darkMode: ['class', '[data-theme="dark"]']
};
