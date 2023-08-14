/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	content: [],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		colors: {
			white: colors.white,
			gray: colors.slate,
			blue: colors.blue,
			green: colors.emerald,
			red: colors.rose,
			pink: colors.pink,
			primary: colors.indigo,
		},
		extend: {},
	},
	plugins: [],
}

