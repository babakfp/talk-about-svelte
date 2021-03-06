const colors = require('tailwindcss/colors')
const overflowUtilities = require('./src/utilities/tailwind/utilities/overflow.cjs')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,md}'],
  theme: {
    extend: {
			minHeight: theme => theme('spacing'),
			colors: {
				gray: colors.slate,
				brand: {
					...colors.indigo,
					DEFAULT: colors.indigo['600'],
					deep: colors.indigo['700'],
				},
			},
			borderRadius: {
				DEFAULT: '8px',
			},
			fontSize: {
				'2xs': ['0.625rem', { lineHeight: '1' }],
			},
			lineHeight: {
				0: '0',
			},
			borderWidth: {
				3: '3px',
			},
		},
		container: {
			center: true,
			padding: '1rem',
		},
		fontFamily: {
			en: ['Poppins', 'sans-serif', 'Vazirmatn'],
      code: ['MonoLisa', 'Consolas', 'Monaco', '"Andale Mono"', '"Ubuntu Mono"', 'monospace', 'Vazirmatn'],
		},
  },
  plugins: [
		overflowUtilities,
	],
}
