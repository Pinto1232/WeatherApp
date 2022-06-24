/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './src/**/*.{js,jsx,ts,tsx}' ],
	theme: {
		extends: {
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
				'4xl': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);'
			}
		},

		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem'
		},

		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			'black-text': '#000',
			purple: '#3f3cbb',
			midnight: '#0284c7',
			metal: '#565584',
			tahiti: '#3ab7bf',
			silver: '#ecebff',
			'bubble-gum': '#ff77e9',
			bermuda: '#78dcca',
			'menu-bg-color': 'rgb(107 114 128)',
			'smooth-black': '#100f10',
			'card-bg': '#0b0c10',
			'about-bg': '#0c0b0e'
		}
	},
	plugins: [ require('@tailwindcss/typography') ]
};
