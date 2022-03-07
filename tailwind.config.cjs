const colors = require('tailwindcss/colors')

const config = {
  content: ['./src/**/*.{html,js,svelte,md}'],
  theme: {
    extend: {
			colors: {
				gray: colors.neutral,
				brand: {
					...colors.indigo,
					DEFAULT: colors.indigo['600'],
					deep: colors.indigo['700'],
				},
			},
			borderRadius: {
				DEFAULT: '6px',
			},
			fontSize: {
				'2xs': ['0.625rem', { lineHeight: '1' }],
			},
			lineHeight: {
				0: '0',
			},
		},
		container: {
			center: true,
			padding: '1rem',
		}
  },
  plugins: [],
}

module.exports = config
