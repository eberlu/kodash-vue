/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

module.exports = {
	content: [
		// Example content paths...
		'./public/**/*.html',
		'./src/**/*.{js,jsx,ts,tsx,vue}',
	],	
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		colors: {
			white: colors.white,
			dark: colors.gray[800],
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

