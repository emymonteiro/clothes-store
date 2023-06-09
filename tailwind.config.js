/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{svelte,js,ts}'],
	theme: {
		fontFamily: {
			primary: 'Poppins'
		},
		container: {
			padding: {
				DEFAULT: '30px',
				lg: '0'
			}
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
			'2xl': '1536px',
			'3xl': '1800px',
			'4xl': '1920px'
		},
		extend: {
			colors: {
				primary: '#222222',
				secondary: '#F5E6E0'
			},
			backgroundImage: {
				hero: "url('./img/bg_hero.svg')"
			}
		}
	},
	plugins: []
};
