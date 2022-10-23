/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{svelte,js,ts}'],
	theme: {
		extend: {},
		colors: {
			primary: '#0b0d17',
      secondary: '#d0d6f9',
      white:"#ffffff"
		},
	},
	plugins: [],
};
