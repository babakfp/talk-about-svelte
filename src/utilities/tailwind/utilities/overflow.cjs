const plugin = require('tailwindcss/plugin')

const overflow = plugin( ({ addUtilities }) => {
	addUtilities({
		'.overflow-overlay': { 'overflow': 'overlay' },
		'.overflow-y-overlay': { 'overflow-y': 'overlay' },
		'.overflow-x-overlay': { 'overflow-x': 'overlay' },

		'.overflow-unset': { 'overflow': 'unset' },
		'.overflow-y-unset': { 'overflow-y': 'unset' },
		'.overflow-x-unset': { 'overflow-x': 'unset' },
	})
})

module.exports = overflow
