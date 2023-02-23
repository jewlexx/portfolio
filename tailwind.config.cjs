/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
		},
		colors: {
			'light-gray': '#dad6d6ff',
			'cambridge-blue': '#92bfb1ff',
			'yellow-orange': '#f4ac45ff',
			coffee: '#694a38ff',
			'vivid-burgundy': '#a61c3cff'
		},
		extend: {}
	},
	plugins: []
};
