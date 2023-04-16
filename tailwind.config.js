/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./dist/index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#ffffff',
			'green': '#2FAC4B',
			'green--light': '#34BF53',
			'green--dark': '#339649',
			'navy': '#0D213F',
			'navy--light': '#0D213F',
			'cream': '#8892B0',
		},
	},
	plugins: [],
}

