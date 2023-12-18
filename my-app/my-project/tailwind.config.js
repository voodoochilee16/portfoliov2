/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				os: ['Oswald', 'sans-serif'],
				ms: ['Montserrat', 'sans-serif'],
				khu: ['Khula', 'sans-serif']
			},
			colors: {
				sabbath: '#6D33A6'
			}
		}
	},
	plugins: []
};
